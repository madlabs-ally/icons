import fs from 'node:fs';
import path from 'node:path';
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
    console.log(`🚀 Generating Solid icons...`);
    console.log(`📂 Source: ${SVG_DIR}`);
    console.log(`📂 Output: ${OUTPUT_DIR}`);

    if (!fs.existsSync(SVG_DIR)) {
        console.error(`❌ Source directory not found: ${SVG_DIR}`);
        process.exit(1);
    }

    if (fs.existsSync(OUTPUT_DIR)) {
        fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const files = fs.readdirSync(SVG_DIR).filter((file) => file.endsWith('.svg'));
    const iconNames: string[] = [];

    for (const file of files) {
        const componentName = toPascalCase(path.basename(file, '.svg'));
        const svgCode = fs.readFileSync(path.join(SVG_DIR, file), 'utf8');

        const svgMatch = svgCode.match(/<svg([^>]*)>(.*)<\/svg>/s);
        if (!svgMatch) {
            console.warn(`⚠️ Could not parse SVG: ${file}`);
            continue;
        }
        const [, , innerContent] = svgMatch;

        // Solid Component
        const componentCode = `
import { Component, ComponentProps } from 'solid-js';

const ${componentName}: Component<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      ${innerContent.trim()}
    </svg>
  );
};
export default ${componentName};
`;

        fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.tsx`), componentCode.trim());
        console.log(`✅ Generated ${componentName}`);
        iconNames.push(componentName);
    }

    // Generate index.ts
    const indexContent = iconNames
        .map((name) => `export { default as ${name} } from './${name}';`)
        .join('\n');

    fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent);
    console.log(`🎉 Generated ${iconNames.length} icons in ${OUTPUT_DIR}`);
}

generate().catch((err) => {
    console.error(err);
    process.exit(1);
});
