/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as React from 'react'
import { createBrowserHistory } from 'history'

const screen = css`
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
`

function NotFoundScreen(props): JSX.Element {
  const onClickBack = React.useCallback((): void => {
    const history = createBrowserHistory()
    return history.goBack()
  }, [])

  return (
    <section css={screen}>
      <h1>Page not found.</h1>
      <p>주소가 잘못되었거나 없는 페이지입니다.</p>
      <br />
      <button
        onClick={onClickBack}
        className="btn btn-lg btn-primary"
        type="button"
      >
        이전페이지로
      </button>
    </section>
  )
}

export default NotFoundScreen
