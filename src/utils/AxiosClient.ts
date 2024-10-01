import axios, { AxiosResponse } from "axios";
import { ACCESS_TOKEN, API_BASE_URL } from "../constants/constants";

export const API_CLIENT = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  timeout: 5000,
});

export const get = async <T>(url: string, options?: Record<string, unknown>): Promise<T> => {
  const response: AxiosResponse<T> = await API_CLIENT.get(url, options);
  return response.data;
};
