import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App(){
  const [todos, setTodos] = useState([])

  //function to set todo caption (title)
  function addTodo(title){
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(),title, completed: false},
        ]
    })
  }

  //function to select/deselect todo caption (title)
  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  //function to delete todo caption (title)
  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>{/**adding a fragment since we are returing 2 things (form) and (hi)...react only like 1 return item */}
    < NewTodoForm onSubmit = {addTodo}/>
    <h1 className="header">To-do List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}