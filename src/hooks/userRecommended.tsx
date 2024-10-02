import { useCallback, useEffect, useState } from "react";
import { Movie } from "../types/Movie.type";
import { Serie } from "../types/Serie.type";
import { getRecommendedMovies } from "../services/Movies.service";
import { getRecommendedSeries } from "../services/Serie.service";

import { mapMovies } from "../mapper/Movie.mapper";
import { mapSeries } from "../mapper/Series.mapper";

export type Category = "Movies" | "Series" | "Animation";

export const useRecommended = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Movies");
  const [data, setData] = useState<Movie[] | Serie[]>([]);

  const fetchMovies = async () => {
    const response = await getRecommendedMovies();
    const data = mapMovies(response);
    console.log("get movies");
    setData(data);
  };

  const fetchSeries = async () => {
    const response = await getRecommendedSeries();
    const data = mapSeries(response);
    console.log("get series");
    setData(data);
  };

  // const fetchResults = useCallback(async () => {
  //   if (category === "movies") {
  //     fetchMovies();
  //   } else {
  //     fetchSeries();
  //   }
  // }, [category]);

  useEffect(() => {
    if (activeCategory === "Movies") {
      fetchMovies();
    } else {
      fetchSeries();
    }
  }, [activeCategory]);
  return { result: data, activeCategory, setActiveCategory };
};
