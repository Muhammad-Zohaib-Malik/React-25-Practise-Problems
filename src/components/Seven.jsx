import { useEffect } from "react"
import { useState } from "react"


const Seven = () => {
    const [time,settime]=useState(60)

    useEffect(()=>{

      if(time > 0)
      {
        const timer=setInterval(() => {
          settime(time-1)
          
        }, 1000);
        return ()=>clearInterval(timer)
      }

    },[time])

  return (
    <div>Time Left: {time}</div>
  )
}

export default Seven