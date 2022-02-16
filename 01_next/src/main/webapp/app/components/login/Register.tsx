import * as React from 'react'

import { useAsync } from 'app/hooks/useAsync'
import * as auth from 'app/shared/api/auth'
import { NavLink } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import RegisterDialog from 'app/components/login/RegisterDialog'
import { IRegisterForm } from 'app/shared/types'
import { useIntl, FormattedMessage } from 'react-intl'
import ErrorText from 'app/components/login/ErrorText'
import { useEffect } from 'react'
import { getRegExpKorean, getRegExpEmail } from 'app/shared/utils/regExp'

function Register(): JSX.Element {
  const intl = useIntl()

  const { run, isSuccess } = useAsync()

  const {
    register,
    handleSubmit,
    resetField,
    setError,
    formState: { errors },
  } = useForm<IRegisterForm>()

  useEffect(() => {
    const input = document.querySelector('.box-email')

    // input type='email' 브라우저 기본 invalid 스타일 제거
    const invalidHandler = e => {
      e.preventDefault()
    }
    input.addEventListener('invalid', invalidHandler)

    return () => {
      input.removeEventListener('invalid', invalidHandler)
    }
  }, [])

  const onSubmit: SubmitHandler<IRegisterForm> = React.useCallback(
    data => {
      const { id, name, password } = data

      const regExKorean = getRegExpKorean()

      if (id.match(regExKorean)) {
        return setError('id', {
          types: {
            onlyEng: '한글은 입력할 수 없습니다.',
          },
        })
      }

      const param = {
        userId: id,
        userName: name,
        userPassword: password,
      }
      run(auth.register(param))
    },
    [handleSubmit]
  )

  return (
    <>
      <section className="section-login">
        <div className="area-login">
          <h1>
            <span className="logo">Planit healthcare</span>
          </h1>
          <form>
            <div className="box-field form-floating">
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
                  required: {
                    value: true,
                    message: '아이디를 입력해주세요.',
                  },
                  maxLength: 20,
                  pattern: {
                    value: /[A-Za-z]{2,20}/,
                    message:
                      '최소2자, 최대20자, 영어, 특수문자가 입력이 가능합니다.',
                  },
                })}
              />
              <label htmlFor="id">
                <FormattedMessage id="id.label" />
                <span>최소2자, 최대20자, 영어 대소문자 구분</span>
              </label>
              {errors.id && (
                <ErrorText
                  text={`${
                    errors.id?.message
                      ? errors.id.message
                      : errors.id.types.onlyEng
                  }`}
                />
              )}
            </div>
            <div className="box-field form-floating">
              <input
                className={`${
                  errors.name ? 'is-invalid' : ''
                } form-control form-control-lg`}
                type="text"
                name="name"
                placeholder={intl.formatMessage({
                  id: 'name.placeholder',
                })}
                {...register('name', {
                  required: {
                    value: true,
                    message: '이름을 입력해 주세요.',
                  },
                })}
              />
              <label htmlFor="name">
                <FormattedMessage id="name.label" />
              </label>
              {errors.name && <ErrorText text={errors.name?.message} />}
            </div>
            <div className="box-field form-floating">
              <input
                className={`${
                  errors.password ? 'is-invalid' : ''
                } form-control form-control-lg`}
                type="password"
                name="password"
                placeholder={intl.formatMessage({
                  id: 'password.placeholder',
                })}
                {...register('password', {
                  required: {
                    value: true,
                    message: '비밀번호를 입력해주세요.',
                  },
                  minLength: {
                    value: 4,
                    message: '4자 이상 입력해주세요.',
                  },
                  maxLength: 20,
                  /* validation 예시
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,20}$/,
                    message: '영어 대문자, 숫자, 특수문자가 포함되어야 합니다.'
                  }*/
                })}
              />
              <label htmlFor="password">
                <FormattedMessage id="password.label" />
                <span>최소4자, 최대20자, 영어/특수문자/숫자</span>
              </label>
              {errors.password && <ErrorText text={errors.password?.message} />}
            </div>
            <div className="box-field form-floating">
              <input
                className={`${
                  errors.email ? 'is-invalid' : ''
                } form-control form-control-lg box-email`}
                type="email"
                name="email"
                placeholder={intl.formatMessage({
                  id: 'email.placeholder',
                })}
                {...register('email', {
                  required: false,
                  pattern: {
                    value: getRegExpEmail(),
                    message: '이메일주소가 필요한 형식과 일치하지 않습니다.',
                  },
                })}
              />
              <label htmlFor="email">
                <FormattedMessage id="email.label" />
                <span>(optional)</span>
              </label>
              {errors.email && <ErrorText text={errors.email?.message} />}
            </div>
            <div className="box-login-btn">
              <button
                className="btn btn-lg btn-success"
                type="button"
                onClick={() => handleSubmit(onSubmit)()}
              >
                <FormattedMessage id="register.button" />
              </button>
              <NavLink to="/login">
                <FormattedMessage id="login.button" />
              </NavLink>
            </div>
          </form>
        </div>
      </section>
      {isSuccess ? <RegisterDialog /> : null}
    </>
  )
}

export default Register
