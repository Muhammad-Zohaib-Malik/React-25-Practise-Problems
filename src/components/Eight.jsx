import { useState } from "react"


const Eight = () => {

  const [input,setInput]=useState("")
  const [todos,setTodos]=useState([])

  const addTodo=()=>{
    if(input.trim()!=="")
    {

      setTodos([...todos,input])
    }
  }

  const deleteTodo=(index)=>{

    const updatedTodo=todos.filter((_,i)=>i!==index)
   
    setTodos(updatedTodo)

  }

  return (
    <div>
      <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter Todo"/>
      <button onClick={addTodo}>Add</button>

    <div>
      {todos.map((todo,index)=>(
        <>
        <p key={index}>{todo}</p>
      <button onClick={()=>deleteTodo(index)}>Delete</button>

        </>
        
      ))}
    </div>


    </div>
  )
}

export default Eight