import './App.css';
import React from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import Footer from './components/Footer';

function App() {
  return (
    <div className='custom-container'>
      <SearchBar />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;