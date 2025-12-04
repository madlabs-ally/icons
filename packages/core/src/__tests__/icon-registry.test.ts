import { describe, it, expect, beforeEach } from 'vitest'
import { IconRegistry } from '../icon-registry'
import type { IconDefinition } from '../types'

describe('IconRegistry', () => {
  // Clear registry before each test
  beforeEach(() => {
    // Reset the static maps
    ;(IconRegistry as any).icons.clear()
    ;(IconRegistry as any).categories.clear()
    ;(IconRegistry as any).aliases.clear()
  })

  const mockIcon: IconDefinition = {
    name: 'home',
    category: 'essential',
    tags: ['house', 'building', 'main'],
    svg: '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
    aliases: ['house', 'main'],
    variants: {
      outline: '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
      filled: '<path fill-rule="evenodd" d="M10 3L3 10v11h4v-6h6v6h4V10l-7-7z" clip-rule="evenodd"/>'
    }
  }

  const mockIcon2: IconDefinition = {
    name: 'user',
    category: 'essential',
    tags: ['person', 'profile', 'account'],
    svg: '<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
    aliases: ['person', 'profile']
  }

  describe('register', () => {
    it('should register an icon', () => {
      IconRegistry.register(mockIcon)
      
      const retrieved = IconRegistry.get('home')
      expect(retrieved).toEqual(mockIcon)
    })

    it('should register icon in category', () => {
      IconRegistry.register(mockIcon)
      
      const categoryIcons = IconRegistry.getByCategory('essential')
      expect(categoryIcons).toHaveLength(1)
      expect(categoryIcons[0]).toEqual(mockIcon)
    })

    it('should register aliases', () => {
      IconRegistry.register(mockIcon)
      
      expect(IconRegistry.get('house')).toEqual(mockIcon)
      expect(IconRegistry.get('main')).toEqual(mockIcon)
    })

    it('should handle multiple icons in same category', () => {
      IconRegistry.register(mockIcon)
      IconRegistry.register(mockIcon2)
      
      const categoryIcons = IconRegistry.getByCategory('essential')
      expect(categoryIcons).toHaveLength(2)
      expect(categoryIcons.map(icon => icon.name)).toContain('home')
      expect(categoryIcons.map(icon => icon.name)).toContain('user')
    })
  })

  describe('get', () => {
    beforeEach(() => {
      IconRegistry.register(mockIcon)
    })

    it('should retrieve icon by name', () => {
      const icon = IconRegistry.get('home')
      expect(icon).toEqual(mockIcon)
    })

    it('should retrieve icon by alias', () => {
      const icon = IconRegistry.get('house')
      expect(icon).toEqual(mockIcon)
    })

    it('should return undefined for non-existent icon', () => {
      const icon = IconRegistry.get('nonexistent')
      expect(icon).toBeUndefined()
    })
  })

  describe('getAll', () => {
    it('should return empty array when no icons registered', () => {
      const icons = IconRegistry.getAll()
      expect(icons).toEqual([])
    })

    it('should return all registered icons', () => {
      IconRegistry.register(mockIcon)
      IconRegistry.register(mockIcon2)
      
      const icons = IconRegistry.getAll()
      expect(icons).toHaveLength(2)
      expect(icons).toContain(mockIcon)
      expect(icons).toContain(mockIcon2)
    })
  })

  describe('getByCategory', () => {
    beforeEach(() => {
      IconRegistry.register(mockIcon)
      IconRegistry.register(mockIcon2)
    })

    it('should return icons in specified category', () => {
      const icons = IconRegistry.getByCategory('essential')
      expect(icons).toHaveLength(2)
    })

    it('should return empty array for non-existent category', () => {
      const icons = IconRegistry.getByCategory('nonexistent' as any)
      expect(icons).toEqual([])
    })
  })

  describe('search', () => {
    beforeEach(() => {
      IconRegistry.register(mockIcon)
      IconRegistry.register(mockIcon2)
    })

    it('should search by icon name', () => {
      const results = IconRegistry.search('home')
      expect(results).toHaveLength(1)
      expect(results[0]).toEqual(mockIcon)
    })

    it('should search by tag', () => {
      const results = IconRegistry.search('house')
      expect(results).toHaveLength(1)
      expect(results[0]).toEqual(mockIcon)
    })

    it('should search by alias', () => {
      const results = IconRegistry.search('person')
      expect(results).toHaveLength(1)
      expect(results[0]).toEqual(mockIcon2)
    })

    it('should be case insensitive', () => {
      const results = IconRegistry.search('HOME')
      expect(results).toHaveLength(1)
      expect(results[0]).toEqual(mockIcon)
    })

    it('should return multiple matches', () => {
      const results = IconRegistry.search('e') // matches 'home' and 'user'
      expect(results.length).toBeGreaterThan(0)
    })

    it('should return empty array for no matches', () => {
      const results = IconRegistry.search('xyz123')
      expect(results).toEqual([])
    })
  })

  describe('getCategories', () => {
    it('should return empty array when no icons registered', () => {
      const categories = IconRegistry.getCategories()
      expect(categories).toEqual([])
    })

    it('should return unique categories', () => {
      IconRegistry.register(mockIcon)
      IconRegistry.register(mockIcon2)
      
      const categories = IconRegistry.getCategories()
      expect(categories).toEqual(['essential'])
    })

    it('should return multiple categories', () => {
      const mediaIcon: IconDefinition = {
        name: 'play',
        category: 'media',
        tags: ['video', 'audio'],
        svg: '<path d="M8 5v14l11-7z"/>'
      }
      
      IconRegistry.register(mockIcon)
      IconRegistry.register(mediaIcon)
      
      const categories = IconRegistry.getCategories()
      expect(categories).toHaveLength(2)
      expect(categories).toContain('essential')
      expect(categories).toContain('media')
    })
  })
})