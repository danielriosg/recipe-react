import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className='recipe-card'>
      <img src={recipe.image} alt={recipe.label} className='recipe-image' />
      <h3>{recipe.label}</h3>
      <p>{recipe.source}</p>
      <a
        href={recipe.url}
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-secondary'
      >
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
