import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_DIR = path.resolve(__dirname, '../../../packages/svg/src');
const OUTPUT_DIR = path.resolve(__dirname, '../src/lib/icons');
const PUBLIC_API_PATH = path.resolve(__dirname, '../src/public-api.ts');

// Helper to convert kebab-case to PascalCase
const toPascalCase = (str: string) =>
    str
        .toLowerCase()
        .replace(/-(.)/g, (_, char) => char.toUpperCase())
        .replace(/^(.)/, (_, char) => char.toUpperCase());

async function generate() {
    console.log(`🚀 Generating Angular icons...`);
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
        const selectorName = `icon-${path.basename(file, '.svg')}`;
        const svgCode = fs.readFileSync(path.join(SVG_DIR, file), 'utf8');

        // Extract inner content and attributes
        const svgMatch = svgCode.match(/<svg([^>]*)>(.*)<\/svg>/s);
        if (!svgMatch) {
            console.warn(`⚠️ Could not parse SVG: ${file}`);
            continue;
        }
        const [, , innerContent] = svgMatch;

        // Angular Component
        // We bind inputs to the SVG attributes
        const componentCode = `
import { Component, Input } from '@angular/core';

@Component({
  selector: '${selectorName}',
  standalone: true,
  template: \`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      [attr.stroke]="color"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="melospot-icon"
    >
      ${innerContent.trim()}
    </svg>
  \`,
  styles: [\`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  \`]
})
export class ${componentName} {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}
`;

        fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.ts`), componentCode.trim());
        console.log(`✅ Generated ${componentName}`);
        iconNames.push(componentName);
    }

    // Generate public-api.ts
    // We need to verify if we should export them individually or as a module. 
    // With standalone components, exporting them individually is best.

    const exports = iconNames
        .map((name) => `export * from './lib/icons/${name}';`)
        .join('\n');

    fs.writeFileSync(PUBLIC_API_PATH, exports);
    console.log(`🎉 Generated ${iconNames.length} icons in ${OUTPUT_DIR}`);
}

generate().catch((err) => {
    console.error(err);
    process.exit(1);
});
