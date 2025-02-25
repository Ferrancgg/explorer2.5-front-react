import styled from "styled-components";

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 15px;
  text-align: center;
  margin-top: auto;
  font-size: 1.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 10px;
  }
`;

export default Footer;
