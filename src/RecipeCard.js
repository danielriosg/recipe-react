import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className='card mb-4'>
      <img src={recipe.image} className='card-img-top' alt={recipe.label} />
      <div className='card-body'>
        <h5 className='card-title'>{recipe.label}</h5>
        <p className='card-text'>{recipe.ingredientLines.join(", ")}</p>
        <a
          href={recipe.url}
          className='btn btn-primary'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
