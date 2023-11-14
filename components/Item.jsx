import React, { useState } from 'react'

const Item = ({item}) => {
  const [complete, setComplete] = useState(item.isCompleted);

   const handleComplete = (e) => {
      setComplete(e.target.checked)
   }
  return (
    <div>
        {
            <h3 style={ {textDecoration: complete ? 'line-through' : 'none'} }>{item.title} <span><input onChange={handleComplete} checked={complete} type="checkbox" name="checkComplete" /></span></h3>
        }
    </div>
  )
}

export default Item