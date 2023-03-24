import React from 'react';
import TodoCard from '../TodoCard/TodoCard';

const List = ({list, handleDelete}) =>{
    return(
        list.map(el => <TodoCard el={el} handleDelete={handleDelete}></TodoCard>)
    );
};

export default List;