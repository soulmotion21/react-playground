import * as React from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import { Redirect, NavLink, RouteComponentProps } from 'react-router-dom'
import { dispatchLogin } from 'app/actions/auth'
import { useRootState } from 'app/hooks/useRootState'
import { RootState } from 'app/shared/reducers'
import { IMyLocation, ILoginForm } from 'app/shared/types'

import { useForm, SubmitHandler } from 'react-hook-form'

import { useIntl, FormattedMessage } from 'react-intl'
import ErrorText from 'app/components/login/ErrorText'

function Login({ location }: RouteComponentProps, ...props): JSX.Element {
  const dispatch = useDispatch()
  const intl = useIntl()

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<ILoginForm>()

  const { from } = (location.state as IMyLocation) || {
    from: { pathname: location.state?.['from'], search: location.search },
  }

  const { isLogin } = useRootState((state: RootState) => {
    return {
      isLogin: state.auth.isLogin,
    }
  }, shallowEqual)

  const onSubmit: SubmitHandler<ILoginForm> = form => {
    const { id, password } = form

    const param = {
      userId: id,
      userPassword: password,
    }

    dispatch(dispatchLogin(param))
  }

  const onClearField = React.useCallback((event, field) => {
    return resetField(field)
  }, [])

  if (isLogin) return <Redirect to={from} />

  return (
    <section className="section-login">
      <div className="area-login">
        <h1>
          <span className="logo">Planit healthcare</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="box-field box-login-field form-floating">
            <input
              className={`${
                errors.id ? 'is-invalid' : ''
              } form-control form-control-lg`}
              type="text"
              name="id"
              placeholder={intl.formatMessage({
                id: 'id.placeholder',
              })}
              {...register('id', {
                required: true,
              })}
            />
            <label htmlFor="id">
              <FormattedMessage id="id.label" />
            </label>
            {errors.id && <ErrorText text={'아이디를 입력해주세요.'} />}
          </div>
          <div className="box-field box-login-field form-floating">
            <input
              className={`${
                errors.password ? 'is-invalid' : ''
              } form-control form-control-lg`}
              type="password"
              name="password"
              placeholder={intl.formatMessage({
                id: 'password.placeholder',
              })}
              {...register('password', { required: true, maxLength: 20 })}
            />
            <label htmlFor="password">
              <FormattedMessage id="password.label" />
            </label>
            {errors.password && <ErrorText text={'비밀번호를 입력해주세요.'} />}
          </div>
          <div className="box-login-btn">
            <button type="submit" className="btn btn-primary btn-lg">
              <FormattedMessage id="login.button" />
            </button>
            <NavLink to="/register">
              <FormattedMessage id="register.button" />
            </NavLink>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
