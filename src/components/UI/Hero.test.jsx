import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Hero from "./Hero";
import theme from "../../styles/theme";

// Componente para verificar la ruta actual después de la navegación
const LocationDisplay = () => {
  const location = useLocation();
  return <span data-testid="location">{location.pathname}</span>;
};

describe("Hero Component", () => {
  const renderWithProviders = () => {
    return render(
      <MemoryRouter initialEntries={["/"]}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/explorer" element={<div>Explorer Page</div>} />
          </Routes>
          <LocationDisplay />
        </ThemeProvider>
      </MemoryRouter>
    );
  };

  test("Renderiza correctamente el Hero", () => {
    renderWithProviders();

    expect(screen.getByText(/Explora Ethereum en Tiempo Real/i)).toBeInTheDocument();
    expect(screen.getByText(/Consulta transacciones, bloques y direcciones/i)).toBeInTheDocument();
  });

  test("Permite navegar a 'El proyecto' al hacer clic en el botón", () => {
    renderWithProviders();

    const aboutButton = screen.getByText(/El proyecto/i);
    fireEvent.click(aboutButton);

    // ✅ Verifica la navegación a "/about"
    expect(screen.getByTestId("location")).toHaveTextContent("/about");
  });

  test("Permite navegar a 'Consultar ETH' al hacer clic en el botón", () => {
    renderWithProviders();

    const explorerButton = screen.getByText(/Consultar ETH/i);
    fireEvent.click(explorerButton);

    // ✅ Verifica la navegación a "/explorer"
    expect(screen.getByTestId("location")).toHaveTextContent("/explorer");
  });
});
