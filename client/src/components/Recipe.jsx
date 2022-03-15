import React from 'react';

const Recipe = ( { item }) => {

  return (
    <div>
      <article>
        <h1>{item.title}</h1>
        <img src={item.image} alt="recipe" />
        <ul>
          <li>{item.nutrition.nutrients[0].amount.toFixed(0)} Calories</li>
          <li> Ready in {item.readyInMinutes} minutes </li>
          <li> Price per serving: {item.pricePerServing}</li>
          <li> Servings: {item.servings}</li>
        </ul>

        <a href={item.sourceUrl}> Checkout Recipe </a>
      </article>
    </div>
  )
}

export default Recipe;