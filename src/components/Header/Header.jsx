import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 6vh;
  width: 100%;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:green;

 
`;

const NavStyled = styled.nav`
  display: flex;
  align-self: center;
  justify-content: center;
  background-color:blue;
  width: 30%;
  gap: 15px;


`;
const StyledHomeIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color:yellow;
  object-fit: cover;
  padding-left:10px;
  
`;

const StyledHomeImage = styled.img`
  height: 100%;
  width: 100%;
`;

const NavLinkStyled = styled(NavLink)`
  background-color: #00ff4c;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: darkred;
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      
        <StyledHomeIcon>
          <a href="/">
            <StyledHomeImage
              src="https://res.cloudinary.com/dj50wjowc/image/upload/v1739861836/hogar_hkpipa.png"
              alt="icono-home"
            />
          </a>
        </StyledHomeIcon>
      

      <NavStyled>
        <NavLinkStyled to="/explorer">Explorer</NavLinkStyled>
        <NavLinkStyled to="/about">About</NavLinkStyled>
      </NavStyled>
    </StyledHeader>
  );
};

export default Header;
