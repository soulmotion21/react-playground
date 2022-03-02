import * as React from 'react'
import Link from 'next/link'

function AppLayout({ children }) {
  return (
    <>
      <div>
        <Link href="/">
          <a>홈</a>
        </Link>
        <Link href="/signup">
          <a>가입</a>
        </Link>
      </div>
      {children}
    </>
  )
}

export default AppLayout
