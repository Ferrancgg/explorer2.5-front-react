import React from 'react'
import styled from 'styled-components'
const StyledMainLayout=styled.main`
border: 4px solid green;
min-height: 85svh;
background-color:brown;


`
const StyledMain = ({children}) => {
  return (
    <StyledMainLayout>{children}</StyledMainLayout>
  )
}

export default StyledMain