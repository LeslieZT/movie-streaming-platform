import { SerieAPI } from "../types/Serie.type";
import { get } from "../utils/AxiosClient";

interface ResponseListSerieAPI {
  results: SerieAPI[];
}

export const getReleasedSeries = async (options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseListSerieAPI>("/tv/top_rated", { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /tv/top_rated ${error.message}`);
  }
};

export const getRecommendedSeries = async (options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseListSerieAPI>("/tv/popular", { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /tv/tv/popular${error.message}`);
  }
};

export const getRecentlyUpdateSeries = async (options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseListSerieAPI>("/tv/on_the_air", { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /tv/on_the_air${error.message}`);
  }
};
