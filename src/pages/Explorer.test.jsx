import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import { vi } from "vitest";
import Explorer from "./Explorer";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";


const LocationDisplay = () => {
  const location = useLocation();
  return <span data-testid="location">{location.pathname}</span>;
};

describe("Explorer Component", () => {
  const renderWithProviders = (initialRoute = "/explorer") => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/" element={<Layout />} />
          </Routes>
          <LocationDisplay />
        </ThemeProvider>
      </MemoryRouter>
    );
  };

  test("Renderiza correctamente el explorador", () => {
    renderWithProviders();
    expect(screen.getByText(/Explorador de Ethereum/i)).toBeInTheDocument();
    expect(screen.getByText(/Opción seleccionada: Ninguna/i)).toBeInTheDocument();
  });

  test("Permite seleccionar una opción en el ExplorerSelect", () => {
    renderWithProviders();

    const selectElement = screen.getByText(/Opción seleccionada: Ninguna/i);
    fireEvent.click(selectElement);


  });

  test("Permite volver a Home al hacer clic en el botón", () => {
    renderWithProviders();

    const homeButton = screen.getByText(/Ir al Inicio/i);
    fireEvent.click(homeButton);


    expect(screen.getByTestId("location")).toHaveTextContent("/");
  });
});
