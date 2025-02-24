import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, describe, beforeEach } from "vitest";
import Explorer from "./Explorer";

// Agrupamos los tests en una suite
describe("Explorer Component", () => {
  beforeEach(() => {
    render(<Explorer />);
  });

  test("Renderiza correctamente con el select visible al inicio", () => {
    expect(screen.getByText("Seleccione una opción...")).toBeInTheDocument();
    expect(screen.getByText("Opción seleccionada: Ninguna")).toBeInTheDocument();
  });

  test("Muestra los campos adecuados cuando se selecciona una opción", () => {
    // Seleccionamos una opción en el select
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "block" } });

    // Verificar que desaparece el select y aparecen los campos de búsqueda
    expect(screen.getByText("Buscador")).toBeInTheDocument();
    expect(screen.getByText("Resultado")).toBeInTheDocument();
    expect(screen.getByText("volver")).toBeInTheDocument();
  });

  test("Oculta los campos de búsqueda y vuelve al select al presionar 'volver'", () => {
    // Seleccionamos una opción en el select
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "block" } });

    // Simulamos el clic en el botón "volver"
    fireEvent.click(screen.getByText("volver"));

    // Verificar que vuelve el select y desaparecen los campos de búsqueda
    expect(screen.getByText("Seleccione una opción...")).toBeInTheDocument();
    expect(screen.getByText("Opción seleccionada: Ninguna")).toBeInTheDocument();
  });
});
