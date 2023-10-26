import './Task.css'

function Task({ title, body}) {
  return (
    <div className='Task-wrapper'>
       <h3>Task</h3>
       <p>{body}</p> 
    </div>
  )
}

export default Task