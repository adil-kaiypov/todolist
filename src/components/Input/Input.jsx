import React from "react";

const Input = ({name, placeholder, onChange}) =>{
    return(
        <input type="text" name={name} placeholder ={placeholder} onChange = {onChange}/>
    );
};

export default Input;