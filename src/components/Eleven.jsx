import { useState } from "react"

const Eleven = () => {

  const [file,setFile]=useState(null)

  const handleFileChange=(e)=>{
    const selectedFiles=e.target.files[0]
    setFile(selectedFiles)
    
  }

  return (
    <>
    <input type="file" accept="image/*" onChange={handleFileChange}/>
    {
      file && <img src={URL.createObjectURL(file)} alt="" />
    }
    </>
  )
}

export default Eleven