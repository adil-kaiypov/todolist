import React, { useState } from 'react'
import classes from './todocard.module.css'
const TodoCard = ({ 
  task, 
  handleDelete,
   handleDone ,
   handleEdit,
   handleSelectCurrent,
   iEdit
  }) => {
    const handleClose = (task, newTitle) =>{
        handleEdit({...task, title: newTitle});
        handleSelectCurrent(-1);
    };
    const [ newTitle, setNewTitle ] = useState(task.title);
    if(iEdit) {
      return <div>
       <input 
       name='edit'
      value={newTitle}
      onChange={(event) => setNewTitle(event.target.value)}
/>
      <button onClick={() => handleClose(task, newTitle)}>Save</button>
      <button onClick={() => handleClose(task, task.title)}>Cancel</button>
      </div>
    };
  return (
    <div className={task.completed ? classes.TodoCard + " " + classes.done : classes.TodoCard}>
        <h5>{task.title}</h5>
        <button onClick={() => handleSelectCurrent(task.id)}>Edit</button>
        <button onClick={() => handleDone(task.id)}>Done</button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  )
}

export default TodoCard