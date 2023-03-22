import React from 'react';

const List = (props) =>{
    return(
        props.list.map((el) => <li key={el.id}>{el.task}</li>)
    );
};

export default List;