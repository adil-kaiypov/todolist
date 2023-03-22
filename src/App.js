import './App.css';
import Modal from "./components/Modal/Modal";
import { useState } from 'react';
import Button from './components/Button/Button';
import List from './components/List/List';
import Input from './components/Input/Input';

function App() {

  let tasks = [
    {
        id:1 , 
        task: 'coding'
    },
    {
        id:2,
        task: 'eat'
    },
    {
        id:3,
        task: 'sleep'
    }
  ];

  const [text, setText] = useState();
  const handleChangeText = (textInput) =>{
      console.log(text);
      setText(textInput);
  };

  const [show, setShow ] = useState(false);

  const handleShow = () =>setShow(!show);

  return (
    <div className="App">
     {show && <Modal handleShow = {handleShow}/>} 
     <Button handleClick={handleShow}>
        Открыть модалку
     </Button>
     <Input onChange={(event) => handleChangeText(event.target.value)}/>
     <List list = {tasks}/>
    </div>
  );
}

export default App;
