import { renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { IconRegistry } from '@melospot/icons-core'
import type { IconDefinition } from '@melospot/icons-core'
import { useIconSearch, useIconsByCategory, useAllIcons } from '../hooks/useIconSearch'

describe('useIconSearch hooks', () => {
  const mockIcon1: IconDefinition = {
    name: 'home',
    category: 'essential',
    tags: ['house', 'building'],
    svg: '<path d="M3 12l9-9 9 9v10H3V12z"/>',
    aliases: ['house']
  }

  const mockIcon2: IconDefinition = {
    name: 'user',
    category: 'essential',
    tags: ['person', 'profile'],
    svg: '<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"/>',
    aliases: ['person']
  }

  const mockIcon3: IconDefinition = {
    name: 'play',
    category: 'media',
    tags: ['video', 'audio'],
    svg: '<path d="M8 5v14l11-7z"/>'
  }

  beforeEach(() => {
    // Clear registry before each test
    ;(IconRegistry as any).icons.clear()
    ;(IconRegistry as any).categories.clear()
    ;(IconRegistry as any).aliases.clear()
    
    // Register test icons
    IconRegistry.register(mockIcon1)
    IconRegistry.register(mockIcon2)
    IconRegistry.register(mockIcon3)
  })

  describe('useIconSearch', () => {
    it('returns empty array for empty query', () => {
      const { result } = renderHook(() => useIconSearch(''))
      expect(result.current).toEqual([])
    })

    it('returns empty array for whitespace query', () => {
      const { result } = renderHook(() => useIconSearch('   '))
      expect(result.current).toEqual([])
    })

    it('searches by icon name', () => {
      const { result } = renderHook(() => useIconSearch('home'))
      expect(result.current).toHaveLength(1)
      expect(result.current[0]).toEqual(mockIcon1)
    })

    it('searches by tag', () => {
      const { result } = renderHook(() => useIconSearch('person'))
      expect(result.current).toHaveLength(1)
      expect(result.current[0]).toEqual(mockIcon2)
    })

    it('searches by alias', () => {
      const { result } = renderHook(() => useIconSearch('house'))
      expect(result.current).toHaveLength(1)
      expect(result.current[0]).toEqual(mockIcon1)
    })

    it('returns multiple results for broad search', () => {
      const { result } = renderHook(() => useIconSearch('e')) // matches 'home' and 'user'
      expect(result.current.length).toBeGreaterThan(0)
    })

    it('memoizes results for same query', () => {
      const { result, rerender } = renderHook(
        ({ query }) => useIconSearch(query),
        { initialProps: { query: 'home' } }
      )
      
      const firstResult = result.current
      
      rerender({ query: 'home' })
      expect(result.current).toBe(firstResult) // Same reference due to memoization
    })

    it('updates results when query changes', () => {
      const { result, rerender } = renderHook(
        ({ query }) => useIconSearch(query),
        { initialProps: { query: 'home' } }
      )
      
      expect(result.current[0]).toEqual(mockIcon1)
      
      rerender({ query: 'user' })
      expect(result.current[0]).toEqual(mockIcon2)
    })
  })

  describe('useIconsByCategory', () => {
    it('returns icons for specified category', () => {
      const { result } = renderHook(() => useIconsByCategory('essential'))
      expect(result.current).toHaveLength(2)
      expect(result.current.map(icon => icon.name)).toContain('home')
      expect(result.current.map(icon => icon.name)).toContain('user')
    })

    it('returns empty array for non-existent category', () => {
      const { result } = renderHook(() => useIconsByCategory('nonexistent' as any))
      expect(result.current).toEqual([])
    })

    it('memoizes results for same category', () => {
      const { result, rerender } = renderHook(
        ({ category }) => useIconsByCategory(category),
        { initialProps: { category: 'essential' as const } }
      )
      
      const firstResult = result.current
      
      rerender({ category: 'essential' as const })
      expect(result.current).toBe(firstResult) // Same reference due to memoization
    })

    it('updates results when category changes', () => {
      const { result, rerender } = renderHook(
        ({ category }) => useIconsByCategory(category),
        { initialProps: { category: 'essential' as const } }
      )
      
      expect(result.current).toHaveLength(2)
      
      rerender({ category: 'media' as const })
      expect(result.current).toHaveLength(1)
      expect(result.current[0]).toEqual(mockIcon3)
    })
  })

  describe('useAllIcons', () => {
    it('returns all registered icons', () => {
      const { result } = renderHook(() => useAllIcons())
      expect(result.current).toHaveLength(3)
      expect(result.current).toContain(mockIcon1)
      expect(result.current).toContain(mockIcon2)
      expect(result.current).toContain(mockIcon3)
    })

    it('memoizes results', () => {
      const { result, rerender } = renderHook(() => useAllIcons())
      
      const firstResult = result.current
      
      rerender()
      expect(result.current).toBe(firstResult) // Same reference due to memoization
    })
  })
})