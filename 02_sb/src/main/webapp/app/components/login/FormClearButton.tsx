import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

function FormClearButton({ onClearField, ...props }) {
  const { field } = props

  return (
    <button
      type="button"
      onClick={event => onClearField(event, field)}
      className="form-clear-btn"
      data-field={field}
    >
      <FontAwesomeIcon icon={faTimes} data-field={field} />
    </button>
  )
}

export default FormClearButton
