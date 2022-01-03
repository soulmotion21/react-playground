import React, { useCallback, useState } from 'react'
import { createBrowserHistory } from 'history'
import { Button, Modal } from 'react-bootstrap'

function UnhandledErrorDialog() {
  const [isShow, setShow] = useState(true)

  const onClose = useCallback(() => {
    const history = createBrowserHistory()
    setShow(false)
    history.goBack()
  }, [])

  return (
    <>
      <Modal show={isShow} onHide={onClose} size="sm" backdrop={true}>
        <Modal.Body>
          <p>예기치 않은 오류가 발생했습니다.</p>
          <p>불편을 드려 죄송합니다.</p>
          <p>문의 : 전산실 T-500</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>이전 페이지로</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UnhandledErrorDialog
