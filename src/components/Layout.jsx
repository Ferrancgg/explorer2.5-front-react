import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0px;
`;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 15px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Content>{children}</Content>
      <FooterContainer>
        &copy; {new Date().getFullYear()} FerranCGG - Todos los derechos
        reservados
      </FooterContainer>
    </LayoutWrapper>
  );
}
