import React from 'react'
import styled from 'styled-components'


const StyledNav=styled.nav`

display: flex;
align-items: center;
justify-content: center;
align-items: center;
gap:15px;
border:2px solid red;

`
const Nav = ({children}) => {
  return (
    <StyledNav>{children}</StyledNav>
  )
}

export default Nav