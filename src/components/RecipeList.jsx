// src/components/RecipeList.jsx
import React, { useState, useEffect } from "react";
import { fetchRecipes } from "../utils/api.js";

const RecipeList = ({ query }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    if (!query) {
      setError("No search query provided.");
      setLoading(false);
      return;
    }
    const getRecipes = async () => {
      setLoading(true);
      setError(null);

      const result = await fetchRecipes(query);
      if (result.recipes.length) {
        setRecipes(result.recipes);
        setNextPageUrl(result.nextPageUrl);
      } else {
        setError("No recipes found.");
      }

      setLoading(false);
    };

    getRecipes();
  }, [query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.recipe.label}</li>
        ))}
      </ul>
      {nextPageUrl && (
        <button onClick={() => fetchMoreRecipes(nextPageUrl)}>Load More</button>
      )}
    </div>
  );
};

export default RecipeList;
