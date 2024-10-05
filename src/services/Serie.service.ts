import { CastMemberAPI } from "../types/CastMember";
import { ReviewAPI } from "../types/Review.type";
import { SerieAPI, SerieDetailAPI } from "../types/Serie.type";
import { get } from "../utils/AxiosClient";

interface ResponseListSerieAPI {
  results: SerieAPI[];
}

interface ResponseCastAPI {
  cast: CastMemberAPI[];
}

interface ResponseReviewAPI {
  results: ReviewAPI[];
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

export const getSerieDetail = async (id: string, options?: Record<string, unknown>) => {
  try {
    const data = await get<SerieDetailAPI>(`/tv/${id}`, { ...options });
    return data;
  } catch (error) {
    throw new Error(`Error - /tv/${id} ${error.message}`);
  }
};

export const getSerieCast = async (id: string, options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseCastAPI>(`/tv/${id}/credits?language=en-US`, { ...options });
    return data;
  } catch (error) {
    throw new Error(`Error - /tv/${id}/credits ${error.message}`);
  }
};

export const getSimilarSeries = async (id: string, options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseListSerieAPI>(`/tv/${id}/recommendations?language=en-US`, { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /tv/${id}/recommendations  ${error.message}`);
  }
};

export const getSerieComents = async (id: string, options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseReviewAPI>(`/tv/${id}/reviews?language=en-US`, { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /tv/${id}/reviews ${error.message}`);
  }
};
