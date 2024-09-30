
const item=["item1","item2","item3","item4"]
const Four = () => {
  return (
    <div>
      {
        item.map((item,index)=>{
          return <li key={index}>{item}</li>
        })
      }
    </div>
  )
}

export default Four