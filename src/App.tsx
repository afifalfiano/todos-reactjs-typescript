
import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo  from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
  ]);

  const onAddTodo = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevValue) => {
      return prevValue.concat(newTodo);
    });
  }

  const onRemoveTodoHandler = (id: number | string) => {
    console.log(id);
    setTodos((prevValue) => {
      return prevValue.filter((todo) => todo.id !== id);
    })
  }
  
  return (
    <div>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos} onRemoveTodo={onRemoveTodoHandler}/>
    </div>
  );
}

export default App;
