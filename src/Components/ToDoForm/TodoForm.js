import { useState } from "react";
import s  from "./ToDoForm.module.css";

function TodoForm ({onAdd}) {
   
   const [text,setText] = useState("");
      return(
              
              <form className={s.forms} onSubmit={(e)=>{
                  e.preventDefault();
                  onAdd(text);
                  setText(" ");
              }}>
                  <input type="text" placeholder="Your Teamplate" value={text} onChange={(e)=>{
                    setText(e.target.value)
                  }}/>
                  <button>Add</button>
              </form>
              
           
      )

}

export default TodoForm;