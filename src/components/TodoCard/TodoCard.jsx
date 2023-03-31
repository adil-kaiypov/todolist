import React, { useState } from 'react'
import ButtonAction from '../ButtonAction/ButtonAction';
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
    <div className={task.completed ? classes.TodoCard + " " + classes.isDone : classes.TodoCard}>
      <div className={classes.todoTitle}>
        <h5>{task.title}</h5> 
      </div>
        <div className={classes.buttonGroup}>
          <ButtonAction type={'edit'} task={task} handleClick={handleSelectCurrent}>Edit</ButtonAction>
          <ButtonAction type={'done'} task={task} handleClick={handleDone}>Done</ButtonAction>
          <ButtonAction type={'delete'} task={task} handleClick={handleDelete}>Delete</ButtonAction>          
        </div>

    </div>
  )
}

export default TodoCard