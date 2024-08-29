import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-control'
        placeholder='Search for recipes...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit' className='btn btn-primary'>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
