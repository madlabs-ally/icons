import React, { forwardRef } from 'react'
import type { IconStyle } from '@melospot/icons-core'

export interface HomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'size' | 'color' | 'aria-hidden' | 'style'> {
  size?: number | string
  strokeWidth?: number
  color?: string
  variant?: IconStyle
  style?: React.CSSProperties
  'aria-label'?: string
  'aria-hidden'?: boolean
}

export const Home = forwardRef<SVGSVGElement, HomeProps>((props, ref) => {
  const {
    size = 24,
    strokeWidth = 2,
    color = 'currentColor',
    variant = 'outline',
    className = '',
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden,
    ...svgProps
  } = props

  const svgContent = {
    outline: `<path d="M3 12L12 3l9 9" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M9 22V12h6v10" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    filled: `<path d="M12 3l9 9v10H3V12l9-9z" fill="currentColor"/>`,
    duotone: `<path d="M12 3l9 9v10H3V12l9-9z" fill="currentColor" opacity="0.2"/>
<path d="M3 12L12 3l9 9" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M9 22V12h6v10" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    micro: `<path d="M2 8l6-6 6 6v8H2V8z" fill="currentColor"/>`
  }

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className={`melospot-icon melospot-icon-home ${className}`}
      aria-label={ariaLabel || 'Home'}
      aria-hidden={ariaHidden}
      role={ariaHidden ? 'presentation' : 'img'}
      {...svgProps}
      dangerouslySetInnerHTML={{ __html: svgContent[variant] }}
    />
  )
})

Home.displayName = 'Home'