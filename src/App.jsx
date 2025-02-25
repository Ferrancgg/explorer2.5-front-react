import { Route, Router, Routes } from "react-router-dom";
// import "./App.css";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home";
import Home from "./pages/Home";

// import Explorer from "./pages/Explorer/Explorer";
import Explorer from "./pages/Explorer";
import About from "./pages/About";
// import StyledMain from "./components/StyledMain";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
Router;
function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/about" element={<About />} />
        </Routes>


    </ThemeProvider>


      {/* <Header />
      <StyledMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </StyledMain>

      <Footer>© 2025 - All rights reserved</Footer> */}
    </>
  );
}

export default App;
