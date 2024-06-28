import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="h-16 flex items-center justify-between py-2 px-4 border border-b-2 border-black overflow-hidden">
        <img
          className="h-36 w-36 hidden md:block"
          src="../src/assets/pedalLogo2.png"
          alt="Logo"
        />
        <h2 className="md:text-2xl font-semibold">Task Mangement Application</h2>
        <div className="flex mr-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive && "underline text-blue-600"
              } md:text-lg font-medium py-2 px-3 md:border-r-2 border-r border-black`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/newTask"
            className={({ isActive }) =>
              `${
                isActive && "underline text-blue-600"
              } flex justify-center items-center pl-2`
            }
          >
            <p className="md:text-lg font-medium ">New</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:size-5 size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
