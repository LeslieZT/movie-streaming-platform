import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { InitialLoadContextProvider } from "../context/InitialLoadContextProvider";

export const MainLayout = () => {
  return (
    <>
      <InitialLoadContextProvider>
        <Header />
        <Outlet />
      </InitialLoadContextProvider>
    </>
  );
};
