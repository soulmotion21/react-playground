import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Register from '../register'

describe('Register', () => {
  it('Renders register', () => {
    render(<Register />)

    const divEl = screen.getByRole('contentinfo')
    expect(divEl).toHaveTextContent('content')
  })
})
