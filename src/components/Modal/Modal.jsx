import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "./modal.module.css";


const Modal = ({handleShow, handleChangeCheck, handleAdd}) =>{
    return(
        <>
            <div className={classes.modalWrapper}>

            </div>
            <div className={classes.modalContent}>
                <Button handleClick={handleShow}>
                    Закрыть модалку
                </Button>
                <Input  
                        name="add" 
                        placeholder="Добавьте таск" 
                        onChangeFunc={handleChangeCheck}
                />
                <Button handleClick={handleAdd}>
                    Добавить таск
                </Button>
            </div>
        </>
    );
};

export default Modal;