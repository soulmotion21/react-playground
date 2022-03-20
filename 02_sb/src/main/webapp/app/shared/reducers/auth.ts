import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from 'app/actions/auth'
import { LoadingStatus } from 'app/shared/types'

export interface AuthState {
  status: LoadingStatus
  isLogin: boolean
  data: any
  email: string
  password: string
  isError: boolean
  theme: string
  userId: string
  userName: string
  errorStatus: {
    errorCode?: string
    errorMessage?: string
  }
}

const initialState: AuthState = {
  status: 'idle',
  isLogin: false,
  data: null,
  email: '',
  password: '',
  isError: false,
  theme: 'light',
  userId: '',
  userName: '',
  errorStatus: {
    errorCode: '',
    errorMessage: '',
  } as any,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action) {
      state.isLogin = action.payload
    },
    setUserId(state, action) {
      state.userId = action.payload
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload
    },
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload
    },
  },
  extraReducers: builder =>
    builder.addCase(
      login.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.isLogin = true
        state.status = 'idle'
        state.data = action.payload
      }
    ),
})

export default authSlice
