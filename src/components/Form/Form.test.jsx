import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { vi } from "vitest";
import Form from "./Form";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

describe("Form Component", () => {
  const mockOnSubmit = vi.fn();

  const renderWithTheme = (component) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Renderiza correctamente el formulario", () => {
    renderWithTheme(<Form selectedOption="block" onSubmitForm={mockOnSubmit} />);

    expect(screen.getByLabelText(/Introduce el número de bloque/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Número de bloque/i)).toBeInTheDocument();
  });

  test("Permite enviar el formulario con datos válidos", async () => {
    renderWithTheme(<Form selectedOption="block" onSubmitForm={mockOnSubmit} />);

    const input = screen.getByPlaceholderText(/Número de bloque/i);
    const submitButton = screen.getByRole("button", { name: /consultar/i });

    await act(async () => {
      fireEvent.change(input, { target: { value: "12345" } });
    });

    await waitFor(() => expect(submitButton).not.toBeDisabled());

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith({ block: 12345 });
    });
  });

  test("No permite enviar un número negativo", async () => {
    renderWithTheme(<Form selectedOption="block" onSubmitForm={mockOnSubmit} />);

    const input = screen.getByPlaceholderText(/Número de bloque/i);
    const submitButton = screen.getByRole("button", { name: /consultar/i });

    await act(async () => {
      fireEvent.change(input, { target: { value: "-1" } });
    });



  
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
