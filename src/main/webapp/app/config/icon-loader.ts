import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'

import {
  faAddressBook as farAddressBook,
  faMoon as farMoon,
  faSun as farSun,
  // faSignOutAlt as farSignOutAlt,
  // faSignInAlt as farSignInAlt,
  // faExclamationCircle as farExclamationCircle,
  // faExclamationTriangle as farExclamationTriangle,
  // faTimes as farTimes,
  // faArrowToLeft as farArrowToLeft,
  // faArrowToRight as farArrowToRight,
  // faChevronLeft as farChevronLeft,
  // faChevronRight as farChevronRight,
  // faListUl as farListUl,
  // faListOl as farListOl,
  // faPaperclip as farPaperclip,
  // faFileUpload as farFileUpload,
  // faUndo as farUndo,
  // faRedo as farRedo,
  // faLink as farLink,
} from '@fortawesome/free-regular-svg-icons'

import { faSave as farSave } from '@fortawesome/free-regular-svg-icons'

export const loadIcons = () => {
  library.add(
    farAddressBook as IconDefinition,
    farMoon as IconDefinition,
    farSun as IconDefinition,
    // farSignOutAlt as IconDefinition,
    // farSignInAlt as IconDefinition,
    // farExclamationCircle as IconDefinition,
    // farExclamationTriangle as IconDefinition,
    // farTimes as IconDefinition,
    // farSave as IconDefinition,
    // farArrowToLeft as IconDefinition,
    // farArrowToRight as IconDefinition,
    // farChevronLeft as IconDefinition,
    // farChevronRight as IconDefinition,
    // farListUl as IconDefinition,
    // farListOl as IconDefinition,
    // farPaperclip as IconDefinition,
    // farFileUpload as IconDefinition,
    // farUndo as IconDefinition,
    // farRedo as IconDefinition,
    // farLink as IconDefinition
  )
}
