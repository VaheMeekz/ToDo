import s  from "./ToDoFooter.module.css";


function TodoFooter ({todos,onClearCompleted}){
   const completedSIze  =   todos.filter((todo)=>todo.isCompleted).length
    return(
           <div className={s.Footer}>
               <span>{completedSIze}/{todos.length} Completed</span>
               <button onClick={onClearCompleted}>Clear Completed</button>
           </div>
    )
}

export default TodoFooter;