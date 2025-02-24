import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: greenyellow;
  border: 2px solid blue;
 
`;
const StyledHero = styled.div`
  height: 45vh;
  background-color: yellow;
`;
const StyledCardContainer = styled.div`
  height: 300px;
  background-color: green;
  border: 2px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  gap:15px;
  border-radius:15px;


`;
const Home = () => {
  return (
    <StyledHome>
      Home
      <StyledHero>
        
      </StyledHero>
      
      <StyledCardContainer>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </StyledCardContainer>
    </StyledHome>
  );
};

export default Home;
