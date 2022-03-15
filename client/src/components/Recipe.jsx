import React from 'react';
import styled from 'styled-components';

//styled components
const Styledheading = styled.h1`
  text-align: center;
  margin-bottom: 5px;
  font-size: 20px;
`
const Styledlist = styled.ul`
  /* display: flex; */
  /* align-items: center; */
  /* width: 35rem; */
  text-align: left;
  justify-content: space-evenly;
  /* list-style: none; */
`
const Styledtext = styled.li`
    display: inline-block;
    width: 50%;
    padding: 0 24%;
    line-height: 30px;
`
const Styledcontainer = styled.div`
  display: flex;
  padding-top: 10px;
  flex: 1 0 21%;
  height: 100%;
  margin-left: 1.7%;
`
const Styledimg = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  &:hover {
    transform: scale(0.80);
  }
`
const Styledarticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 1rem;
  width: 28rem;
  background-color: #f0ffff;
  box-shadow: 0 4px 8px 2px #303030;
`
const Styledref = styled.a`
  text-align: center;
  &:hover{
    color: #7391C8;
  }
`

const Recipe = ( { item }) => {

  return (
    <Styledcontainer>
      <Styledarticle>
        <Styledheading>{item.title}</Styledheading>
        <Styledimg src={item.image} alt="recipe" />
        <Styledlist>
          <Styledtext>{item.nutrition.nutrients[0].amount.toFixed(0)} Calories</Styledtext>
          <Styledtext> Ready in {item.readyInMinutes} minutes </Styledtext>
          <Styledtext> Price per serving: {item.pricePerServing}</Styledtext>
          <Styledtext> Servings: {item.servings}</Styledtext>
        </Styledlist>

        <Styledref href={item.sourceUrl}> Checkout Recipe </Styledref>
      </Styledarticle>
    </Styledcontainer>
  )
}

export default Recipe;