import { useMemo } from 'react'
import { IconRegistry } from '@melospot/icons'
import type { IconDefinition } from '@melospot/icons'

export function useIcon(name: string): IconDefinition | null {
  return useMemo(() => {
    return IconRegistry.get(name) || null
  }, [name])
}

export function useIconExists(name: string): boolean {
  return useMemo(() => {
    return IconRegistry.get(name) !== undefined
  }, [name])
}