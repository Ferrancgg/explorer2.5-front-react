import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./About";
import theme from "../styles/theme";


const LocationDisplay = () => {
  const location = useLocation();
  return <span data-testid="location">{location.pathname}</span>;
};

describe("About Component", () => {
  const renderWithProviders = (initialRoute = "/about") => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<div>Home</div>} />
          </Routes>
          <LocationDisplay />
        </ThemeProvider>
      </MemoryRouter>
    );
  };

  test("Renderiza correctamente el componente About", () => {
    renderWithProviders();

    expect(screen.getByText(/🔍 Explorador de Ethereum/i)).toBeInTheDocument();
    expect(screen.getByText(/Este proyecto tiene como objetivo/i)).toBeInTheDocument();
  });

  test("Permite volver a Home al hacer clic en 'Volver al Inicio'", () => {
    renderWithProviders();

    const homeButton = screen.getByText(/Volver al Inicio/i);
    fireEvent.click(homeButton);

    expect(screen.getByTestId("location")).toHaveTextContent("/");
  });
});
