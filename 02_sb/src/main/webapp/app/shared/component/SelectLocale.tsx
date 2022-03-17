/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as React from 'react'

const selectContainer = css`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 110px;
  padding-right: 10px;
`

function SelectLocale({ onChangeLocale, ...props }) {
  const onchangeLocale = React.useCallback(event => {
    onChangeLocale(event.target.value === 'default' ? 'ko' : event.target.value)
  }, [])

  return (
    <React.Fragment>
      <div css={selectContainer}>
        <select
          className="form-select"
          aria-label="Select language"
          defaultValue={props.locale}
          onChange={onchangeLocale}
        >
          <option value="ko">🇰🇷 한국어</option>
          <option value="en">🇺🇸 English</option>
          <option value="ja">日本語</option>
        </select>
      </div>
    </React.Fragment>
  )
}

export default SelectLocale
