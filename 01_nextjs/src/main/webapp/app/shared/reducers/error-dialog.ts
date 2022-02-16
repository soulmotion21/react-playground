import { createSlice } from '@reduxjs/toolkit'
import { DialogProps } from 'app/shared/component/dialog/type'

type ErrorDialogState = DialogProps

const initialState: ErrorDialogState = {
  visible: false,
  title: '',
  code: '',
  message: '',
  confirmText: '확인',
  cancelText: '취소',
  onConfirm() {},
  onCancel: undefined,
  errorStatus: {
    status: '',
    statusText: '',
  },
}

const errorDialogSlice = createSlice({
  name: 'errorDialog',
  initialState,
  reducers: {
    toggle(state: ErrorDialogState, action) {
      state.visible = action.payload
    },
    error(state: ErrorDialogState, action) {
      state.errorStatus.status = action.payload.status
      state.errorStatus.statusText = action.payload.data.errorMessage
    },
  },
})

export default errorDialogSlice
