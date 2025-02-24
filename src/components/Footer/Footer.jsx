import React from 'react'
import styled from 'styled-components'
const StyledFooter=styled.footer`
height:6vh;
width:100%;
border:2px solid red;
display: flex;
align-items: center;
justify-content: center;
gap:10px;
`
const StyledLinkHome=styled.a`
width:20px;
height: 20px;
object-fit: cover;
`
const StyledImg=styled.img`
height:100%;
width:100%;`

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        &copy; {new Date().getFullYear()} ferrancgg - Todos los derechos
        reservados
      </p>
      <StyledLinkHome
        href="https://github.com/Ferrancgg/juegos-rtc.git"
        className="github-link"
      >
        <StyledImg
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
          className="github-icon"
        />
      </StyledLinkHome>
    
    </StyledFooter>
  )
}

export default Footer