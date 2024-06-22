import React from 'react'
import { useState } from 'react';
import { useTodo } from '../Contexts';

function TodoForm() {
    const [currTodo, setcurrTodo] = useState("")

    const {addTodo} = useTodo();
    
    const add = (e) => {
        console.log("Buttoin is pressed!")
        e.preventDefault(); //prevent from sending to the different page.
        
        if(!currTodo) return; // if nothing is present in the input field.

        addTodo(currTodo) // call the function to add todo in the array defined in the App.jsx

        setcurrTodo(""); // make the input field empty
    }


    return (
        <form  className="flex">
            <input
                type="text"
                value={currTodo}
                placeholder="Write Todo..."
                onChange={(e) => setcurrTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick={add} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


