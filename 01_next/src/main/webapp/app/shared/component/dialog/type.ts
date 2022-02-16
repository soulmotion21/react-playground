export interface DialogProps {
  visible: boolean
  title: string
  code: string
  message: string
  confirmText: string
  cancelText: string
  errorStatus: {
    status?: string
    statusText?: string
  }
  onConfirm?(): void
  onCancel?(): void
}
