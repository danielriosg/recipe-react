import './App.css';
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import Footer from './components/Footer';
import React, { useState } from "react";


function App() {
   const [searchQuery, setSearchQuery] = useState("");
  // Define the handleSearch function
  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state
    console.log("Search query:", searchQuery); // Use the updated search query state
  };

  return (
    <div className='custom-container'>
      <SearchBar onSearch={handleSearch} />
      <RecipeList query={searchQuery} />
      <Footer />
    </div>
  );
}

export default App;
