import AppHead from '../components/layout/AppHead'

// css

function App({ Component, pageProps }): JSX.Element {
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
    </>
  )
}

export default App
