import './Task.css'

function Task({ id, title, body, onDragStart }) {

    console.log(onDragStart)

    function onDragEnter(e) {
        e.preventDefault();
    }

  return (
    <div 
        className='Task-wrapper'
        draggable='true'
        onDragStart={(e) => onDragStart(e, id)}
        onDragEnter={onDragEnter}
    >
       <h3>{title}</h3>
       <p>{body}</p> 
    </div>
  )
}

export default Task