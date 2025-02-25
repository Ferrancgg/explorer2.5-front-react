// import React from 'react'
// import styled from 'styled-components'

// const StyledFlexBox=styled.div`
// display: flex;

// align-items: center;
// justify-content: center;
// flex-wrap:wrap;
// gap:15px;
// border: 2px solid red;
// width: ${({width})=>(width?`${width}%`:"50%")};
// height:${({height})=>(height?`${height}%`:"20%")};


// `

// const FlexBox = ({children,height,width}) => {
//   return (
//     <StyledFlexBox height={height} width={width}>{children}</StyledFlexBox>
//   )
// }

// export default FlexBoximport React from "react";
import styled from "styled-components";

const StyledFlexBox = styled.div`
border:2px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  gap: 15px;
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  height: ${({ height }) => (height ? `${height}%` : "auto")};
  padding: 20px;
  background: ${({ theme }) => theme.colors.background}; // Usa el fondo del theme
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 90%;
    padding: 15px;
  }
`;

const FlexBox = ({ children, height, width }) => {
  return (
    <StyledFlexBox height={height} width={width}>
      {children}
    </StyledFlexBox>
  );
};

export default FlexBox;
