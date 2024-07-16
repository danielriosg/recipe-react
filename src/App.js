import React, { useState } from "react";
import config from "./config";
import RecipeCard from "./RecipeCard"; // Assuming you have a RecipeCard component

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const fetchRecipes = async (query) => {
    const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${config.APP_ID}&app_key=${config.APP_KEY}&from=0&to=10`;
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError("Failed to load recipes. Please try again later.");
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      setError(null);
      fetchRecipes(query);
    } else {
      setError("Please enter a search term.");
    }
  };

  return (
    <div className='container'>
      <h1 className='my-4'>Recipe Search</h1>
      <div className='mb-4'>
        <input
          type='text'
          className='form-control'
          placeholder='Search for a recipe'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='btn btn-primary mt-2' onClick={handleSearch}>
          Search
        </button>
      </div>
      {error && <div className='alert alert-danger'>{error}</div>}
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
