import { useState } from "react"
import "../../src/style.css"


const Two = () => {
  const [count, setCount] = useState(0)


  return (
    <div className="counter">
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count==0 ? 0:count-1)}>-</button>
    </div>
  )
}

export default Two
