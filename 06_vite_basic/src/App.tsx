import * as React from 'react'
import './asset/styles/style.scss'
import DatePicker from './components/datepicker/DatePicker'

function App() {
  return (
    <main className="tw-bg-slate-200">
      <h1 className="tw-text-lg tw-text-green-500">App</h1>
      <p className="tw-text-base">hello app!</p>
      <button className="btn">Submit!</button>
      <DatePicker />
    </main>
  )
}

export default App
