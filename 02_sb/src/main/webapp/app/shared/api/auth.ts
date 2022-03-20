import Cookies from 'universal-cookie'
import { APP_AUTH_TOKEN, APP_USER_NAME, USE_THEME } from 'app/config/env'
import { client } from 'app/shared/api/client'

const cookies = new Cookies()

async function getUser() {
  // todo: 해당 도메인의 인증 정책에 따라 변경
  let user = null
  const token = await getToken()
  const name = await getUserName()
  if (token) {
    user = token
  }
  return { user, name }
}

async function getToken() {
  return await cookies.get(APP_AUTH_TOKEN)
}

async function getUserName() {
  return await cookies.get(APP_USER_NAME)
}

function handleUserResponse(user) {
  // 임시로 로그인 유지
  cookies.set(APP_AUTH_TOKEN, user.token, {
    path: '/',
    sameSite: 'strict',
    maxAge: 3600,
  })
  cookies.set(APP_USER_NAME, user.email, {
    path: '/',
    sameSite: 'strict',
    maxAge: 3600,
  })
  return user.userDto
}

async function register(param) {
  return await client.post('api/register', param)
}

async function login(param) {
  return await client.post('api/login', param).then(handleUserResponse)
}

async function logout() {
  cookies.remove(APP_AUTH_TOKEN, {
    path: '/',
  })
  cookies.remove(USE_THEME)
}

function getTheme(): 'dark' | 'light' {
  const theme = cookies.get(USE_THEME)
  if (!theme) return 'light'
  return theme
}

export { getUser, getToken, getTheme, register, login, logout }
