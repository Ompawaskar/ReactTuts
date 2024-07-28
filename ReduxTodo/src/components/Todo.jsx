import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo,updateTodo } from '../features/todo/todoSlice'
import EachTodo from './EachTodo'

function Todo() {
    const todos = useSelector(state => state.todos)

    return (
     <>
    <ul className="list-none">
        {todos.map((todo) => (
          <EachTodo todo = {todo}/>
        ))}
      </ul>
      </>
    )
}

export default Todo
