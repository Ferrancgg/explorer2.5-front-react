import React from 'react'
import styled from 'styled-components'

const StyledContainerImage=styled.div`
width: 150px;
height: 150px;
object-fit: cover;

`
const StyledImg=styled.img`
width:100% ;
height: 100%;

`

const StyledContainerImg = ({src,alt}) => {
  return (
    <StyledContainerImage>
        <StyledImg src={src} alt={alt}/>
    
    </StyledContainerImage>
  )
}

export default StyledContainerImg