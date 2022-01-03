/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faExclamationTriangle } from '@fortawesome/free-regular-svg-icons/faExclamationTriangle'

const textColor = css`
  color: var(--error-text-color);
  font-size: 1.2rem;
  margin-right: 3px;
`

function ErrorText(props) {
  return (
    <React.Fragment>
      {/*<FontAwesomeIcon icon={faExclamationTriangle} css={textColor} />*/}
      <span css={textColor}>{props.text}</span>
    </React.Fragment>
  )
}

export default ErrorText
