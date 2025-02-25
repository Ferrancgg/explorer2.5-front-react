import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground || "white"}; /* 🔥 Usa el color del theme */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(135, 80, 157, 0.996);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  width: 320px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px); /* 🔥 Efecto flotante */
    box-shadow: 0px 8px 16px rgba(216, 168, 168, 0.864);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 280px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export default Card;
