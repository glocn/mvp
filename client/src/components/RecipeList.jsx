import React from 'react';
import Recipe from './Recipe.jsx';

const RecipeList = ( {recipeData} ) => {
  let recipeArr = recipeData.results;

  return (
    <div className="RecipeList">
      <div className="Meals">
        {recipeArr &&
          recipeArr.map((item, i) => (
            <Recipe item={item} key={i}/>
          ))
        }
      </div>
    </div>
  )
}

export default RecipeList;