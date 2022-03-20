import * as React from 'react'
import AppLayout from '../components/layout/AppLayout'

// css

function App({ Component, pageProps }): JSX.Element {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default App
