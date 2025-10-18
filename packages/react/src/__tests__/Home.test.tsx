import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Home } from '../icons/Home'

describe('Home Icon', () => {
  it('renders with default props', () => {
    render(<Home />)
    
    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('width', '24')
    expect(icon).toHaveAttribute('height', '24')
    expect(icon).toHaveAttribute('aria-label', 'Home')
  })

  it('renders with custom size', () => {
    render(<Home size={32} />)
    
    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('width', '32')
    expect(icon).toHaveAttribute('height', '32')
  })

  it('renders with string size', () => {
    render(<Home size="2rem" />)
    
    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('width', '2rem')
    expect(icon).toHaveAttribute('height', '2rem')
  })

  it('renders with custom color', () => {
    render(<Home color="#ff0000" />)
    
    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('stroke', '#ff0000')
  })

  it('renders with custom className', () => {
    render(<Home className="custom-class" />)
    
    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('melospot-icon', 'melospot-icon-home', 'custom-class')
  })

  it('renders with custom aria-label', () => {
    render(<Home aria-label="Custom Home Label" />)
    
    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('aria-label', 'Custom Home Label')
  })

  it('renders as presentation when aria-hidden is true', () => {
    render(<Home aria-hidden />)
    
    const icon = screen.getByRole('presentation', { hidden: true })
    expect(icon).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders different variants', () => {
    const { rerender } = render(<Home variant="outline" />)
    let icon = screen.getByRole('img')
    expect(icon.innerHTML).toContain('stroke="currentColor"')
    
    rerender(<Home variant="filled" />)
    icon = screen.getByRole('img')
    expect(icon.innerHTML).toContain('fill="currentColor"')
    
    rerender(<Home variant="duotone" />)
    icon = screen.getByRole('img')
    expect(icon.innerHTML).toContain('opacity="0.2"')
    
    rerender(<Home variant="micro" />)
    icon = screen.getByRole('img')
    expect(icon.innerHTML).toContain('fill="currentColor"')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<SVGSVGElement>()
    render(<Home ref={ref} />)
    
    expect(ref.current).toBeInstanceOf(SVGSVGElement)
  })

  it('passes through additional SVG props', () => {
    render(<Home data-testid="home-icon" onClick={() => {}} />)
    
    const icon = screen.getByTestId('home-icon')
    expect(icon).toBeInTheDocument()
  })

  it('applies custom stroke width', () => {
    render(<Home strokeWidth={3} variant="outline" />)
    
    const icon = screen.getByRole('img')
    expect(icon.innerHTML).toContain('stroke-width="3"')
  })
})