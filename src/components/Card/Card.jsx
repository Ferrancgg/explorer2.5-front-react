import React from 'react'
import styled from 'styled-components'
import StyledContainerImg from '../StyledContainerImg'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const StyledCard=styled.div`
width:320px;
height: 300px;
border: 2px solid black;
cursor: pointer;
border-radius:15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 8px;



`



const Card = () => {
const navigate = useNavigate()
const handleClick=()=>{
   
   navigate("/explorer")


}

  return (
    <StyledCard>
        <h3>titulo</h3>
        <StyledContainerImg src={"https://res.cloudinary.com/dj50wjowc/image/upload/v1738313908/DALL_E_2025-01-31_09.57.18_-_A_creative_and_vibrant_icon_for_a_cryptocurrency_faucet_website_featuring_interconnected_hexagons_symbolizing_blockchain_and_a_shining_coin_at_the_ce_pghxud.webp"} alt={"imagen-muestra"}/>
    
     <Button label="Vamos" onClick={handleClick}/>
    </StyledCard>
   
  )
}

export default Card