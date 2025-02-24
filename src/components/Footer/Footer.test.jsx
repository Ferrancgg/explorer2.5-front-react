import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer"; // Asegúrate de que la ruta sea correcta
import { describe, it, expect } from "vitest";

describe("Footer Component", () => {
  it("renders the footer correctly", () => {
    render(<Footer />);

    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${year} ferrancgg - Todos los derechos reservados`, "i"))
    ).toBeInTheDocument();
  });

  it("renders the GitHub link correctly", () => {
    render(<Footer />);

    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/Ferrancgg/juegos-rtc.git");
  });

  it("renders the GitHub icon correctly", () => {
    render(<Footer />);

  
    const githubIcon = screen.getByAltText("GitHub");
    expect(githubIcon).toBeInTheDocument();
    expect(githubIcon).toHaveAttribute("src", "https://cdn-icons-png.flaticon.com/512/25/25231.png");
  });
});
