import { useState} from "react"


export default  function To(props){

 
    let [todos,setTodos] = useState([])

    let [inputValue, setInputValue] = useState("")

    let changeHandler=(e)=>{
         setInputValue(e.target.value)       
    }
    let addTask=()=>{
        let trimValue = inputValue.trim()
        if(trimValue === ''){
            alert("cant not add space")

        }else{
            setTodos(( previousTodos)=>{
                return [...previousTodos , inputValue ]

            })
            setInputValue('')
        }
    }

    let deletTask=( taskindex)=>{
         
        setTodos(  todos.filter((task,index)=>  index !== taskindex  ))  

        console.log( taskindex)
       
    }
    return (
        <div>
        <input type="text " placeholder="enter some text" value={inputValue}  onChange={changeHandler}/>

        <button onClick={addTask}>add Todo</button>


        <h1> {props.brand} </h1>


        <h1>Todo List</h1> 
        <ul>
            
              {todos.map((todo,index) =>(
                    <li key={index}> {todo}
                    
                   <button onClick= { ()=> deletTask(index) }>remove</button>

                     </li>
                ))
            }
        </ul>
        </div>
    )
}
