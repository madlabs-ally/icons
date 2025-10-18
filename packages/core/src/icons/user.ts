import type { IconDefinition } from '../types'

export const userIcon: IconDefinition = {
  name: 'user',
  category: 'essential',
  tags: ['person', 'profile', 'account', 'avatar'],
  svg: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>`,
  variants: {
    outline: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>`,
    filled: `<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>`,
    duotone: `<circle cx="12" cy="7" r="4" fill="currentColor" opacity="0.2"/>
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>`,
    micro: `<path d="M8 8a3 3 0 11-6 0 3 3 0 016 0zM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 00-11.215 0c-.22.578.254 1.139.872 1.139h9.47z" fill="currentColor"/>`
  },
  aliases: ['person', 'profile', 'account']
}