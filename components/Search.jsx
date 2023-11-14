import React from 'react'
import { useState } from 'react';

const Search = ({handleSearch}) => {

    //const [query, setQuery] = useState('');

    const handleQueryChange = (e) => {
        handleSearch(e.target.value);
        //setQuery(e.target.value);  
    }

  return (
    <div>
        <input  onChange={handleQueryChange} type='text' placeholder='Tìm kiếm' />
    </div>
  )
}

export default Search