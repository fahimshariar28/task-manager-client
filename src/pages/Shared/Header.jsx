import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const headerOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/yourtask"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Your Task
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addtask"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Add Task
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {headerOptions}
          </ul>
        </div>
        <Link to="/" className=" normal-case text-2xl text-red-600">
          Task Manager
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{headerOptions}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
