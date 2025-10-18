import { IconRegistry } from '../icon-registry'
import { homeIcon } from './home'
import { settingsIcon } from './settings'
import { userIcon } from './user'

// Register all icons
IconRegistry.register(homeIcon)
IconRegistry.register(settingsIcon)
IconRegistry.register(userIcon)

// Export individual icons
export { homeIcon, settingsIcon, userIcon }

// Export registry for runtime access
export { IconRegistry }