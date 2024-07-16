import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className='container'>
      <h1 className='my-4'>Recipe Search</h1>
      <div className='mb-4'>
        <input
          type='text'
          className='form-control'
          placeholder='Search for a recipe'
        />
        <button
          className='btn btn-primary mt-2'
          onClick={() => fetchRecipes("chicken")}
        >
          Search
        </button>
      </div>
      <div className='row'>
        {recipes.map((recipeData, index) => (
          <div className='col-md-4' key={index}>
            <RecipeCard recipe={recipeData.recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
