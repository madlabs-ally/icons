import type { IconDefinition } from '../types'

export const settingsIcon: IconDefinition = {
  name: 'settings',
  category: 'essential',
  tags: ['gear', 'cog', 'preferences', 'config', 'options'],
  svg: `<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
<path d="M12 1v6m0 8v6m11-7h-6m-8 0H1m15.5-3.5L19 4.5m-14 14L7.5 16M19 19.5L16.5 17M4.5 7.5L7 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  variants: {
    outline: `<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
<path d="M12 1v6m0 8v6m11-7h-6m-8 0H1m15.5-3.5L19 4.5m-14 14L7.5 16M19 19.5L16.5 17M4.5 7.5L7 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    filled: `<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" fill="currentColor"/>`,
    duotone: `<circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2"/>
<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
<path d="M12 1v6m0 8v6m11-7h-6m-8 0H1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    micro: `<path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1112 0A6 6 0 012 8z" fill="currentColor"/>`
  },
  aliases: ['gear', 'cog', 'preferences', 'config']
}