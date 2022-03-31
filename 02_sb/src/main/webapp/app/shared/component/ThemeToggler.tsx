import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

import Cookies from 'universal-cookie'

const cookies = new Cookies()

import { USE_THEME } from 'app/config/env'
import { setThemeBodyDataset } from 'app/shared/utils/set-theme-body-dataset'
import * as auth from 'app/shared/api/auth'
import { useDispatch } from 'react-redux'
import authSlice from 'app/shared/reducers/auth'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

function ThemeToggler(): JSX.Element {
  const dispatch = useDispatch()
  const [theme, setTheme] = React.useState<string>(() => auth.getTheme())
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  React.useEffect(() => {
    setThemeBodyDataset(theme)
    dispatch(authSlice.actions.setTheme(theme))
  }, [theme])

  const toggleTheme = React.useCallback(
    event => {
      event.preventDefault()
      setTheme(nextTheme)
      saveTheme(nextTheme)
    },
    [theme]
  )

  const saveTheme = nextTheme => {
    dispatch(authSlice.actions.setTheme(nextTheme))
    cookies.set(USE_THEME, nextTheme, {
      path: '/',
      sameSite: 'strict',
    })
  }

  return (
    <a href="#" onClick={toggleTheme}>
      {nextTheme === 'dark' ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </a>
  )
}

export default ThemeToggler
