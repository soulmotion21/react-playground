import * as React from 'react'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '/node_modules/bootstrap/scss/bootstrap.scss'
import './asset/style/style.scss'
// import './asset/style/index.scss'

import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { IntlProvider } from 'react-intl'
import en from 'app/locale/en.json'
import ko from 'app/locale/ko.json'
import ja from 'app/locale/ja.json'

import * as auth from 'app/shared/api/auth'
import ErrorDialog from 'app/shared/component/dialog/ErrorDialog'
import ErrorBoundary from 'app/shared/error-boundary'
import AppRoutes from './routes'
import { Toaster } from 'react-hot-toast'

import authSlice from 'app/shared/reducers/auth'
import FullpageLoading from 'app/shared/component/FullpageLoading'
import SelectLocale from 'app/shared/component/SelectLocale'
import SkipNavigation from 'app/shared/component/SkipNavigation'

const baseHref = document
  .querySelector('base')
  .getAttribute('href')
  .replace(/\/$/, '')

const App = (): JSX.Element => {
  const dispatch = useDispatch()

  const [locale, setLocale] = React.useState(() => 'ko')
  const messages = { en, ko, ja }[locale]

  React.useEffect(() => {
    auth.getUser().then(user => {
      if (user?.user) {
        dispatch(authSlice.actions.setLogin(true))
        dispatch(authSlice.actions.setUserId(user?.user))
        dispatch(authSlice.actions.setUserName(user?.name))
      }
    })
  }, [dispatch])

  const onChangeLocale = locale => {
    setLocale(locale)
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <SkipNavigation />
      <SelectLocale onChangeLocale={onChangeLocale} />
      <Router basename={baseHref}>
        <ErrorBoundary>
          <main id="app" className="app">
            <React.Suspense fallback={<FullpageLoading />}>
              <AppRoutes />
            </React.Suspense>
          </main>
          <ErrorDialog />
          <Toaster />
        </ErrorBoundary>
      </Router>
    </IntlProvider>
  )
}

export default App
