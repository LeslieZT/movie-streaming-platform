import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { DetailMoviePage, ErrorPage, HomePage } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="movie/:id" element={<DetailMoviePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
