/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as React from 'react'
import { Modal as ModalUi } from 'react-bootstrap'

interface ModalProps {
  opened?: boolean
  children?: any
}

const callEventAll =
  (...fns) =>
  (...args) =>
    fns.forEach(fn => fn && fn(...args))

const ModalContext = React.createContext([])

function Modal({ opened, ...props }: ModalProps): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(opened)
  const value = [isOpen, setIsOpen]

  return <ModalContext.Provider value={value} {...props} />
}

function ModalDismissButton({ children }): JSX.Element {
  const [, setIsOpen] = React.useContext(ModalContext)

  return React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // @ts-ignore
        onClick: callEventAll(() => setIsOpen(false), child.props.onClick),
      })
    }

    return child
  })
}

function ModalOpenButton({ children: child }): JSX.Element {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callEventAll(() => setIsOpen(true), child.props.onClick),
  })
}

function ModalContentsBase(props): JSX.Element {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)

  return (
    <ModalUi
      show={isOpen}
      size="sm"
      backdrop={true}
      onHide={() => setIsOpen(false)}
      {...props}
    />
  )
}

function ModalContents({ title, children, ...props }): JSX.Element {
  const isArray = Array.isArray(children)
  const dismissButton = children[children.length - 1]

  return (
    <ModalContentsBase {...props}>
      <ModalUi.Header closeButton>
        <ModalUi.Title>{title}</ModalUi.Title>
      </ModalUi.Header>

      <ModalUi.Body>
        {isArray
          ? children
              .filter(child => child.type.name !== 'ModalDismissButton')
              .map(el => el)
          : children}
      </ModalUi.Body>

      {dismissButton ? <ModalUi.Footer>{dismissButton}</ModalUi.Footer> : null}
    </ModalContentsBase>
  )
}

export { Modal, ModalDismissButton, ModalOpenButton, ModalContents }
