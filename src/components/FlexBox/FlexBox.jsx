import React from 'react'
import styled from 'styled-components'

const StyledFlexBox=styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
flex-wrap:wrap;
gap:15px;
border: 2px solid red;
width: ${({width})=>(width?`${width}%`:"50%")};
height:${({height})=>(height?`${height}%`:"20%")};


`

const FlexBox = ({children,height,width}) => {
  return (
    <StyledFlexBox height={height} width={width}>{children}</StyledFlexBox>
  )
}

export default FlexBox