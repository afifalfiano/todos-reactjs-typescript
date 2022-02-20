
import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{items: Todo[], onRemoveTodo: (id: number | string) => void}> = (props) => {
    return (<ul className={classes.todos}>
       {props.items.map((item: Todo) => (
           <TodoItem key={item.id} todo={item} onRemoveTodo={props.onRemoveTodo} />
       ))}
    </ul>)
}

export default Todos;