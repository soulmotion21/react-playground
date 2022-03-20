import * as React from 'react'
import Link from 'next/link'

function NavBar(props) {
  return (
    <>
      <Link href="/">
        <a style={{ marginRight: 10 }}>홈</a>
      </Link>
      <Link href="/account/register">
        <a style={{ marginRight: 10 }}>등록</a>
      </Link>
      <Link href="/task/task">
        <a>할일</a>
      </Link>
    </>
  )
}

export default NavBar
