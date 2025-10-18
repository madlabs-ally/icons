export interface IconDefinition {
  name: string
  category: string
  tags: string[]
  svg: string
  variants?: {
    outline?: string
    filled?: string
    duotone?: string
    micro?: string
  }
  aliases?: string[]
  deprecated?: boolean
  version?: string
}

export type IconStyle = 'outline' | 'filled' | 'duotone' | 'micro'

export interface IconProps {
  size?: number | string
  strokeWidth?: number
  color?: string
  style?: IconStyle
  className?: string
  'aria-label'?: string
  'aria-hidden'?: boolean
}

export interface IconComponentProps extends IconProps {
  name: string
}

export type IconCategory = 
  | 'essential'
  | 'actions' 
  | 'navigation'
  | 'media'
  | 'social'
  | 'ecommerce'
  | 'status'
  | 'files'
  | 'development'
  | 'miscellaneous'
  | 'brand'