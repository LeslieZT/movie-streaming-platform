import axios from "axios";
import { ACCESS_TOKEN, BASE_URL } from "../constants/constants";

export const API_CLIENT = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  timeout: 5000,
});
