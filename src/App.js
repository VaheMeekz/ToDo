import { useState } from 'react';
import './App.css';
import TodoForm from './Components/ToDoForm/TodoForm';
import TodoList from './Components/ToDoList/TodoList';
import TodoFooter from './Components/ToDoFooter/TodoFooter'

function App() {

  const [todos,setTodos]=useState(
[
  {
    id:Math.random(),
    text: "Learn JS",
    isCompleted:false
  }, 
  {
    id:Math.random(),
    text: "Learn CSS",
    isCompleted:false
  },
   {
    id:Math.random(),
    text: "Learn React",
    isCompleted:false
  }
]
  )
  return (
    <div className="App">
      <div className="TodoBody">
      <h1>TO DO</h1>
        <TodoForm onAdd={(text)=>{
          setTodos ([
              ...todos,
              {
                id:Math.random(),
                text:text,
                isCompleted:false
              }
            ]
          )
        }}/>
        <TodoList todos={todos}
         onDelete={(todo)=>{setTodos(todos.filter((t) => t.id !== todo.id));}}
        onChange={(newTodo)=>{
          setTodos( todos.map((todo)=>{
          if(todo.id === newTodo.id){
            return newTodo;
          }
          else return todo;
        }));
        }}  />
        <TodoFooter todos={todos} onClearCompleted={()=>{
  setTodos(todos.filter((todo)=>!todo.isCompleted));
        }}/>
        </div>
    </div>
  );
}

export default App;
