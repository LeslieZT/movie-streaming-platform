import { useCallback, useEffect, useState } from "react";
import { Movie } from "../types/Movie.type";
import { searchMovies } from "../services/Movies.service";
import { mapMovies } from "../mapper/Movie.mapper";

export const useSearchMovies = (searchQuery: string) => {
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string>();

  const fetchResults = useCallback(async () => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    try {
      const response = await searchMovies(searchQuery);
      const data = mapMovies(response);
      setResults(data);
    } catch (err: any) {
      setErrors(err.message);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.trim()) {
      fetchResults();
    }
  }, [searchQuery, fetchResults]);

  useEffect(() => {
    console.log("new Search ....");
  }, [searchQuery]);

  return { results, errors, loading };
};
