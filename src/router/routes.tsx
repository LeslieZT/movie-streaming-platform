import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { DetailMoviePage, ErrorPage, HomePage } from "../pages";
import { DetailSeriePage } from "../pages/DetailSeriePage";

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
          path: "/movies/:idMovie",
          element: <DetailMoviePage />,
        },
      ],
    },
    {
      path: "/series",
      children: [
        {
          path: "/series/:idSerie",
          element: <DetailSeriePage />,
        },
      ],
    },
  ],
};

export const router = createBrowserRouter([routes]);
