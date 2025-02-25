import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";


test("Renderiza la página Home al inicio", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Explora Ethereum en Tiempo Real/i)).toBeInTheDocument();
});

test("Carga la página About al navegar a /about", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/ Explorador de Ethereum/i)).toBeInTheDocument();
});

test("Carga la página Explorer al navegar a /explorer", () => {
  render(
    <MemoryRouter initialEntries={["/explorer"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Explorador de Ethereum/i)).toBeInTheDocument();
});
