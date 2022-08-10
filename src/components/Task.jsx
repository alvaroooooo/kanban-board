const translate = {
  low: '🥱',
  medium: '🫤',
  high: '😬',
  urgent: '😧'
}

function Task({content}){
  const {taskName, description, priority} = content
  return (
    <div className="task-card">
      <div className="task-prio">
        {translate[priority.toLowerCase()]}
      </div>
      <div className="task-info">
        <div className="task-name">
          {taskName}
        </div>
        <div className="task-description">
          {description}
        </div>
      </div>
    </div>
  )
}

export default Task