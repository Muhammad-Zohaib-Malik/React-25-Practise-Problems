import { useState } from "react"
import { useEffect } from "react"


const Six = () => {
  const [data,setData]=useState(null)

    const fetchApi=async()=>{
      const res=await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const data=await res.json()
      setData(data)
    }

  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <div>
      <h1>{data?.title}</h1>
      <h1>{data?.body}</h1>
    </div>
  )
}

export default Six