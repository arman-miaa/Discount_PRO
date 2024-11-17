import { Link, NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdBrandingWatermark } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";

const Header = () => {

    const links = (
      <>
        <li>
          <NavLink to='/'>
            <IoIosHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/brands'>
            <MdBrandingWatermark /> Brands
          </NavLink>
        </li>
        <li>
          <NavLink to='/myProfile'>
            <RiProfileFill /> My-Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/aboutDev'>
            <FcAbout /> About Dev
          </NavLink>
        </li>
      </>
    );
    
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Discount PRO</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
                    <div className="flex space-x-4">
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/register'>Register</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;