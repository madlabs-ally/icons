// Core exports
export { Icon } from './Icon'
export type { ReactIconProps } from './Icon'

// Individual icon components for tree-shaking
export * from './icons'

// Re-export types from core
export type { IconProps, IconStyle, IconCategory } from '@melospot/icons'

// Utility hooks
export { useIcon } from './hooks/useIcon'
export { useIconSearch } from './hooks/useIconSearch'