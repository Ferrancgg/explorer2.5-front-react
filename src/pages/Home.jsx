import Layout from "../components/Layout";
import Hero from "../components/UI/Hero"; // Importamos el Hero

import { H2, P } from "../components/UI/Typography";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px;
`;

export default function Home() {
  const navigate = useNavigate();

  const clickInfo = () => {
    navigate("/about");
  };

  const clickBloque = () => {
    navigate("/explorer");
  };

  const clickLast = () => {
    navigate("/explorer");
  };
  return (
    <Layout>
      <Hero />
      <H2>Tu Portal Rápido a la Blockchain de Ethereum</H2>
      <HomeContainer>
        <Card>
          <H2>Consulta Explorador</H2>
          <P>
            ¿Quieres saber más sobre cómo funciona esta herramienta? Aprende
            cómo consultar bloques y transacciones de Ethereum.
          </P>

          <Button onClick={clickInfo}>Más información</Button>
        </Card>
        <Card>
          <H2>Consulta Bloque</H2>
          <P>
            Introduce un número de bloque y obtén información detallada sobre su
            hash, transacciones, minero y más. ¡¡Te atreves!!
          </P>

          <Button onClick={clickBloque}>Buscar Bloque</Button>
        </Card>
        <Card>
          <H2>Último Bloque ETH</H2>
          <P>
            Consulta el bloque más reciente en la blockchain de Ethereum con
            información actualizada al instante.¡¡Vamos!!
          </P>

          <Button onClick={clickLast}>Ver ultimo bloque</Button>
        </Card>
      </HomeContainer>
    </Layout>
  );
}
