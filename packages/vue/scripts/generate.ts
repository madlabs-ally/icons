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
  console.log(`🚀 Generating Vue icons (TS)...`);
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

    // Extract content from <svg> tag: attributes and inner HTML
    const svgMatch = svgCode.match(/<svg([^>]*)>(.*)<\/svg>/s);
    if (!svgMatch) {
      console.warn(`⚠️ Could not parse SVG: ${file}`);
      continue;
    }

    const [, attributesStr, innerContent] = svgMatch;

    // Naive attribute parsing (for a robust solution use cheerio/svgo/svgr but manual string manipulation works for simple icon sets)
    // We want to pass props to the h function
    // Actually, cleaner is to use the full SVG string and let Vue handle it, OR verify attributes.
    // Let's assume standard simple icons.

    // Better approach: wrap the whole SVG in a functional component that renders it.
    // We can use innerHTML for simplicity if we trust the source, OR just construct the tree.
    // For icons, `innerHTML` is often discouraged but fast. 
    // BUT constructing the VNode tree is "Vue native".

    // Let's use a standard template literal approach that is basically what standard Vue icon libs do.
    // We will clean the SVG code to be a string and put it in a `h` call? No, `h` expects VNodes.

    // Simplest robust way: 
    // export default defineComponent({ render() { return h('svg', { ...attrs }, [ ...children ]) } })

    // Given we don't want to write a full SVG parser in this script, let's keep it simple:
    // We will generate .ts files that are basically:
    // import { h } from 'vue';
    // export const IconName = (props, { attrs }) => h('svg', { ...props, ...attrs, innerHTML: '...' })
    // CAUTION: innerHTML will override children.

    // Let's try to just use string replacement on the SVG to make it valid TS/JS object if possible? Too hard.

    // Let's go with the `innerHTML` route for 100% compatibility with whatever SVG is thrown at it, 
    // ensuring we strip the outer <svg> tag to just get the path content.

    const content = innerContent.trim().replace(/"/g, "'"); // simple escape
    // Parse original viewBox/width/height if possible to set defaults
    // But usually we just want to spread props.

    const componentCode = `
import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const ${componentName}: FunctionalComponent<SVGAttributes> = (props, context) => {
  const { attrs } = context;
  return h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    ...attrs,
    ...props,
    innerHTML: "${content.replace(/\n/g, '')}"
  });
};

${componentName}.displayName = '${componentName}';
export default ${componentName};
`;

    fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.ts`), componentCode.trim());
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
