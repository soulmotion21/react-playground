import * as React from 'react'
import $ from 'jquery'
import 'bootstrap-datepicker'

function Datepicker(props): JSX.Element {
  const pickerRef = React.useRef(null)

  React.useEffect(() => {
    let $picker = $(pickerRef.current) as any
    let $start = $picker.find('.date-picker-start')
    let $end = $picker.find('.date-picker-end')

    $picker.datepicker({
      language: 'ko',
      minViewMode: 'days',
      format: 'yyyy-mm-dd',
      inputs: $picker.find('.date-picker-start, .date-picker-end'),
      immediateUpdates: true,
    })
  }, [])
  return (
    <div ref={pickerRef}>
      <div className="date-picker-start _date-picker" />
      <div className="date-picker-end _date-picker" />
    </div>
  )
}

export default Datepicker
