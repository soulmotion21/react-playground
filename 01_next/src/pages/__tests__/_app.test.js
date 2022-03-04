import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../_app'

describe('App', () => {
  it('Renders app', () => {
    render(<App />)
  })
})
