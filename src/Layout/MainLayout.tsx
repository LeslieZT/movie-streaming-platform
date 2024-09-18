import React from "react";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="w-[70%] m-auto">
        <Outlet />
      </div>
    </>
  );
};
