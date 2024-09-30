import { useState } from "react"

const Five = () => {
  const [isToggled,setIsTogged]=useState(false)
  return(
    <>
   <input type="checkbox" checked={isToggled} onChange={()=>setIsTogged(!isToggled)}/>
   <p>{isToggled ?"on" : "off"}</p>
    </>

  )
}

export default Five