import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

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
      {user && (
        <>
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
      )}
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
        {!user ? (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        ) : (
          <>
            {user?.photoURL && (
              <div className="avatar">
                <div className="w-10 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURl} />
                </div>
              </div>
            )}

            <button onClick={logOut} className="btn btn-error">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
