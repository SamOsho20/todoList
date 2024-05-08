import { useState } from 'react'
import './App.css'
// import TaskComplete from './components/TaskComplete'
import Display from './components/Display'
import TodoForm from './components/TodoForm'

function App() {
const [todoList, setTodoList] = useState([])

return (
    <>
    {/* <TaskComplete todoList = {todoList} setTodoList= {setTodoList}/> */}
    <Display todoList = {todoList} setTodoList = {setTodoList} />
    <TodoForm setTodoList = {setTodoList}/>
    </>
  )
}

export default App
