import fs from 'node:fs';
import path from 'node:path';
import { transform } from '@svgr/core';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_DIR = path.resolve(__dirname, '../../../packages/svg/src');
const OUTPUT_DIR = path.resolve(__dirname, '../src/icons');

// Helper to convert kebab-case to PascalCase
const toPascalCase = (str: string) =>
    str
        .toLowerCase()
        .replace(/-(.)/g, (_, char) => char.toUpperCase())
        .replace(/^(.)/, (_, char) => char.toUpperCase());

async function generate() {
    console.log(`🚀 Generating React icons...`);
    console.log(`📂 Source: ${SVG_DIR}`);
    console.log(`📂 Output: ${OUTPUT_DIR}`);

    if (!fs.existsSync(SVG_DIR)) {
        console.error(`❌ Source directory not found: ${SVG_DIR}`);
        process.exit(1);
    }

    // Ensure output directory exists and is clean-ish (optional)
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const files = fs.readdirSync(SVG_DIR).filter((file) => file.endsWith('.svg'));
    const iconNames: string[] = [];

    for (const file of files) {
        const componentName = toPascalCase(path.basename(file, '.svg'));
        const svgCode = fs.readFileSync(path.join(SVG_DIR, file), 'utf8').replace(/stroke-width="2"/g, '');

        const componentCode = await transform(
            svgCode,
            {
                typescript: true,
                plugins: ['@svgr/plugin-jsx'],
                icon: true,
                replaceAttrValues: {
                    '#000': 'currentColor',
                    '#000000': 'currentColor',
                    black: 'currentColor',
                },
                // Add other SVGR options here as needed
                template: (variables, { tpl }) => {
                    return tpl`
${variables.imports};

${variables.interfaces};

export const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
`;
                },
            },
            { componentName }
        );

        fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.tsx`), componentCode);
        console.log(`✅ Generated ${componentName}`);
        iconNames.push(componentName);
    }

    // Generate index.ts
    const indexContent = iconNames
        .map((name) => `export { ${name} } from './${name}';`)
        .join('\n');

    fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent);
    console.log(`🎉 Generated ${iconNames.length} icons in ${OUTPUT_DIR}`);
}

generate().catch((err) => {
    console.error(err);
    process.exit(1);
});
