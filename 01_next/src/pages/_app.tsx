import * as React from 'react'
import AppLayout from 'app/components/AppLayout'

// css

function App({ Component, pageProps }): JSX.Element {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default App
