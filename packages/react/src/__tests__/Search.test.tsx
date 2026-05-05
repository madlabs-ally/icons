import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Search } from '../icons/Search'

describe('Search Icon', () => {
  it('renders with default props', () => {
    render(<Search />)

    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('width', '24')
    expect(icon).toHaveAttribute('height', '24')
    expect(icon).toHaveAttribute('aria-label', 'Search')
  })

  it('renders with custom size', () => {
    render(<Search size={32} />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('width', '32')
    expect(icon).toHaveAttribute('height', '32')
  })

  it('renders with string size', () => {
    render(<Search size="2rem" />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('width', '2rem')
    expect(icon).toHaveAttribute('height', '2rem')
  })

  it('renders with custom color', () => {
    render(<Search color="#ff0000" />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('stroke', '#ff0000')
  })

  it('renders with custom className', () => {
    render(<Search className="custom-class" />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('melospot-icon', 'melospot-icon-search', 'custom-class')
  })

  it('renders with custom aria-label', () => {
    render(<Search aria-label="Custom Search Label" />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('aria-label', 'Custom Search Label')
  })

  it('renders as presentation when aria-hidden is true', () => {
    render(<Search aria-hidden />)

    const icon = screen.getByRole('presentation', { hidden: true })
    expect(icon).toHaveAttribute('aria-hidden', 'true')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<SVGSVGElement>()
    render(<Search ref={ref} />)

    expect(ref.current).toBeInstanceOf(SVGSVGElement)
  })

  it('passes through additional SVG props', () => {
    render(<Search data-testid="search-icon" onClick={() => {}} />)

    const icon = screen.getByTestId('search-icon')
    expect(icon).toBeInTheDocument()
  })

  it('applies custom stroke width to the rendered SVG markup', () => {
    render(<Search strokeWidth={3} />)

    const icon = screen.getByRole('img')
    expect(icon.innerHTML).toContain('stroke-width="3"')
  })
})
