
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledBlockDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  max-width: 600px;
  max-height: 300px;
  padding: 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 90%;
    max-height: 250px;
    padding: 15px;
  }
`;

const StyledIntense = styled.strong`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledP = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin: 5px 0;
  word-break: break-word;
`;

const BlockDetails = ({ data }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatHash = (hash) =>
    isMobile ? `${hash.slice(0, 6)}...${hash.slice(-6)}` : hash;

  if (!data) return <StyledP>No hay datos disponibles.</StyledP>;

  return (
    <StyledBlockDetails>
      <StyledP>
        <StyledIntense>Número de bloque:</StyledIntense> {data.number || "Desconocido"}
      </StyledP>
      <StyledP>
        <StyledIntense>Hash:</StyledIntense>{" "}
        <span title={data.hash}>{formatHash(data.hash)}</span>
      </StyledP>
      <StyledP>
        <StyledIntense>Hash anterior:</StyledIntense>{" "}
        <span title={data.parentHash}>{formatHash(data.parentHash)}</span>
      </StyledP>
      <StyledP>
        <StyledIntense>Fecha:</StyledIntense> {data.timestamp || "No disponible"}
      </StyledP>
      <StyledP>
        <StyledIntense>Transacciones:</StyledIntense> {data.transactions?.length || 0}
      </StyledP>
      <StyledP>
        <StyledIntense>Minero:</StyledIntense> {data.miner || "No identificado"}
      </StyledP>
      <StyledP>
        <StyledIntense>Gas utilizado:</StyledIntense> {data.gasUsed || "No especificado"}
      </StyledP>
      <StyledP>
        <StyledIntense>Límite de Gas:</StyledIntense> {data.gasLimit || "No especificado"}
      </StyledP>
    </StyledBlockDetails>
  );
};

export default BlockDetails;
