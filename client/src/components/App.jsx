import React, {useState} from 'react';
import axios from 'axios';
import RecipeList from './RecipeList.jsx';
import configData from '../../../config/config.js';
import data from './data.jsx';
// import '../style.css';
import styled from 'styled-components';
const apiKey = configData.apiKey;

//styled components
const Styledtitle = styled.h1`
text-align: center;
`
const Styledsection = styled.div`
text-align: center;
`

const App = () => {
  const [recipes, setRecipes] = useState(null);
  const [calories, setCalories] = useState(2500);
  const [search, setSearch] = useState('');

  const handleCalories = (event) => {
    setCalories(event.target.value);
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const getRecipes = () => {
    setRecipes(data);
  }
  // const getRecipes = () => {
  //   axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&intolerances=dairy&maxCalories=${calories}&number=50&addRecipeInformation=true&apiKey=${apiKey}`)
  //   .then((res) => {
  //     const data = res.data;
  //     console.log('data', data);
  //     setRecipes(data);
  //   })
  //   .catch((err) => {
  //     console.log('error getting recipes', err);
  //   })
  // }

  return (
    <div className="App">
      <Styledtitle className="title"> Moo-Less Meals </Styledtitle>
      <Styledsection className="calories">
        <input
          type='number'
          placeholder='Target Calories (e.g. 2500)'
          onChange={handleCalories}
        >
        </input>
        <input
          type='text'
          placeholder='Dairy Free Recipes'
          onChange={handleSearch}
        >
        </input>
        <button onClick={getRecipes}> Get Recipes! </button>
      </Styledsection>
      {recipes && <RecipeList recipeData = {recipes}/>}
    </div>
  )
}

export default App;

//`https://api.spoonacular.com/recipes/654911/information?includeNutrition=false&apiKey=${apiKey}`

//`https://api.spoonacular.com/recipes/complexSearch?query=pasta&intolerances=dairy&maxCalories=${calories}&number=50&apiKey=${apiKey}`