import React from 'react'
import { useState } from 'react';
const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);  
  };
  return (
    <div >
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a product..."
      />
    </div>
  )
}

export default SearchBar
