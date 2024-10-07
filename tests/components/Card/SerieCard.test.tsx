import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Serie } from "../../../src/types/Serie.type";
import { SerieCard } from "../../../src/components/Card/SerieCard";

// Simulación de datos para el componente
const serieData: Serie = {
  id: 1,
  name: "Breaking Bad",
  posterPath: "/path/to/poster.jpg",
  originalLanguage: "en",
  voteAverage: 9.5,
  firtAirDate: "2021-01-01",
  // Otros campos que sean necesarios
};

describe("SerieCard Component", () => {
  it("should navigate to the correct series detail page when clicked", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<SerieCard data={serieData} />} />
          <Route path="/series/:id" element={<div>Series Details Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Breaking Bad/i)).toBeInTheDocument();
    expect(screen.getByText(/EN/i)).toBeInTheDocument();
    expect(screen.getByText(/9.5/i)).toBeInTheDocument();
    const posterImage = screen.getByAltText("Breaking Bad");
    expect(posterImage).toHaveAttribute("src", "/path/to/poster.jpg");

    const link = screen.getByRole("link", { name: /Breaking Bad/i });
    expect(link).toHaveAttribute("href", "/series/1");
    fireEvent.click(link);
    expect(screen.getByText("Series Details Page")).toBeInTheDocument();
  });
});
