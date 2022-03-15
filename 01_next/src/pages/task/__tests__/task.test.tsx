import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TaskList from '../task-list'

describe('Task', () => {
  it('Renders Task', () => {
    const tasks = [
      { id: 1, title: 'study next!!' },
      { id: 2, title: 'study testing!!' },
    ]

    const { container } = render(<TaskList tasks={tasks} />)
    expect(container).toHaveTextContent('study testing!!')
  })
})
