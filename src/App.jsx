import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import About from "./pages/About";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
