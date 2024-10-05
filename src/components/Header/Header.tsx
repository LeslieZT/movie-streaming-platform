import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { debounce } from "../../utils/debounce";

const NavLinks = () => (
  <>
    <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
      Home
    </NavLink>
    <NavLink to="/genre" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
      Genre
    </NavLink>
    <NavLink to="/country" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
      Country
    </NavLink>
    <NavLink to="/movies" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
      Movies
    </NavLink>
    <NavLink to="/series" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
      Series
    </NavLink>
    <NavLink to="/animation" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
      Animation
    </NavLink>
    <NavLink to="/login" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
      Login
    </NavLink>
    <NavLink to="/Signup" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
      Signup
    </NavLink>
    <NavLink to="/notifications" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
      <FontAwesomeIcon icon={faBell} className="w-6 h-6 text-white" /> Notifications
    </NavLink>
  </>
);

export const Header = ({ onSearch }: { onSearch: (word: string) => void }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(() => {
      onSearch(e.target.value);
    }, 800)();
  };

  return (
    <header className="mx-auto">
      <nav className="flex py-4 items-center justify-around md:justify-center gap-4 md:gap-6">
        {/* Mobile Menu Icon */}
        <button onClick={toggleSidebar} className="lg:hidden">
          <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-white" />
        </button>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={toggleSidebar}>
            <div
              className="fixed inset-y-0 left-0 max-w-xs w-full bg-gray-800 shadow-xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col space-y-4 mt-4">
                <NavLinks />
              </nav>
            </div>
          </div>
        )}

        {/* Left Links */}
        <div className="hidden lg:flex space-x-6 text-base font-semibold">
          <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
            Home
          </NavLink>
          <NavLink to="/genre" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
            Genre
          </NavLink>
          <NavLink to="/country" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
            Country
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            className="bg-white text-black rounded-full px-4 py-2 min-w-72 md:w-96"
            placeholder="Search movies..."
            onChange={handleInput}
          />
          <button className="absolute right-3 top-2">
            <FontAwesomeIcon icon={faSearch} className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Right Links */}
        <div className="hidden lg:flex space-x-6 text-base font-semibold ">
          <NavLink to="/movies" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
            Movies
          </NavLink>
          <NavLink to="/series" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
            Series
          </NavLink>
          <NavLink to="/animation" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
            Animation
          </NavLink>
        </div>

        {/* Login */}
        <div className="hidden sm:flex space-x-2 text-base font-semibold">
          <NavLink to="/login" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
            Login
          </NavLink>
          <span className="text-white">/</span>
          <NavLink to="/Signup" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
            Signup
          </NavLink>
          <NavLink to="/notifications" className={({ isActive }) => `${isActive ? "text-red-500" : "text-white"}`}>
            <FontAwesomeIcon icon={faBell} className="w-6 h-6 text-white" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
