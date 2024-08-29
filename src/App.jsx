import './App.css';
import React from "react";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Home from "../src/pages/Home";

function App() {
  return (
    <div className='container'>
      <Header />
      <Home />
      <RecipeList />
    </div>
  );
}

export default App;