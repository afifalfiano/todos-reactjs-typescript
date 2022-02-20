import React, { useState } from "react";
import Todo from "../models/todo";

type StoreContextProps = {
    items: Todo[];
    addTodoItem: (text: string) => void;
    onRemoveTodo: (id: number | string) => void;
}

const StoreContext = React.createContext<StoreContextProps>({
    items: [],
    addTodoItem: (text: string) => {},
    onRemoveTodo: (id: number | string) => {}
});

export const StoreContextProvider: React.FC<any> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([
        new Todo('Learn React'),
        new Todo('Learn TypeScript'),
      ]);
    
      const onAddTodoHandler = (text: string) => {
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

    const value: StoreContextProps = {
        items: todos,
        addTodoItem: onAddTodoHandler,
        onRemoveTodo: onRemoveTodoHandler
    }

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;