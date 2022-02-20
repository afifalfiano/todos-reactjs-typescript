
import React, { useContext } from 'react';
import Todo from '../models/todo';
import StoreContext from '../stores/store-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<any> = () => {

    const storeCtx = useContext(StoreContext);

    return (<ul className={classes.todos}>
       {storeCtx.items.map((item: Todo) => (
           <TodoItem key={item.id} text={item.text} onRemoveTodo={storeCtx.onRemoveTodo.bind(null, item.id)}/>
       ))}
    </ul>)
}

export default Todos;