// import styled from "styled-components";
// import Button from "../UI/Button";
// import { useNavigate } from "react-router-dom";

// const HeroContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   height: 55vh;
//   background: ${({ theme }) => theme.colors.background};
//   color: ${({ theme }) => theme.colors.text};
//   padding: 20px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     height: auto;
//     padding: 60px 20px;
//   }
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   color: ${({ theme }) => theme.colors.primary};

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     font-size: 2.2rem;
//   }
// `;

// const HeroSubtitle = styled.p`
//   font-size: 1.2rem;
//   max-width: 600px;
//   margin: 10px 0 30px;
//   color: ${({ theme }) => theme.colors.text};

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     font-size: 1rem;
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 15px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     flex-direction: column;
//     width: 100%;
//     align-items: center;
//   }
// `;



// const Hero = () => {

//      const navigate=useNavigate() 
//     const clickAbout=()=>{ 
      
//        navigate("/explorer")
//     }
//     const clickExplorer=()=>{
//         navigate("/about")
//     }
    
//   return (
//     <HeroContainer>
//       <HeroTitle>Explora Ethereum en Tiempo Real</HeroTitle>
//       <HeroSubtitle>
//         Consulta transacciones, bloques y direcciones con datos detallados y análisis en vivo.
//       </HeroSubtitle>
//       <ButtonGroup>
//         <Button onClick={clickAbout}>El proyecto</Button>
//         <Button style={{ background: "#FFD700", color: "#121826" }} onClick={clickExplorer}>Consultar ETH</Button>
//       </ButtonGroup>
//     </HeroContainer>
//   );
// };

// export default Hero;


import styled from "styled-components";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 55vh;
  padding: 20px;
  position: relative; /* Permite agregar el overlay */
  color: ${({ theme }) => theme.colors.text};

  /* 🔥 Imagen de fondo */
  background: url("https://res.cloudinary.com/di49fnkc8/image/upload/v1740489390/DALL_E_2025-02-25_14.13.04_-_A_futuristic_blockchain-themed_background_with_glowing_interconnected_nodes_and_hexagons._The_design_should_have_a_dark_deep_blue_and_purple_gradient_emn7tj.webp")
    no-repeat center center/cover;

  /* Overlay para mejorar legibilidad */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* 🔥 Ajusta la opacidad si lo necesitas */
  }

  /* Asegura que el contenido se mantenga visible */
  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: auto;
    padding: 60px 20px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 10px 0 30px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const Hero = () => {
  const navigate = useNavigate();
  const clickAbout = () => navigate("/about");
  const clickExplorer = () => navigate("/explorer");

  return (
    <HeroContainer>
      <HeroTitle>Explora Ethereum en Tiempo Real</HeroTitle>
      <HeroSubtitle>
        Consulta transacciones, bloques y direcciones con datos detallados y análisis en vivo.
      </HeroSubtitle>
      <ButtonGroup>
        <Button onClick={clickAbout}>El proyecto</Button>
        <Button style={{ background: "#FFD700", color: "#121826" }} onClick={clickExplorer}>
          Consultar ETH
        </Button>
      </ButtonGroup>
    </HeroContainer>
  );
};

export default Hero;
