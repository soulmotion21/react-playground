/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as React from 'react'

const skipNavi = css`
  background: var(--body-background-color);
  border: var(--header-border-color) 1px solid;
  height: 30px;
  left: 50%;
  padding: 2px 8px;
  line-height: 24px;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;
  &:focus {
    transform: translateY(0%);
    z-index: 5;
  }
`

function SkipNavigation(): JSX.Element {
  return (
    <a href="#app" css={skipNavi}>
      skip to content
    </a>
  )
}

export default SkipNavigation
