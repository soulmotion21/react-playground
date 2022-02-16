import * as React from 'react'
import { useRootState } from 'app/hooks/useRootState'
import { shallowEqual, useDispatch } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import errorDialogSlice from 'app/shared/reducers/error-dialog'

function ErrorDialog(): JSX.Element {
  const dispatch = useDispatch()

  const visible = useRootState(state => {
    return state.errorDialog.visible
  }, shallowEqual)

  const errorStatus = useRootState(state => {
    return state.errorDialog.errorStatus
  }, shallowEqual)

  const onClose = React.useCallback(() => {
    dispatch(errorDialogSlice.actions.toggle(false))
  }, [])

  return (
    <Modal show={visible} onHide={onClose} size="lg" backdrop={true}>
      <Modal.Body>
        <p>
          code:
          {errorStatus['status'] ? errorStatus['status'] : 'Exception'}
        </p>
        <p>
          message:{' '}
          {Object.keys(errorStatus?.['statusText']).length > 0
            ? errorStatus['statusText']
            : 'Not found'}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>확인</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ErrorDialog
