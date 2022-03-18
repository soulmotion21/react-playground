import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import ThemeToggler from 'app/shared/component/ThemeToggler'

function Gate(): JSX.Element {
  return (
    <div className="wrap-gate">
      <div className="area-gate-title">
        <h1>
          <span className="logo">logo</span>
        </h1>
        <span className="title-sub-text"></span>

        <div className="title-toggler">
          <ThemeToggler />
        </div>

        <a
          className="title-outer-link"
          href="https://github.com/soulmotion21/react-playground"
        >
          GitHub
        </a>
      </div>

      <div className="area-gate-info">
        <p>web app</p>
        <span className="tc-color">aaa</span>
      </div>
    </div>
  )
}

export default Gate
