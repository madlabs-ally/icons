import React, { forwardRef } from 'react'
import { IconRegistry } from '@melospot/icons'
import type { IconStyle } from '@melospot/icons'

export interface ReactIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'size' | 'color' | 'aria-hidden' | 'style'> {
  name: string
  size?: number | string
  strokeWidth?: number
  color?: string
  variant?: IconStyle
  style?: React.CSSProperties
  'aria-label'?: string
  'aria-hidden'?: boolean
}

export const Icon = forwardRef<SVGSVGElement, ReactIconProps>(({
  name,
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  variant = 'outline',
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}, ref) => {
  const icon = IconRegistry.get(name)
  
  if (!icon) {
    console.warn(`Icon "${name}" not found in registry`)
    return null
  }

  const svgContent = icon.variants?.[variant] || icon.svg
  const finalAriaLabel = ariaLabel || (ariaHidden ? undefined : icon.name)

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`melospot-icon melospot-icon-${name} ${className}`}
      aria-label={finalAriaLabel}
      aria-hidden={ariaHidden}
      role={ariaHidden ? 'presentation' : 'img'}
      {...props}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
})

Icon.displayName = 'Icon'