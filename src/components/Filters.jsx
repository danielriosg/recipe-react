import React from "react";

const Filters = () => {
  return (
    <div className='filters'>
      <h3>Filters</h3>
      <form>
        <div className='form-group'>
          <label htmlFor='diet'>Diet:</label>
          <select id='diet' className='form-control'>
            <option value='all'>All</option>
            <option value='vegetarian'>Vegetarian</option>
            <option value='vegan'>Vegan</option>
            <option value='gluten-free'>Gluten-Free</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='mealType'>Meal Type:</label>
          <select id='mealType' className='form-control'>
            <option value='all'>All</option>
            <option value='breakfast'>Breakfast</option>
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Add more filters as needed */}
        <button type='submit' className='btn btn-primary'>
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default Filters;
