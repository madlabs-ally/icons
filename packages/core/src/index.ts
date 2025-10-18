export * from './types'
export * from './icon-registry'
export * from './icons'

import { IconRegistry } from './icon-registry'
import type { IconDefinition } from './types'

// Utility functions
export const getIconSvg = (name: string, style: 'outline' | 'filled' | 'duotone' | 'micro' = 'outline'): string | undefined => {
  const icon = IconRegistry.get(name)
  if (!icon) return undefined
  
  return icon.variants?.[style] || icon.svg
}

export const getAllIconNames = (): string[] => {
  return IconRegistry.getAll().map((icon: IconDefinition) => icon.name)
}