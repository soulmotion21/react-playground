import * as React from 'react'

function AlertLogin(props): JSX.Element {
  const timer = window.setTimeout(() => {
    window.location.assign(window.location as any)
    clearTimeout(timer)
  }, 1000)
  return (
    <>
      <p>로그인이 필요합니다.</p>
      <p>로그인 페이지로 이동합니다.</p>
    </>
  )
}

export default AlertLogin
