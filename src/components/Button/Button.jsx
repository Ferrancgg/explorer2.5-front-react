// import React from 'react'
// import styled from 'styled-components'
// const StyledButton=styled.button`

// height: 200px;
// width: 20px;
// border:2px solid black;
// border-radius:15px;
// cursor: pointer;
// background-color:brown;

// `


// const Button = ({name,handleClick}) => {
//   return (
//     <StyledButton onClick={handleClick} >{name}</StyledButton>
//   )
// }

// export default Button


import React from 'react'
import styled from 'styled-components';

const StyledButton=styled.button`
height: 200px;
height: 40px;

background-color:grey;

color:whitesmoke;
padding: 10px 20px;
border-radius:10px;
border:1px solid black;
transition:0,3;
&:hover{background-color:blue}


`

const Button = ({onClick,label}) => {
  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  )
}

export default Button