import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import rootReducer from 'app/shared/reducers'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    logger,
  ],
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
