import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import * as auth from 'app/shared/api/auth'
import errorDialogSlice from 'app/shared/reducers/error-dialog'
import { toast } from 'react-hot-toast'
import { Store } from 'redux'

let store

export const injectStore = (_store: Store): void => {
  store = _store
}

const client: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: '/',
})

client.defaults.headers.common['Content-Type'] = 'application/json'
client.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// 요청 시 인증토큰
client.interceptors.request.use(
  config => {
    // todo: 토큰 저장 시나리오
    // console.log('store??', store.getState())
    // const AUTH_TOKEN = store.getState().auth.token
    // client.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
    return config
  },
  error => {
    console.log('Bad request.')
    return Promise.reject(error)
  }
)

client.interceptors.response.use(
  (response: AxiosResponse) => {
    // status: 2xx
    return response.data
  },
  (error: AxiosError) => {
    const {
      response,
      request,
    }: { response?: AxiosResponse; request?: XMLHttpRequest } = error

    if (response) {
      // todo: 서버 응답코드가 정해지면 최종 정리
      if (response.status === 401) {
        if (response.data.errorMessage === 'LoginUsernameNotFound') {
          toast.error('없는 사용자 아이디입니다.', { duration: 1500 })
          return Promise.reject(error)
        }

        if (response.data.errorMessage === 'LoginBadCredential') {
          toast.error('비밀번호가 잘못되었습니다.', { duration: 1500 })
          return Promise.reject(error)
        }

        // UnAuthorized
        const logout = auth.logout()
        toast.promise(logout, {
          loading: '',
          success: () => {
            const timer = window.setTimeout(() => {
              window.location.assign(window.location as any)
              clearTimeout(timer)
            }, 1000)
            return '로그인이 필요합니다. 로그인 페이지로 이동합니다.'
          },
          error: () => '',
        })
      } else {
        store.dispatch(errorDialogSlice.actions.toggle(true))
        store.dispatch(errorDialogSlice.actions.error(response))
        return Promise.reject(error)
        // throw error
      }
    } else if (request) {
      console.log('잘못된 요청입니다. 다시 시도하세요.')
      // throw error
    }
    store = null
    return Promise.reject(error)
  }
)

export { client }
