

// import React from "react";
// import styled from "styled-components";
// import Layout from "../components/Layout";
// import FlexBox from "../components/FlexBox/FlexBox";
// import Button from "../components/UI/Button";
// import { H2, P } from "../components/UI/Typography";

// const AboutContainer = styled(FlexBox)`
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 90vh;
//   text-align: center;

//   gap: 50px;
//   padding: 20px;
//   background: ${({ theme }) => theme.colors.background};
  
// `;

// const About = () => {
//   return (
//     <Layout>
    
//       <AboutContainer width={100} >
//         <H2>Sobre este Explorador de Ethereum</H2>
//         <P>
//           Este proyecto tiene como objetivo proporcionar una forma cómoda y rápida de consultar el 
//           último bloque de Ethereum y obtener la información más relevante sobre él. 
//           También permite introducir un número de bloque específico para consultar sus detalles.
//         </P>
//         <P>
//           La aplicación está diseñada para ser intuitiva, rápida y accesible, facilitando 
//           la exploración de la blockchain de Ethereum sin necesidad de conocimientos técnicos avanzados.
//         </P>

//         {/* Botones de acción */}
//         <FlexBox gap={15}>
//           <Button as="a" href="https://github.com/Ferrancgg/explorer2.5-front-react.git" target="_blank" rel="noopener noreferrer">
//             Ir al repositorio en GitHub
//           </Button>
//           <Button as="a" href="/" >
//             Volver al Inicio
//           </Button>
//         </FlexBox>
//       </AboutContainer>
//       </Layout>
    
//   );
// };

// export default About;

import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../components/UI/Button";
import { H2, P } from "../components/UI/Typography";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;
  gap: 50px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
`;

const TextContainer = styled.div`
  max-width: 700px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <H2>🔍 Explorador de Ethereum</H2>

        <TextContainer>
          <P>
            Este proyecto tiene como objetivo proporcionar una manera sencilla y accesible 
            de consultar información en la blockchain de Ethereum.  
          </P>
          <P>
            Con nuestra aplicación, puedes visualizar el **último bloque minado** en la red Ethereum 
            y obtener información relevante como su número, hash, transacciones, minero y más.
          </P>
          <P>
            Además, puedes **buscar información de bloques específicos** simplemente ingresando su número.
          </P>
          <P>
            El diseño del explorador está enfocado en ser **rápido, intuitivo y fácil de usar**, 
            permitiendo que cualquier persona, sin importar su nivel técnico, pueda consultar datos 
            en la blockchain de manera eficiente.
          </P>
        </TextContainer>

        {/* Botones de acción */}
        <ButtonContainer>
          <Button as="a" href="https://github.com/Ferrancgg/explorer2.5-front-react.git" target="_blank" rel="noopener noreferrer">
            Ir al repositorio en GitHub
          </Button>
          <Button as="a" href="/" >
            Volver al Inicio
          </Button>
        </ButtonContainer>
      </AboutContainer>
    </Layout>
  );
};

export default About;
