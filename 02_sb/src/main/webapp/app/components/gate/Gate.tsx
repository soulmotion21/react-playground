import * as React from 'react'

function Gate(): JSX.Element {
  return (
    <div className="wrap-gate">
      <div className="area-gate-title">
        <h1>
          <span className="logo">logo</span>
        </h1>
        <span className="title-sub-text"></span>

        <a
          className="title-outer-link"
          href="https://github.com/soulmotion21/react-playground"
        >
          GitHub
        </a>
      </div>

      <div className="area-gate-info">
        <p className="text-2xl font-bold text-blue-900">
          hello tailwind ~ !!??
        </p>
        <span className="tc-color">aaa</span>
      </div>
    </div>
  )
}

export default Gate
