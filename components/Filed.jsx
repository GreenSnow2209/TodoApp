import React from 'react'
import Item from './Item'
import { useTodoContext } from '../src/TodoContext';

const Filed = () => {
  const { state } = useTodoContext();
   
  return (
    <div className="field">
          {
            state.todos.map((item, index) => <Item key={index} item={item} />)
          }
    </div>
  )
}

export default Filed