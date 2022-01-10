import * as React from 'react'
import { Switch } from 'react-router-dom'

import ErrorBoundaryRoute from 'app/shared/error-boundary-route'
import { ErrorBoundaryPrivateRoute } from 'app/shared/error-boundary-private-route'

import Gate from 'app/components/gate/Gate'
import Login from 'app/components/login/Login'
import Register from 'app/components/login/Register'
import NotFoundScreen from 'app/shared/component/NotFoundScreen'

const Routes: React.FC = () => {
  return (
    <Switch>
      <ErrorBoundaryRoute path="/" component={Gate} exact />
      <ErrorBoundaryRoute path="/login" component={Login} exact />
      <ErrorBoundaryRoute path="/register" component={Register} exact />
      <ErrorBoundaryRoute path="*" component={NotFoundScreen} />
    </Switch>
  )
}

export default Routes
