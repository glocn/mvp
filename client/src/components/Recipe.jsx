import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { FaFireAlt } from "react-icons/fa";

//Styled Components
const Styledheading = styled.h1`
  text-align: center;
  margin-bottom: 5px;
  font-size: 20px;
`
const Styledlist = styled.ul`
  text-align: left;
  justify-content: space-evenly;
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
const Styledcardcontainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: z-indez 500ms, transform 500ms;
  z-index: 0;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  transform-style: preserve-3d;

  &.flipped {
    z-index: 1;
  }
`
const Styledcardside = css`
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 2px solid #0d0d0d;
`
const Styledflipfront = styled.div`
  ${Styledcardside}
  z-index: 0;
  background: white;
  `
  const Styledflipback = styled.div`
    ${Styledcardside}
    transform: rotateY(-180deg) translate(100%, 0);
    background: #d7d7d7;
    z-index: 1;
  `
const Styledflipinner = styled.div`
  flex: 1;
  display: flex;
  transition: transform 500ms;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }
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
const Styledbacktitle = styled.h1`
  text-align: center;
  font-size: 25px;
  color: #064CA8;
`
const Styledspan = styled.span`
  text-align: center;
  font-size: 20px;
  color: #064CA8;
`
const Styledicon = styled(FaFireAlt)`
  color: #FF4500;
  transform: scale(1.5);
  &:hover{
    transform: scale(2);
    cursor: pointer;
  }
`

const Recipe = ( { item }) => {
  const [flipped, setFlipped] = useState(false);
  const [boba, setBoba] = useState("Lychee Green Tea with Lychee Jelly");

  const getPairing = () => {
    axios.get('/boba')
    .then((res) => {
      const data = res.data;
      setBoba(data);
    })
    .catch((err) => {
      console.log('error with getting boba description', err)
    });
  }

  const beforeFlip = () => {
    setFlipped(true);
    getPairing();
  }

  //handle favorites
  const handleFavorites = (event) => {
    event.preventDefault();
      let params = {
        title: item.title,
        link: item.sourceUrl,
        photo: item.image
      }

      axios.post('/favorites', params)
      .then(() => {
        alert('Recipe Saved to Favorites!');
      })
      .catch((err) => {
        console.log('Error Saving Favorites', err)
      });
  }

  let random = Math.floor(Math.random() * 20);
  let bobaDescription = boba[random].about;

  return (
    <Styledcontainer>
      <Styledarticle>
        <Styledheading>{item.title}</Styledheading>

        <Styledcardcontainer >
          <Styledflipinner className={flipped ? 'flipped' : ''}>
            <Styledflipfront >
              <Styledimg src={item.image} alt="recipe" />
              <button onClick={beforeFlip}> Flip </button>
            </Styledflipfront>
            <Styledflipback >
              <Styledbacktitle> Boba Pairing </Styledbacktitle>
              <Styledspan> {bobaDescription} </Styledspan>
              <button onClick={() => setFlipped(false)}> Flip </button>
            </Styledflipback>
          </Styledflipinner>
        </Styledcardcontainer>

        <Styledlist>
          <Styledtext>{item.nutrition.nutrients[0].amount.toFixed(0)} Calories</Styledtext>
          <Styledtext> Ready in {item.readyInMinutes} minutes </Styledtext>
          <Styledtext> Price per serving: {item.pricePerServing}</Styledtext>
          <Styledtext> Servings: {item.servings}</Styledtext>
        </Styledlist>

        <Styledref href={item.sourceUrl}> Checkout Recipe </Styledref>
        <Styledicon onClick={handleFavorites}/>
      </Styledarticle>
    </Styledcontainer>
  )
}

export default Recipe;