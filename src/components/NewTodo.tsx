import React, { useContext, useRef } from "react";
import StoreContext from "../stores/store-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC<any> = () => {
    const inputTodoRef = useRef<HTMLInputElement>(null);
    const storeCtx = useContext(StoreContext);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const newTodoText = inputTodoRef.current!.value;

        if(newTodoText?.trim().length === 0) {
            return;
        } 
        
        storeCtx.addTodoItem(newTodoText);
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="todo">Todo txt</label>
            <input type="text" name="" id="todo" ref={inputTodoRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;