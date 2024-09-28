import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { DetailMoviePage, ErrorPage, HomePage } from "../pages";

const routes = {
  path: "/",
  element: <MainLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/movies",
      children: [
        {
          path: "/movies/:id",
          element: <DetailMoviePage />,
        },
      ],
    },
  ],
};

export const router = createBrowserRouter([routes]);
