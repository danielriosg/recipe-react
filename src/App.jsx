import './App.css';
import React from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import Footer from './components/Footer';

function App() {
  // Define the handleSearch function
  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Implement your search logic here
  };

  return (
    <div className='custom-container'>
      <SearchBar onSearch={handleSearch} />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;
