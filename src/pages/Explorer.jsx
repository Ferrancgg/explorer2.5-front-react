
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import useExplorerData from "../hooks/useExplorerData";
import BlockDetails from "../components/BlockDetails";
import ExplorerSelect from "../components/ExplorerSelect";
import Layout from "../components/Layout";
import Button from "../components/UI/Button";
import { H2, P } from "../components/UI/Typography";

const StyledExplorer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 85vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 15px;
    padding: 15px;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
  text-align: center;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 800px;
  text-align: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.cardBackground || "#fff"};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    padding: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Explorer = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState(null);
  const { data, loading, error } = useExplorerData(selectedOption, formData);

  return (
    <Layout>
      <StyledExplorer>
        <H2>Explorador de Ethereum</H2>

        {!selectedOption && (
          <SelectContainer>
            <ExplorerSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <P>Opción seleccionada: {selectedOption || "Ninguna"}</P>
          </SelectContainer>
        )}

        {selectedOption && (
          <>
            <SectionContainer>
              <H2>Buscador</H2>
              {selectedOption === "block" && <Form selectedOption={selectedOption} onSubmitForm={setFormData} />}
              <Button onClick={() => setSelectedOption("")}>Volver</Button>
            </SectionContainer>

            <SectionContainer>
              <H2>Resultado</H2>
              {loading ? <P>Cargando datos...</P> : error ? <P>Error: {error}</P> : data && <BlockDetails data={data} />}
            </SectionContainer>
          </>
        )}

        {/* Botón para volver a Home */}
        <ButtonContainer>
          <Button onClick={() => navigate("/")}>Ir al Inicio</Button>
        </ButtonContainer>
      </StyledExplorer>
    </Layout>
  );
};

export default Explorer;
