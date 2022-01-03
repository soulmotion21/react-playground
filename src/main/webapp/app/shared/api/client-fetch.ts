/*
import * as auth from 'app/shared/api/auth'
import errorDialogSlice from 'app/shared/reducers/error-dialog'

let store

export const injectStore = _store => {
  store = _store
}

async function client<T>(
  // method: string,
  endpoint: string,
  { data, token, headers: customHeaders, ...customConfig }: any = {}
): Promise<void | T> {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      ...customHeaders,
    },
    ...customConfig,
  }

  return window.fetch(`${endpoint}`, config).then(async response => {
    if (response.status >= 400 && response.status < 404) {
      await auth.logout()
      // window.location.assign(window.location as any)
      // store.dispatch(errorDialogSlice.actions.toggle(true))
      // store.dispatch(errorDialogSlice.actions.error(response))
      return Promise.reject({ message: '로그인 해주세요.' })
    }

    const data = (await response.json()) as T

    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export { client }
*/
