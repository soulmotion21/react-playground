import { createAsyncThunk } from '@reduxjs/toolkit'
import * as auth from 'app/shared/api/auth'
import { AppThunk } from 'app/config/store'
import authSlice from 'app/shared/reducers/auth'

interface User {
  userId: string
  userPassword: string
}

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const login = createAsyncThunk<
  User,
  { userId: string } & Partial<User>,
  { rejectValue: ValidationErrors }
>('api/login', async (form, { rejectWithValue }) => {
  try {
    return await auth.login(form)
  } catch (error) {
    return rejectWithValue(error.response)
  }
})

export const dispatchLogin =
  (form: User): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(login(form))

    const state = getState()

    await dispatch(authSlice.actions.setUserId(state.auth.data.userId))
    await dispatch(authSlice.actions.setUserName(state.auth.data.userName))
  }
