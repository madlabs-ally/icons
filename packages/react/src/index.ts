// Core exports
export { Icon } from './Icon'
export type { ReactIconProps } from './Icon'

// Individual icon components for tree-shaking
export { Home } from './icons/Home'
export { Settings } from './icons/Settings'
export { User } from './icons/User'

// Re-export types from core
export type { IconProps, IconStyle, IconCategory } from '@melospot/icons-core'

// Utility hooks
export { useIcon } from './hooks/useIcon'
export { useIconSearch } from './hooks/useIconSearch'