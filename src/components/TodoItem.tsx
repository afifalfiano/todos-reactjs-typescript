import React from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{todo: Todo, onRemoveTodo: (id: number | string) => void}> = (props) => {
    console.log(props.todo);
    return (
        <li  id={props.todo.id} className={classes.item} onClick={props.onRemoveTodo.bind(null, props.todo.id)}>{props.todo.text}</li>
    )
}

export default TodoItem;