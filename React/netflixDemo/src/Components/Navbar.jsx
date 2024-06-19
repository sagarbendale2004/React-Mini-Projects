import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-40 py-5 flex justify-between bg-slate-900 text-gray-400">
      <div>
        <h1 className="text-3xl font-mono">NetFlix</h1>
      </div>
      <ul className="flex gap-8 justify-center align-middle">
        <li className="font-mono text-2xl text-gray-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="font-mono text-2xl text-gray-300">
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            About
          </NavLink>
        </li>
        <li className="font-mono text-2xl text-gray-300">
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Services
          </NavLink>
        </li>
        <li className="font-mono text-2xl text-gray-300">
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
