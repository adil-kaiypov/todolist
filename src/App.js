import './App.css';
import Modal from "./components/Modal/Modal";
import { useState } from 'react';
import Button from './components/Button/Button';
import List from './components/List/List';
import Input from './components/Input/Input';
import TodoCard from './components/TodoCard/TodoCard';

function App() {
  const [newTask, setNewTask] = useState('');

  const [show, setShow ] = useState(false);

  const [query, setQuery] = useState({
    query: '',
    list: []
  });

  const [tasks, setTasks] = useState(
    [
    {
        id:1 , 
        task: 'coding',
        completed: false
    },
    {
        id:2,
        task: 'eat',
        completed: false
    },
    {
        id:3,
        task: 'sleep',
        completed: false
    }
  ]
);

  const handleChangeCheck = (event) =>{
      console.log(newTask);
      setNewTask(event.target.value);
  };

  const handleQuery = (el) =>{
    const results = tasks.filter(task =>{
      if (el.target.value === "") return tasks;
      return task.task.toLowerCase().includes(el.target.value.toLowerCase());
    })
    setQuery({
      query: el.target.value,
      list: results

    })
  }

  const handleShow = (text) => setShow(!show);

  const handleAddTask = () =>{
    setTasks((prevState) => [...prevState, 
      {
        id: Math.floor(Math.random() * 100),
        task: newTask,
        completed: false
      }]
      );
    handleShow();
  };

  const handleDelete = (id) =>{
    setTasks((prevState => prevState.filter(task => task.id !== id)));
  };
  return (
    <div className="App">
     {show && <Modal 
        handleShow = {handleShow} 
        handleChangeCheck = {handleChangeCheck} 
        handleAdd = {handleAddTask}
      />} 
     <Button handleClick={handleShow}>
        Открыть модалку
     </Button>
     <Input onChangeFunc={handleQuery} value={query.query}/>
      {(query.query === '' ? "" : query.list.map(task => {
       return <TodoCard el={task}></TodoCard>
      }))}  
      <br></br>
      <br></br>
     <List list = {tasks} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
