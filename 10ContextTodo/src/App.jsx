import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './Contexts/TodoContext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
   const [todos,setTodos] = useState([])

   const addTodo = (todo) => {
        setTodos((prev) => {
          return [...prev,{id:Date.now(),...todo}]
        })    
   }

   const updateTodo = (id,todo) => {
      setTodos((prevTodos) => prevTodos.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo)))
   }

   const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((eachTodo) => eachTodo.id !== id))
   }

   const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((eachTodo) => (eachTodo.id === id ? {...eachTodo,completed: !eachTodo.completed} : eachTodo)))
   }

   useEffect(() => {
    try {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
            console.log("StoredTodos:", storedTodos);
        } else {
            setTodos([]);
        }
    } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
        setTodos([]);
    }
}, []);


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log("Todos:",todos);
  }, [todos]);

  return (
  <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {Array.isArray(todos) && todos.map((todo) => (
                        <div key={todo.id} className='w-full'>
                          <TodoItem todo={todo} />
                        </div>
                      )  
                      )}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
