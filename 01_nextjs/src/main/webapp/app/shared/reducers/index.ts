import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import errorDialogSlice from './error-dialog'
import authSlice from './auth'

const rootReducer = combineReducers({
  errorDialog: errorDialogSlice.reducer,
  auth: authSlice.reducer,
})

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
