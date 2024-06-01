import { useState } from "react"


export default function TodoPractice(){

       let [arrray ,setArray] = useState([ 
        { id:1,name:"khan", },
        {id:2,name:'ahmad'} ,
        { id:3,name:"ali", },
        {id:4,name:'samad'} ,
    
    ])

    let deleteItem  =(id)=>{


     setArray( arrray.filter((task,index)=>  index !== id ) )

    }
    return (
        <div>
          
      {
        arrray.map((task)=>(
            <li  key={task.id} >
                {task.name}


              <button onClick={()=>deleteItem(task.id)}>delete item form array</button>   
            </li>
        ))
      }

        </div>
    )
}