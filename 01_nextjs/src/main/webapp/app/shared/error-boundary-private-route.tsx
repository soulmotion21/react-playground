import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import { RootState } from 'app/shared/reducers'
import ErrorBoundary from 'app/shared/error-boundary'
import Header from 'app/components/layout/Header'
import { excludeHeaderPath } from 'app/shared/utils/exclude-header-path'
import { useRootState } from 'app/hooks/useRootState'

export const ErrorBoundaryPrivateRoute = ({
  component: Component,
  ...rest
}: RouteProps) => {
  const { isLogin } = useRootState((state: RootState) => {
    return {
      isLogin: state.auth.isLogin,
    }
  }, shallowEqual)

  const renderRedirect = props => {
    if (!isLogin) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    } else {
      if (Component) {
        return <Component {...props} />
      }
    }
  }

  return (
    <ErrorBoundary key={rest.location?.pathname}>
      {excludeHeaderPath(rest.location?.pathname) ? null : <Header />}
      <Route {...rest} render={renderRedirect} />
    </ErrorBoundary>
  )
}
