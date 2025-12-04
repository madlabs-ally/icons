import { useMemo } from 'react'
import { IconRegistry } from '@melospot/icons-core'
import type { IconDefinition, IconCategory } from '@melospot/icons-core'

export function useIconSearch(query: string): IconDefinition[] {
  return useMemo(() => {
    if (!query.trim()) return []
    return IconRegistry.search(query)
  }, [query])
}

export function useIconsByCategory(category: IconCategory): IconDefinition[] {
  return useMemo(() => {
    return IconRegistry.getByCategory(category)
  }, [category])
}

export function useAllIcons(): IconDefinition[] {
  return useMemo(() => {
    return IconRegistry.getAll()
  }, [])
}