import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdBrandingWatermark } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  const location = useLocation();

  const handleSignOut = () => {
    handleLogOut();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">
          <IoIosHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/brands">
          <MdBrandingWatermark /> Brands
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myProfile">
            <RiProfileFill /> My-Profile
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/aboutDev">
          <FcAbout /> About Dev
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-200 ">
      <div className="navbar  container mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl -ml-6 md:-ml-0">Discount PRO</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Welcome Message */}
        {location.pathname === "/" && user?.displayName && (
          <div className="absolute top-[90px] left-[50%] -translate-x-[50%]">
            <div>
              Welcome!{" "}
              <span className="text-orange-800">{user.displayName}</span>
            </div>
          </div>
        )}

        <div className="navbar-end">
          {user?.email ? (
            <div className="flex space-x-4">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full md:mr-2"
                  src={user.photoURL}
                  alt=""
                />
                <h3 className="hidden md:flex">{user.email}</h3>
                <div className="ml-4  px-4 pb-[6px] pt-[2px] bg-red-500 text-white rounded-xl">
                  <NavLink onClick={handleSignOut} to="/login">
                    LogOut
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex space-x-4">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `border-2 font-bold px-6 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-md"
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `border-2 font-bold px-6 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-md"
                  }`
                }
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
