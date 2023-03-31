import { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import List from './components/List/List';

function App() {

  const taskFilters = ["Все таски", "Выполненные", "Не выполненные"];
  const [taskFilter, setTaskFilter] = useState('');
  const options = taskFilters.map((task, index) => {
    return <option key={index}>{task}</option>
  }); 
  const [filteredTasks, setFilteredTasks] = useState([]);

  const [ show, setShow ] = useState(false);
  const [ newTask, setNewTask ] = useState('');
  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      title: 'Coding',
      completed: false
    }
  ])
  const handleShow  = () => setShow(!show)
  
  const handleChangeCheck = (event) => {
    setNewTask(event.target.value);

  }
  const handleAddTask = () => {
     setTasks((prevState) => [...prevState, 
      {
      id: Math.floor(Math.random() * 1000),
      title: newTask,
      completed: false
     }]);
     handleShow();
  }

const handleDelete = (id) => {
  const deleted = tasks.filter(el => el.id !== id);
  setTasks([...deleted])
  /// filter
}

const handleDeleteAll = () => {
  setTasks([]);
}

const handleDone = (id) => {
  // const currentIndex = tasks.findIndex(task => task.id === id )
  tasks.map(task => {
    if(task.id === id) {
      return task.completed = !task.completed
    }
    return task
  })
setTasks([...tasks])
}

const handleEdit = (editTodo) => {

 const editList = tasks.map(task => {
    if(task.id === editTodo.id) {
      return editTodo
    }
    return task
  })
  setTasks([...editList])
} 

useEffect(() => {
  const myLocalList = JSON.parse(localStorage.getItem('tasks')); 
  if(myLocalList.length !== 0){
    setTasks(myLocalList);
  }
}, []);

useEffect(() => {
  if(taskFilter === 'Выполненные'){
    setFilteredTasks(tasks.filter(task => task.completed === true));
  } else if(taskFilter === 'Не выполненные'){
    setFilteredTasks(tasks.filter(task => task.completed === false));
  } else {
    setFilteredTasks(tasks);
  }
}, [taskFilter, tasks])

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

  return (
    <div className="App">
      {show && <Modal 
      handleChangeCheck={handleChangeCheck}
      handleAdd={handleAddTask}
      handleShow={handleShow}  />}

      <Button handleClick={handleShow}>
        Открыть модалку
      </Button>

      <select value={taskFilter} onChange={event => setTaskFilter(event.target.value)}>
        {options}
      </select>
  <List 
  handleDelete={handleDelete}
  handleDone={handleDone}
  handleEdit={handleEdit}
  list={filteredTasks} />

    <Button handleClick={handleDeleteAll}>
      Удалить ВСЕ таски
    </Button>
    </div>
  );
}

export default App;