import { useState, useEffect } from 'react';
import { todoContext, TodoProvider, useTodo } from './Contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, settodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });



  const addTodo = (todo) => {
    settodos(prevTodos => [...prevTodos, { id: Date.now(), todo: todo, completed: false }]);
  };
  

  const updateTodo = (id, todo) => {
     settodos((prev) => prev.map((currPrev) => currPrev.id === id ? {...currPrev, todo:todo} : currPrev))
  }

  const toggleTodo = (id) => {
     settodos((prev) => prev.map((currPrev) => currPrev.id === id ? {...currPrev, completed:!currPrev.completed} : currPrev))
  }

  const deleteTodo = (id) => {
     settodos((prev) => prev.filter((currPrev) => currPrev.id !=id));
  }

  //get all todos while loading the page for the first time.
  // useEffect(() => {
  //     const Todos =  JSON.parse(localStorage.getItem("todos"));
  //     // console.log(Todos)?
  //     settodos(Todos)
  // }, [])

  //set all the todos in the local storage with the additional todo just added(dependency on todos array.)
  useEffect(() => {
      // console.log(todos, typeof todos)
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <TodoProvider value={{todos,addTodo, updateTodo, toggleTodo, deleteTodo }} >
       <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((Todo) => (
                          <div key={Todo.id} className='w-full bg-slate-700'>
                            <TodoItem todo={Todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
