/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react'
import { createBrowserHistory } from 'history'

interface IErrorBoundaryProps {
  readonly children: JSX.Element | JSX.Element[]
}

interface IErrorBoundaryState {
  readonly error: any
  readonly errorInfo: any
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  readonly state: IErrorBoundaryState = {
    error: undefined,
    errorInfo: undefined,
  }

  constructor(props) {
    super(props)
  }

  componentDidCatch(error, errorInfo): void {
    this.setState({
      error,
      errorInfo,
    })
  }

  onClose(): void {
    const history = createBrowserHistory()
    if (history.location.pathname !== '/login') {
      return history.goBack()
    } else {
      window.location.assign(window.location as any)
    }
  }

  render(): JSX.Element {
    const { error, errorInfo } = this.state

    if (errorInfo) {
      const errorDetails =
        process.env.NODE_ENV === 'development' ? (
          <details className="preserve-space">
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        ) : undefined
      return (
        <React.Fragment>
          <div
            role="alert"
            css={{
              color: 'red',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p>예기치 않은 오류가 발생했습니다.</p>
            <p>불편을 드려 죄송합니다.</p>
            <p>문의 : 전산실 T-500</p>
            <p>오류내용 : {error?.message}</p>
            <button
              type="button"
              onClick={this.onClose}
              className="btn btn-lg btn-primary"
            >
              이전 페이지로
            </button>
          </div>
          {/*<div className="error-boundary-detail">{errorDetails}</div>*/}
        </React.Fragment>
      )
    }
    return this.props.children as JSX.Element
  }
}

export default ErrorBoundary
