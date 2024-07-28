import { useState } from "react";
import {Chai,Coffee} from "./alagChai";

function App() {
   const [todos,setTodos] = useState([])
   const [todo,setTodo] = useState("")

   const addTodo = (todo) => {
    setTodos((prev) => [...prev,todo])
   }

   const updateTodo = (id,todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) => eachTodo.id === id ? todo : eachTodo )
    )
   }

   console.log(todos);


  return (
    <>
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        if (todo.trim() !== "") {
           addTodo({id:Date.now(),msg:todo.trim()});
        }
      }}>
        
        <input type="text" onChange={(e) => {
          setTodo(e.target.value)
        }}/>
        <button>
          Add
        </button>
        
      </form>

      <div>
        {todos.map((eachtodo) => (
                        <div  className='w-full'>
                          <input type="text" 
                            value={eachtodo.msg}
                            onChange={(e) => {
                              setTodo(e.target.value)
                            }}
                           />
                          <button
                          onClick={() => {
                            updateTodo(eachtodo.id,todo)
                          }}>
                            Edit
                          </button>
                        </div>
                      )  
                      )}
      </div>
   </>
  )
}

export default App
