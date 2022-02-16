import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'

import {
  faAddressBook as farAddressBook,
  faMoon as farMoon,
  faSun as farSun,
  faSave as farSave,
} from '@fortawesome/free-regular-svg-icons'

import {
  faSignOutAlt as fasSignOutAlt,
  faSignInAlt as fasSignInAlt,
  faTimes as fasTimes,
  faExclamationCircle as fasExclamationCircle,
  faExclamationTriangle as fasExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons'

export const loadIcons = (): void => {
  library.add(
    farAddressBook as IconDefinition,
    farMoon as IconDefinition,
    farSun as IconDefinition,
    farSave as IconDefinition,
    fasSignOutAlt as IconDefinition,
    fasSignInAlt as IconDefinition,
    fasTimes as IconDefinition,
    fasExclamationCircle as IconDefinition,
    fasExclamationTriangle as IconDefinition
  )
}
