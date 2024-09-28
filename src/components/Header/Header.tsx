import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="mx-auto">
      <nav className="p-4 flex items-center justify-center gap-8">
        {/* Left Links */}
        <div className="flex space-x-6 text-base font-semibold">
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
            className="bg-white text-black rounded-full px-4 py-2 w-96"
            placeholder="Search movies..."
          />
          <button className="absolute right-3 top-2">
            <FontAwesomeIcon icon={faSearch} className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Right Links */}
        <div className="flex space-x-6 text-base font-semibold ">
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
        <div className="flex space-x-2 text-base font-semibold">
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
}
