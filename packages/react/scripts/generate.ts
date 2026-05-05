import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { optimize } from 'svgo'
import { transform } from '@svgr/core'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url)

const SVG_DIR = path.resolve(__dirname, '../../../packages/svg/src')
const OUTPUT_DIR = path.resolve(__dirname, '../src/icons')
const rawSvgoConfig = require('../../../svgo.config.js')
const SUPPORTED_VARIANTS = ['outline', 'filled'] as const

type IconVariant = (typeof SUPPORTED_VARIANTS)[number]

interface ParsedIconFile {
  componentName: string
  name: string
  variant: IconVariant
  filePath: string
}

interface IconVariantDefinition {
  svg: string
  viewBox: string
  sourceSvg: string
}

interface IconDefinition {
  componentName: string
  name: string
  label: string
  variants: Partial<Record<IconVariant, IconVariantDefinition>>
}

const svgoConfig = {
  ...rawSvgoConfig,
  plugins:
    rawSvgoConfig.plugins?.map((plugin: string | { name?: string; params?: { overrides?: Record<string, unknown> } }) => {
      if (typeof plugin !== 'object' || plugin?.name !== 'preset-default') {
        return plugin
      }

      const overrides = { ...(plugin.params?.overrides ?? {}) }
      delete overrides.cleanupIDs

      return {
        ...plugin,
        params: {
          ...plugin.params,
          overrides,
        },
      }
    }) ?? [],
}

const toPascalCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/-(.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (_, char) => char.toUpperCase())

const toTitleCase = (str: string) =>
  str
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const escapeTemplateLiteral = (value: string) =>
  value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')

const extractViewBox = (svgCode: string) => {
  const match = svgCode.match(/viewBox=["']([^"']+)["']/i)
  return match?.[1] ?? '0 0 24 24'
}

const extractInnerSvg = (svgCode: string) =>
  svgCode
    .replace(/^[\s\S]*?<svg[^>]*>/i, '')
    .replace(/<\/svg>\s*$/i, '')
    .trim()

const normalizeSvg = (svgCode: string) =>
  extractInnerSvg(svgCode)
    .replace(/#000000/gi, 'currentColor')
    .replace(/#000/gi, 'currentColor')
    .replace(/\bblack\b/gi, 'currentColor')

const optimizeSvg = (svgCode: string, filePath: string) =>
  optimize(svgCode, {
    ...svgoConfig,
    path: filePath,
  }).data

const parseIconFile = (fileName: string): ParsedIconFile => {
  const baseName = path.basename(fileName, '.svg')

  for (const variant of SUPPORTED_VARIANTS) {
    const suffix = `-${variant}`
    if (baseName.endsWith(suffix)) {
      const iconName = baseName.slice(0, -suffix.length)
      return {
        componentName: toPascalCase(iconName),
        name: iconName,
        variant,
        filePath: path.join(SVG_DIR, fileName),
      }
    }
  }

  return {
    componentName: toPascalCase(baseName),
    name: baseName,
    variant: 'outline',
    filePath: path.join(SVG_DIR, fileName),
  }
}

const getFallbackVariantExpression = (icon: IconDefinition) => {
  const availableVariants = SUPPORTED_VARIANTS.filter((variant) => icon.variants[variant])

  if (availableVariants.length === 0) {
    return '""'
  }

  return availableVariants
    .map((variant, index) => {
      const lookup = `variants.${variant}`
      return index === 0 ? lookup : ` ?? ${lookup}`
    })
    .join('')
}

const generateSingleVariantComponentCode = async (icon: IconDefinition) => {
  const outlineVariant = icon.variants.outline

  if (!outlineVariant) {
    throw new Error(`Missing outline SVG for ${icon.name}`)
  }

  return transform(
    outlineVariant.sourceSvg,
    {
      typescript: true,
      plugins: ['@svgr/plugin-jsx'],
      icon: true,
      ref: true,
      svgProps: {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        shapeRendering: 'geometricPrecision',
      },
      replaceAttrValues: {
        '#000': 'currentColor',
        '#000000': 'currentColor',
        black: 'currentColor',
      },
      template: (variables, { tpl }) => tpl`
${variables.imports};
${variables.interfaces};
export const ${variables.componentName} = React.memo(React.forwardRef((${variables.props}) => (
  ${variables.jsx}
)));
${variables.componentName}.displayName = "${variables.componentName}";
`,
    },
    { componentName: icon.componentName }
  )
}

const generateComponentCode = (icon: IconDefinition) => {
  const variantEntries = SUPPORTED_VARIANTS.filter((variant) => icon.variants[variant]).map((variant) => {
    const definition = icon.variants[variant]!
    return `  ${variant}: \`${escapeTemplateLiteral(definition.svg)}\``
  })

  const primaryVariant =
    icon.variants.outline ??
    icon.variants.filled

  const viewBox = primaryVariant?.viewBox ?? '0 0 24 24'
  const fallbackVariant = getFallbackVariantExpression(icon)

  return `import * as React from "react";
import type { SVGProps } from "react";
import { Ref } from "react";

type IconVariant = "outline" | "filled";

export interface ${icon.componentName}Props extends Omit<SVGProps<SVGSVGElement>, "color"> {
  size?: number | string;
  strokeWidth?: number;
  color?: string;
  variant?: IconVariant;
}

const variants: Partial<Record<IconVariant, string>> = {
${variantEntries.join(',\n')}
} as const;

export const ${icon.componentName} = React.memo(
  React.forwardRef(
    (
      {
        size = 24,
        strokeWidth = 2,
        color = "currentColor",
        variant = "outline",
        className = "",
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      }: ${icon.componentName}Props,
      ref: Ref<SVGSVGElement>
    ) => {
      const svgContent = (variants[variant] ?? ${fallbackVariant}) ?? "";
      const finalSvgContent = svgContent.replace(/stroke-width=(["']).*?\\1/g, \`stroke-width="\${strokeWidth}"\`);
      const finalAriaLabel = ariaLabel ?? (ariaHidden ? undefined : "${icon.label}");
      const finalClassName = ["melospot-icon", "melospot-icon-${icon.name}", className].filter(Boolean).join(" ");

      return (
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox="${viewBox}"
          fill="none"
          color={color}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="geometricPrecision"
          className={finalClassName}
          aria-label={finalAriaLabel}
          aria-hidden={ariaHidden}
          role={ariaHidden ? "presentation" : "img"}
          {...props}
          dangerouslySetInnerHTML={{ __html: finalSvgContent }}
        />
      );
    }
  )
);

${icon.componentName}.displayName = "${icon.componentName}";
`
}

async function generate() {
  console.log(`🚀 Generating React icons...`)
  console.log(`📂 Source: ${SVG_DIR}`)
  console.log(`📂 Output: ${OUTPUT_DIR}`)

  if (!fs.existsSync(SVG_DIR)) {
    console.error(`❌ Source directory not found: ${SVG_DIR}`)
    process.exit(1)
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const files = fs.readdirSync(SVG_DIR).filter((file) => file.endsWith('.svg')).sort()
  const icons = new Map<string, IconDefinition>()

  for (const file of files) {
    const parsed = parseIconFile(file)
    const rawSvgCode = fs.readFileSync(parsed.filePath, 'utf8')
    const svgCode = optimizeSvg(rawSvgCode, parsed.filePath)
    const viewBox = extractViewBox(svgCode)
    const svg = normalizeSvg(svgCode)

    const icon =
      icons.get(parsed.name) ??
      {
        componentName: parsed.componentName,
        name: parsed.name,
        label: toTitleCase(parsed.name),
        variants: {},
      }

    icon.variants[parsed.variant] = { svg, viewBox, sourceSvg: svgCode }
    icons.set(parsed.name, icon)
  }

  for (const icon of icons.values()) {
    const componentCode = icon.variants.filled
      ? generateComponentCode(icon)
      : await generateSingleVariantComponentCode(icon)
    const outputFile = path.join(OUTPUT_DIR, `${icon.componentName}.tsx`)

    fs.writeFileSync(outputFile, componentCode)
    console.log(`✅ Generated ${icon.componentName}`)
  }

  const existingComponentFiles = fs
    .readdirSync(OUTPUT_DIR)
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => path.basename(file, '.tsx'))
    .sort((left, right) => left.localeCompare(right))

  const indexContent = existingComponentFiles
    .map((name) => `export { ${name} } from './${name}';`)
    .join('\n')

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent)
  console.log(`🎉 Generated ${icons.size} source-backed icons in ${OUTPUT_DIR}`)
}

generate().catch((error) => {
  console.error(error)
  process.exit(1)
})