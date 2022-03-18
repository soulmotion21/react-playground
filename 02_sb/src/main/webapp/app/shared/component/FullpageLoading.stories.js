/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as React from 'react'

function FullpageLoading(props) {
  return (
    <div
      css={{
        fontSize: '4em',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="loader" aria-label="loading"></div>
    </div>
  )
}

export default FullpageLoading
