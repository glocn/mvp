import React, {useState} from 'react';
import axios from 'axios';
import RecipeList from './RecipeList.jsx';
import configData from '../../../config/config.js';
import data from './data.jsx';
import styled from 'styled-components';
const apiKey = configData.apiKey;

//styled components
const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #A0AFB7;
`
const Styledtitle = styled.h1`
  text-align: center;
  /* font-size: 60px; */
  padding: 15px 0px 5px 0px;
  /* color: #064CA8; */
  font-size: 72px;
  background: -webkit-linear-gradient(#eee, #064CA8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Styledsection = styled.div`
  text-align: center;
`
const Styledinput = styled.input`
   margin: 5px 10px 5px 10px;
   border: 1px solid grey;
   border-radius: 5px;
   height: 20px;
   padding: 2px 23px 2px 30px;
   outline: 0;
   background-color: #f5f5f5;
`
const Styledbutton = styled.button`
  margin: 5px 10px 5px 10px;
  padding: 2px 23px 2px 20px;
  border-radius: 5px;
  background-color: #f5f5f5;
  &:hover {
      cursor: pointer;
      background-color: #f0ffff;
  }
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

  // const getRecipes = () => {
  //   setRecipes(data);
  //   setCalories(null);
  //   setSearch('');
  // }
  const getRecipes = () => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&intolerances=dairy&maxCalories=${calories}&number=100&addRecipeInformation=true&apiKey=${apiKey}`)
    .then((res) => {
      const data = res.data;
      console.log('data', data);
      setRecipes(data);
    })
    .catch((err) => {
      console.log('error getting recipes', err);
    })
  }

  return (
    <StyledApp className="App">
      <Styledtitle className="title"> Moo-Less Meals </Styledtitle>
      <Styledsection className="calories">
        <Styledinput
          type='number'
          placeholder='Select Target Calories'
          onChange={handleCalories}
        >
        </Styledinput>
        <Styledinput
          type='text'
          placeholder='Dairy Free Recipes'
          onChange={handleSearch}
        >
        </Styledinput>
        <Styledbutton onClick={getRecipes}> Get Recipes! </Styledbutton>
      </Styledsection>
      {recipes && <RecipeList recipeData = {recipes}/>}
    </StyledApp>
  )
}

export default App;

//`https://api.spoonacular.com/recipes/654911/information?includeNutrition=false&apiKey=${apiKey}`

//`https://api.spoonacular.com/recipes/complexSearch?query=pasta&intolerances=dairy&maxCalories=${calories}&number=50&apiKey=${apiKey}`