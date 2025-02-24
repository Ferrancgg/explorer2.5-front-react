import { Route, Router, Routes } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Explorer from "./pages/Explorer/Explorer";
import About from "./pages/About/About";
import StyledMain from "./components/StyledMain";
Router;
function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </StyledMain>

      <Footer>© 2025 - All rights reserved</Footer>
    </>
  );
}

export default App;
