import Add from '../components/Add';
import Filed from '../components/Filed';
import Search from '../components/Search';

import { data } from '../constant/data'
import './App.css'

import { useState } from 'react';

function TodoList() {

  const [list, setList] = useState(data);
  const [query, setQuery] = useState('');

  

  const updateData = (newItem) => {
    setList([...list, newItem]);
  }

  const handleSearch = (input) => {
    setQuery(input);
  }

  return (
    <>
      <h1>Todo App</h1>
      <Search handleSearch={handleSearch}/>
      <Filed list={list} query={query} />
      <Add updateData={updateData} />

    </>
  )
}

export default TodoList
