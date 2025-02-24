import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../src/App";

import Explorer from "../src/pages/Explorer/Explorer"; // Importa tu página Explorer
import About from "../src/pages/About/About"; // Importa tu página About

test("renders Home Page by default", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

test("renders Explorer Page when navigating to /explorer", () => {
  render(
    <MemoryRouter initialEntries={["/explorer"]}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText(/Explorer/i)).toBeInTheDocument();
});

test("renders About Page when navigating to /about", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});
