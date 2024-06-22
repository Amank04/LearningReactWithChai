import { useContext, createContext } from "react";

export const todoContext = createContext({
    
     todos: [
        {
            id:1,
            todo:"Hello World",
            completed: true
        }
     ],
     addTodo: (todo) => {},
     updateTodo: (id, todo) => {},
     deleteTodo: (id) => {},
     toggleTodo: (id) =>{}
    
});

export const useTodo = () => {
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider;