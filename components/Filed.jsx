import React from 'react'
import Item from './Item'

const Filed = ({ list, query }) => {
   
  console.log("leg: ", query.length)
  return (
    <div className="field">
          {
            list.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) )
                .map((item, index) => <Item key={index} item={item} />)
          }
    </div>
  )
}

export default Filed