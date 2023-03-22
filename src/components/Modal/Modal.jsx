import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "./modal.module.css";


const Modal = ({handleShow}) =>{
    const [text, setText] = useState();
    const handleChangeText = (textInput) =>{
        console.log(text);
        setText(textInput);
    };
    return(
        <>
            <div className={classes.modalWrapper}>

            </div>
            <div className={classes.modalContent}>
                <Button handleClick={handleShow}>
                    Закрыть модалку
                </Button>
                <Input name="add" placeholder="Добавьте таск" onChange={(event) => handleChangeText(event.target.value)}/>
                <Button>
                    Добавить таск
                </Button>
            </div>
        </>
    );
};

export default Modal;