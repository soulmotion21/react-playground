import React, { useCallback } from 'react'
import { Modal } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { NavLink } from 'react-router-dom'

function RegisterDialog() {
  const [visible, setVisible] = React.useState<boolean>(true)

  const onClose = useCallback(() => {
    setVisible(false)
  }, [setVisible])

  return (
    <>
      <Modal show={visible} onHide={onClose} size="sm" backdrop={true}>
        <Modal.Body>
          <p>등록이 정상적으로 완료되었습니다.</p>
        </Modal.Body>
        <Modal.Footer>
          <NavLink to="/login" className="btn btn-primary">
            <FormattedMessage id="login.button" />
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default RegisterDialog
