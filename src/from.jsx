  import { useState } from "react"

 export default function From(){


    let [formData,setFormData] = useState({
        firstname: "",
        lastName: " ",
        Userpassword: ""
    })


    let handleInput=(e)=>{
        let fieldname = e.target.name
        let newValue = e.target.value
        setFormData ((currentData)=>{
            currentData[fieldname] = newValue
            return {... currentData}
        })
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)

        localStorage.setItem('formData',JSON.stringify(formData))

        setFormData({
            firstname : "",
            lastName : "",
            Userpassword : ""
        })

    }
    return(
        <div>
            <form  onSubmit={handleSubmit}>
            <label htmlFor="firstname"> Firstname:</label>
            <input 
            type="text" 
            name="firstname" 
            id="firstname" 
            value={formData.firstname}
            onChange={handleInput}
            />
             <br />
             <label htmlFor="lastname"> lastname</label>
             <input 
             name="lastName"
             type="text"
             id="lastname"
             value={formData.lastName} 
              onChange={handleInput}/>

          <br />
            <label htmlFor="password"> Enter your password</label>
            <input 
            type="password"
            name="Userpassword"
            id="password" 
            value={formData.Userpassword}
            onChange={handleInput}
            />


             <button>submit</button>
         </form>
        </div>
    )
 }