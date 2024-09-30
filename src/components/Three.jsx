import { useState } from "react"


const Three = () => {
const [userInput,setUserInput]=useState("")
  return (
    <div>
      <input type="text" onChange={(e)=>setUserInput(e.target.value)}  placeholder="Enter your Name" value={userInput} />
      <h1>User Input :{userInput}</h1>
    </div>
  )
}

export default Three