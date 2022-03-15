import * as React from 'react'
import NavBar from 'app/components/NavBar'

function AppLayout({ children }): JSX.Element {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default AppLayout
