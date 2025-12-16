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
    console.log(`🚀 Generating Svelte icons...`);
    console.log(`📂 Source: ${SVG_DIR}`);
    console.log(`📂 Output: ${OUTPUT_DIR}`);

    if (!fs.existsSync(SVG_DIR)) {
        console.error(`❌ Source directory not found: ${SVG_DIR}`);
        process.exit(1);
    }

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const files = fs.readdirSync(SVG_DIR).filter((file) => file.endsWith('.svg'));
    const iconNames: string[] = [];

    for (const file of files) {
        const componentName = toPascalCase(path.basename(file, '.svg'));
        const svgCode = fs.readFileSync(path.join(SVG_DIR, file), 'utf8');

        // Clean SVG content for Svelte
        // Typically for Svelte we just put the SVG in the template and pass props spread
        // We want to support size, color, strokeWidth, and any other props

        // We'll strip the outer <svg> tag and attributes to rebuild it with prop bindings
        const svgMatch = svgCode.match(/<svg([^>]*)>(.*)<\/svg>/s);
        if (!svgMatch) {
            console.warn(`⚠️ Could not parse SVG: ${file}`);
            continue;
        }
        const [, , innerContent] = svgMatch;

        // Svelte component template
        const componentCode = `
<script lang="ts">
  export let size: number | string = 24;
  export let color: string = 'currentColor';
  export let strokeWidth: number | string = 2;
  export let width: number | string = size;
  export let height: number | string = size;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  {...$$restProps}
>
  ${innerContent.trim()}
</svg>
`;

        fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.svelte`), componentCode.trim());
        console.log(`✅ Generated ${componentName}`);
        iconNames.push(componentName);
    }

    // Generate index.ts
    const indexContent = iconNames
        .map((name) => `export { default as ${name} } from './${name}.svelte';`)
        .join('\n');

    fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent);
    console.log(`🎉 Generated ${iconNames.length} icons in ${OUTPUT_DIR}`);
}

generate().catch((err) => {
    console.error(err);
    process.exit(1);
});
