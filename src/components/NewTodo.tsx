import React, { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props: any) => {
    const inputTodoRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const newTodoText = inputTodoRef.current?.value;

        if(newTodoText?.trim().length === 0) {
            return;
        } 
        
        props.onAddTodo(newTodoText);
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