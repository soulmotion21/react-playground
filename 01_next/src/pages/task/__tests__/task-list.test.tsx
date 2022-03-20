import { render } from '@testing-library/react'
import TaskList from '../task-list'

describe('TaskList', () => {
  it('Renders TaskList', () => {
    const tasks = [
      { id: 1, title: 'study next!!' },
      { id: 2, title: 'study testing!!' },
    ]

    const { container } = render(<TaskList tasks={tasks} />)
    // expect(container).toHaveTextContent('study testing!!')
  })
})
