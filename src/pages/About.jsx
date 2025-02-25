import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import FlexBox from "../components/FlexBox/FlexBox";
import Button from "../components/UI/Button";
import { H2, P } from "../components/UI/Typography";

const AboutContainer = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;
  gap: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
`;

const About = () => {
  return (
    <Layout>
      <AboutContainer width={80} height={50}>
        <H2>Sobre este Explorador de Ethereum</H2>
        <P>
          Este proyecto tiene como objetivo proporcionar una forma cómoda y rápida de consultar el 
          último bloque de Ethereum y obtener la información más relevante sobre él. 
          También permite introducir un número de bloque específico para consultar sus detalles.
        </P>
        <P>
          La aplicación está diseñada para ser intuitiva, rápida y accesible, facilitando 
          la exploración de la blockchain de Ethereum sin necesidad de conocimientos técnicos avanzados.
        </P>

        {/* Botones de acción */}
        <FlexBox gap={15}>
          <Button as="a" href="https://github.com/tu-repo" target="_blank" rel="noopener noreferrer">
            Ir al repositorio en GitHub
          </Button>
          <Button as="a" href="/" >
            Volver al Inicio
          </Button>
        </FlexBox>
      </AboutContainer>
    </Layout>
  );
};

export default About;
