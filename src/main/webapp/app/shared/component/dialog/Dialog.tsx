import * as React from 'react'
import { Modal } from 'react-bootstrap'

function Dialog(): JSX.Element {
  return (
    <Modal show={false} size="sm" backdrop={true}>
      <Modal.Title>modal</Modal.Title>
      <Modal.Body>modal</Modal.Body>
    </Modal>
  )
}

export default Dialog
