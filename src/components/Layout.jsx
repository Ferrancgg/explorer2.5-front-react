import styled from "styled-components";
// import Header from "./Header";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./UI/Nav";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// const Content = styled.main`
//   flex: 1;
//   padding: 10px;
  

// `;

const Content = styled.main`
  flex: 1;
  /* padding: 20px; */
  padding-left:10px;
  padding-right:10px;
  display: flex;

  flex-direction: column;
  text-align:center;
 
  gap: 30px; /* 🔥 Asegura separación entre los elementos internos */
`;

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header>
      
      </Header>
      <Content>{children}</Content>
      <Footer>
        {" "}
        &copy; {new Date().getFullYear()} ferrancgg - Todos los derechos
        reservados
      </Footer>
    </LayoutWrapper>
  );
}
