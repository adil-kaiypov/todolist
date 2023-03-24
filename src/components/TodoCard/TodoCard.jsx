import React from "react";
import Button from "../Button/Button";
import classes from './todocard.module.css';

const TodoCard = ({el, handleDelete}) =>{
    return(
        <div className={classes.TodoCard}>
            <h5 key={el.id}>{el.task}</h5>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
    );
};

export default TodoCard;