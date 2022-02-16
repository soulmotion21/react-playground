import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import ErrorBoundary from 'app/shared/error-boundary'
import Header from 'app/components/layout/Header'
import { excludeHeaderPath } from 'app/shared/utils/exclude-header-path'

const ErrorBoundaryRoute = (props: RouteProps) => {
  return (
    <ErrorBoundary key={props.location?.pathname}>
      {excludeHeaderPath(props.location?.pathname) ? null : (
        <Header location={props.location?.pathname} />
      )}
      <Route {...props} />
    </ErrorBoundary>
  )
}

export default ErrorBoundaryRoute
