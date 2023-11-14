import React from 'react'
import Item from './Item'

const Filed = ({ list }) => {
   
  return (
    <div className="field">
          {
            list.map((item, index) => <Item key={index} item={item} />)
          }
    </div>
  )
}

export default Filed