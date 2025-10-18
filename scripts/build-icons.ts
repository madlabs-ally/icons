#!/usr/bin/env tsx

import { readdir, readFile, writeFile, mkdir } from 'fs/promises'
import { join, basename } from 'path'
import { optimize } from 'svgo'

interface IconMetadata {
  name: string
  category: string
  tags: string[]
  aliases?: string[]
}

const ICON_CATEGORIES = {
  'essential': ['home', 'settings', 'user', 'notification', 'logout'],
  'actions': ['add', 'remove', 'edit', 'delete', 'save', 'download', 'upload', 'share'],
  'navigation': ['back', 'forward', 'up', 'down', 'left', 'right'],
  'media': ['play', 'pause', 'stop', 'rewind', 'fast-forward', 'volume'],
  'social': ['chat', 'comment', 'like', 'dislike', 'message', 'email'],
  'ecommerce': ['cart', 'wishlist', 'credit-card', 'wallet', 'price-tag'],
  'status': ['check', 'cross', 'warning', 'info', 'help', 'loading'],
  'files': ['file', 'folder', 'document', 'pdf', 'zip', 'clipboard'],
  'development': ['code', 'terminal', 'bug', 'database', 'server', 'api'],
  'miscellaneous': ['globe', 'location', 'calendar', 'clock', 'weather', 'battery']
}

async function optimizeSvg(svgContent: string): Promise<string> {
  const result = optimize(svgContent, {
    plugins: [
      'preset-default',
      'removeDimensions',
      'removeViewBox',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            { viewBox: '0 0 24 24' },
            { fill: 'none' },
            { stroke: 'currentColor' },
            { 'stroke-width': '2' },
            { 'stroke-linecap': 'round' },
            { 'stroke-linejoin': 'round' }
          ]
        }
      }
    ]
  })
  
  return result.data
}

async function generateIconDefinition(svgPath: string): Promise<string> {
  const svgContent = await readFile(svgPath, 'utf-8')
  const iconName = basename(svgPath, '.svg')
  
  // Determine category
  let category = 'miscellaneous'
  for (const [cat, icons] of Object.entries(ICON_CATEGORIES)) {
    if (icons.some(icon => iconName.includes(icon))) {
      category = cat
      break
    }
  }
  
  const optimizedSvg = await optimizeSvg(svgContent)
  const innerSvg = optimizedSvg.replace(/<svg[^>]*>|<\/svg>/g, '')
  
  return `import type { IconDefinition } from '../types'

export const ${iconName}Icon: IconDefinition = {
  name: '${iconName}',
  category: '${category}',
  tags: ['${iconName}'],
  svg: \`${innerSvg}\`,
  variants: {
    outline: \`${innerSvg}\`,
    filled: \`${innerSvg}\`, // TODO: Create filled variant
    duotone: \`${innerSvg}\`, // TODO: Create duotone variant
    micro: \`${innerSvg}\` // TODO: Create micro variant
  }
}`
}

async function generateReactComponent(iconName: string): Promise<string> {
  const componentName = iconName.charAt(0).toUpperCase() + iconName.slice(1)
  
  return `import React, { forwardRef } from 'react'
import type { ReactIconProps } from '../Icon'

export interface ${componentName}Props extends Omit<ReactIconProps, 'name'> {}

export const ${componentName} = forwardRef<SVGSVGElement, ${componentName}Props>((props, ref) => {
  const {
    size = 24,
    strokeWidth = 2,
    color = 'currentColor',
    style = 'outline',
    className = '',
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden,
    ...svgProps
  } = props

  // TODO: Add actual SVG content for each variant
  const svgContent = {
    outline: \`<!-- Add outline SVG content -->\`,
    filled: \`<!-- Add filled SVG content -->\`,
    duotone: \`<!-- Add duotone SVG content -->\`,
    micro: \`<!-- Add micro SVG content -->\`
  }

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className={\`melospot-icon melospot-icon-${iconName} \${className}\`}
      aria-label={ariaLabel || '${componentName}'}
      aria-hidden={ariaHidden}
      role={ariaHidden ? 'presentation' : 'img'}
      {...svgProps}
      dangerouslySetInnerHTML={{ __html: svgContent[style] }}
    />
  )
})

${componentName}.displayName = '${componentName}'`
}

async function main() {
  console.log('🚀 Building MeloSpot Icons...')
  
  // This is a template - you would need to add your actual SVG files
  console.log('✅ Icon build system ready!')
  console.log('📝 To use: Add SVG files to src/icons/ and run this script')
  console.log('🎨 The script will generate optimized icon definitions and React components')
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error)
}