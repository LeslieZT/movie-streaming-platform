import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MovieCard } from "../../../src/components/Card/MovieCard";
import { Movie } from "../../../src/types/Movie.type";

const movieData: Movie = {
  id: 1,
  title: "The Matrix",
  posterPath: "/path/to/poster.jpg",
  originalLanguage: "en",
  voteAverage: 8.7,
  releaseDate: "2021-01-01",
  backdropPath: "/path/to/backdrop.jpg",
};

describe("MovieCard Component", () => {
  it("should render movie details correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<MovieCard data={movieData} />} />
          <Route path="/movies/:id" element={<div>Movie Details Page</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/The Matrix/i)).toBeInTheDocument();
    expect(screen.getByText(/EN/i)).toBeInTheDocument();
    expect(screen.getByText(/8.7/i)).toBeInTheDocument();
    const posterImage = screen.getByAltText("The Matrix");
    expect(posterImage).toHaveAttribute("src", "/path/to/poster.jpg");
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/movies/1");
    fireEvent.click(link);
    expect(screen.getByText("Movie Details Page")).toBeInTheDocument();
  });
});
