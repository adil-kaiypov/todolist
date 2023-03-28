import React, { useState } from 'react'
import TodoCard from '../TodoCard/TodoCard';
import classes from './list.module.css';
const TaskList = (
  { 
    list,
    handleDelete,
    handleDone ,
    handleEdit
    }
  ) => {


  const [currentEdit, setCurrentEdit] = useState();

  return (
    <div className={classes.list}>
        {list.map(task => <TodoCard 
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleEdit={handleEdit}
        handleSelectCurrent={setCurrentEdit}
        iEdit={task.id === currentEdit}
        key={task.id}
        task={task} />)}
    </div>
  )
}

export default TaskList