import type { IconDefinition } from '../types'

export const homeIcon: IconDefinition = {
  name: 'home',
  category: 'essential',
  tags: ['house', 'main', 'dashboard', 'start'],
  svg: `<path d="M3 12L12 3l9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  variants: {
    outline: `<path d="M3 12L12 3l9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    filled: `<path d="M12 3l9 9v10H3V12l9-9z" fill="currentColor"/>`,
    duotone: `<path d="M12 3l9 9v10H3V12l9-9z" fill="currentColor" opacity="0.2"/>
<path d="M3 12L12 3l9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    micro: `<path d="M2 8l6-6 6 6v8H2V8z" fill="currentColor"/>`
  },
  aliases: ['house', 'main']
}