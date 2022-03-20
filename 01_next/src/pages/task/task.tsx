import * as React from 'react'
import TaskList from './task-list'

function Task(props): JSX.Element {
  const tasks = [
    { id: 1, title: 'study next!!' },
    { id: 2, title: 'study testing!!' },
  ]

  return <TaskList tasks={tasks} />
}

export default Task
