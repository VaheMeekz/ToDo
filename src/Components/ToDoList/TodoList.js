import React from "react";
import TodoItem from "../ToDoItem/TodoItem";



function TodoList ({todos,onChange,onDelete}){
    return(
           <div>
           {
              todos.map((todo)=>{
                     return(
                            <TodoItem key={todo.id}
                                      todo={todo}
                                      onChange={onChange}
                                      onDelete={onDelete}
                                       />
                     )
              })
           }
           </div>
    )
 }


export default TodoList;