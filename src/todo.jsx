import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import './todo.css'

export default function Todo(){
    let [todos,setodos] = useState([{task:"",id:uuidv4()}])
    let [newTodo, setnewTodo] = useState("")
   

    let updateTodo = (e)=>{
        setnewTodo(e.target.value)
    }

    let addTask = () => {
        var trimmedTodo = newTodo.trim();
        if (trimmedTodo === "") {
            alert("Can't add empty task")
        } else {

            setodos((previousTodos)=>{
                return  [...previousTodos, {task: trimmedTodo, id: uuidv4()}]
            })
            // setodos([...todos, {task: trimmedTodo, id: uuidv4()}])
             setnewTodo("") // Clear the input after adding the task
        }
    }

    let deletTodo=(id)=>{
        // console.log("delete fucnton is runnign")
           setodos( todos.filter((some)=> some.id !== id))
        // console.log(copy)
    }

    let uppercase=()=>{

         setodos(  todos.map((something)=>{
            return{
                ...something,
                task:something.task.toUpperCase()
            }
         }))
         
    }

    let UpdateOne=(id)=>{
        setodos(  todos.map((something)=>{
            if(something.id === id){
                return{
                    ...something,
                    task:something.task.toUpperCase()
                }
            }else{
                return something
            }
            
           
     }))
         
    }

 
    return (
        <div>

            <h1>Todo App in React</h1>
            <input type="text" value={newTodo}  onChange={updateTodo}  placeholder="Enter your task"/>
           
            <button className="btn" onClick={addTask}>Add Task</button>
            <h3>Todo List</h3>
            <ul>
        {todos.map((todo, index) => (
        <li key={todo.id}>
          <span style={{ maxWidth: 10 }}>{todo.task}</span>
          {index !== 0 && (
            <>
              
                <button onClick={() => deletTodo(todo.id)}>Delete</button>
              
              <button onClick={() => UpdateOne(todo.id)}>UpperCase</button>

             
            
            </>
          )}
        </li>
      ))}
    </ul>

            <br />
            <br />

            <button onClick={uppercase}>UpperCaseAll</button>
        </div>
    )
}
