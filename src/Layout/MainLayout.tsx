import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { InitialLoadContextProvider } from "../context/InitialLoadContextProvider";
import { Footer } from "../components/Footer/Footer";
import { useState } from "react";
import SearchResults from "../components/SearchResults/SearchResults";

export const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <InitialLoadContextProvider>
      <Header onSearch={setSearchQuery} />
      {searchQuery ? <SearchResults query={searchQuery} /> : <Outlet />}
      <Footer />
    </InitialLoadContextProvider>
  );
};
