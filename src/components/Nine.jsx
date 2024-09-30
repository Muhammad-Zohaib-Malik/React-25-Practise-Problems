import { useState } from "react"


const Nine = () => {
  const [backgroundColor,setBackgroundColor]=useState("red")
  return (
    <div onClick={()=>setBackgroundColor(backgroundColor=="red"?"green":"red")} style={{backgroundColor,width:"500px",height:"500px"}}>Nine</div>
  )
}

export default Nine