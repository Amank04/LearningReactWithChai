import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World!" }]  // This is the state.
} 

export const todoSlice = createSlice({
    name: "Todo",  //'name' keyword will be always same (compulsory)
    initialState,
    reducers: {
        addTodo: (state, action) => { //'state' represent the current state. using 'action', id & text can be accessed.
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo); // push the todo to the state.
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
