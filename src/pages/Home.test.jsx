import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Explorer from "./Explorer";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

describe("Home Component", () => {
  const renderWithProviders = (initialRoute = "/") => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/explorer" element={<Explorer />} />
          </Routes>
        </ThemeProvider>
      </MemoryRouter>
    );
  };

  test("Renderiza correctamente el componente Home", () => {
    renderWithProviders();

    expect(screen.getByText(/Tu Portal Rápido a la Blockchain de Ethereum/i)).toBeInTheDocument();
    expect(screen.getByText(/Consulta Explorador/i)).toBeInTheDocument();
    expect(screen.getByText(/Consulta Bloque/i)).toBeInTheDocument();
    expect(screen.getByText(/Último Bloque ETH/i)).toBeInTheDocument();
  });

  test("Navega a /about al hacer clic en 'Más información'", () => {
    renderWithProviders();

    const infoButton = screen.getByText(/Más información/i);
    fireEvent.click(infoButton);

    expect(screen.getByText(/Explorador de Ethereum/i)).toBeInTheDocument(); // Asegura que About se renderiza
  });

  test("Navega a /explorer al hacer clic en 'Buscar Bloque'", () => {
    renderWithProviders();

    const blockButton = screen.getByText(/Buscar Bloque/i);
    fireEvent.click(blockButton);

    expect(screen.getByText(/Explorador de Ethereum/i)).toBeInTheDocument(); // Asegura que Explorer se renderiza
  });

  test("Navega a /explorer al hacer clic en 'Ver último bloque'", () => {
    renderWithProviders();

    const lastBlockButton = screen.getByText(/Ver ultimo bloque/i);
    fireEvent.click(lastBlockButton);

    expect(screen.getByText(/Explorador de Ethereum/i)).toBeInTheDocument(); // Asegura que Explorer se renderiza
  });
});
