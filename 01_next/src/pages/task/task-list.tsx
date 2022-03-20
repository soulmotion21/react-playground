import * as React from 'react'

function TaskList({ tasks }): JSX.Element {
  return (
    <ul>
      {tasks.map(task => {
        return <li key={task.id}>{task.title}</li>
      })}
    </ul>
  )
}

export default TaskList
