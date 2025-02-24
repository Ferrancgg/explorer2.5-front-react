import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Simula la navegación en tests
import Header from "../Header/Header"; // Ajusta la ruta según la ubicación del componente
import { describe, it, expect } from "vitest";

describe("Header Component", () => {
  it("renders the Header correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verifica que el logo de Home está presente
    const homeIcon = screen.getByAltText("icono-home");
    expect(homeIcon).toBeInTheDocument();
  });

  it("renders navigation links correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verifica que los enlaces están presentes con el texto correcto
    expect(screen.getByRole("link", { name: /Explorer/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /About/i })).toBeInTheDocument();

    // Verifica que los enlaces tienen los href correctos
    expect(screen.getByRole("link", { name: /Explorer/i })).toHaveAttribute(
      "href",
      "/explorer"
    );
    expect(screen.getByRole("link", { name: /About/i })).toHaveAttribute(
      "href",
      "/about"
    );
  });
});
