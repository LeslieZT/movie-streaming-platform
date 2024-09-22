import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="w-[70%] m-auto">
      <nav className="text-white p-4 flex items-center justify-between">
        {/* Left Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-red-500" : "text-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/genre"
            className={({ isActive }) =>
              `${isActive ? "text-red-500" : "text-white"}`
            }
          >
            Genre
          </NavLink>
          <NavLink
            to="/country"
            className={({ isActive }) =>
              `${isActive ? "text-red-500" : "text-white"}`
            }
          >
            Country
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            className="bg-white text-black rounded-full px-4 py-2 w-80"
            placeholder="Search movies..."
          />
          <button className="absolute right-2 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Right Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `${isActive ? "text-red-500" : "text-white"}`
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) =>
              `${isActive ? "text-red-500" : "text-white"}`
            }
          >
            Series
          </NavLink>
          <NavLink
            to="/animation"
            className={({ isActive }) =>
              `${isActive ? "text-red-500" : "text-white"}`
            }
          >
            Animation
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${isActive ? "text-red-500" : "text-white"}`
            }
          >
            Login/Signup
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
