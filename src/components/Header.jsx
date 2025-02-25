import styled from "styled-components";

const Header = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  color: white;
  text-align: center;
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    padding: 10px;
  }
`;

export default Header;
