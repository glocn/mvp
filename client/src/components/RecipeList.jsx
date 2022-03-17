import React from 'react';
import Recipe from './Recipe.jsx';
import styled from 'styled-components';

//Styled Components
const Styledmain = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const RecipeList = ( { recipeData } ) => {
  let recipeArr = recipeData.results;

  return (
    <div className="RecipeList">
      <Styledmain className="Meals">
        {recipeArr &&
          recipeArr.map((item, i) => (
            <Recipe item={item} key={i} />
          ))
        }
      </Styledmain>
    </div>
  )
}

export default RecipeList;