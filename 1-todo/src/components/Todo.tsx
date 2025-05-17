import type {FormEvent} from "react"
import {useState} from "react"

interface Person {
  name:String,
  age:Number,
}

function Todo() {

  const [user,setUser]=useState<Person>({
    name:"",
    age:0
  })

  const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(user)
  }
  
  return (
  <div>
    <form onSubmit={submitHandler}>
      <input 
        type="text" 
        placeholder="Enter a name" 
        onChange={(e)=>setUser((prev)=>({...prev,name:e.target.value}))}
       
      />
      <input 
        type="number" 
        placeholder="Enter a age" 
        onChange={(e)=>setUser((prev)=>({...prev,age:Number(e.target.value)}))}
       
      />
      <button type="submit">Add</button>
    </form>
  </div>
  
  
  )
}



export default Todo