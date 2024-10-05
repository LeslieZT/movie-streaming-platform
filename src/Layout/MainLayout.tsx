import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { InitialLoadContextProvider } from "../context/InitialLoadContextProvider";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <InitialLoadContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </InitialLoadContextProvider>
    </>
  );
};
