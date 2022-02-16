import React from 'react'
import Research from '../../../main/webapp/app/components/demo/drag/Research'

import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('demo dom test', () => {
  const { container: div } = render(<Research />)
  console.log(document.body.innerHTML)

  const title = div.querySelector('h2')
  console.log('title', title.textContent)

  const button = div.querySelector('button') as HTMLButtonElement
  console.log(button.textContent)

  expect(title).toHaveTextContent('Drag, Sort')

  fireEvent.click(button)
  expect(button).toHaveTextContent('add')
})
