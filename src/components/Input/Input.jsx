import React from "react";

const Input = ({name, placeholder, onChangeFunc}) =>{
    return(
        <input 
        type="text" 
        name={name} 
        placeholder =
        {placeholder} 
        onChange = {onChangeFunc}
        />
    );
};

export default Input;