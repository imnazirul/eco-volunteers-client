import { Link, NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./Navbar.css";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import useAuth from "../../CustomHooks/useAuth";
import { Tooltip } from "react-tooltip";
import { IoIosArrowDown } from "react-icons/io";
import { FaDonate } from "react-icons/fa";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const themeMode = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", themeMode);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navLinks = (
    <>
      <span className="hover:text-[#3d52a0] ">
        <NavLink className="px-4 py-2 rounded-lg" to="/">
          Home
        </NavLink>
      </span>{" "}
      <span className="hover:text-[#3d52a0]">
        <NavLink className="px-4 py-2 rounded-lg" to="/need_volunteer">
          Need Volunteer
        </NavLink>
      </span>
      {user && (
        <>
          {" "}
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="  cursor-pointer hover:text-[#3d52a0]"
            >
              My Profile
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-50 menu p-3 shadow bg-base-100 rounded-box w-52 font-semibold border space-y-2"
            >
              <li>
                <NavLink to="/add_volunteer_post">Add Volunteer Post</NavLink>
              </li>
              <li>
                <NavLink to="/manage_post">Manage My Post</NavLink>
              </li>
              <li>
                <NavLink to="/donationHistory">Donation History</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
      {!user && (
        <>
          {" "}
          <span className="hover:text-[#3d52a0]">
            <NavLink className="px-4 py-2 rounded-lg" to="/login">
              Login
            </NavLink>
          </span>
          <span className="hover:text-[#3d52a0]">
            <NavLink className="px-4 py-2 rounded-lg" to="/register">
              Register
            </NavLink>
          </span>{" "}
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center item-center">
      <div className="navbar px-5 lg:px-10 fixed backdrop-blur-xl container  z-50 mx-auto font-poppins   justify-between">
        <div className="md:navbar-start  items-center">
          <div className="dropdown z-20">
            <div tabIndex={0} role="button" className=" btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            <div
              tabIndex={0}
              className=" menu menu-sm gap-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-secondary-1 py-5 md:text-lg md:py-7 "
            >
              <span className="hover:text-[#3d52a0] ">
                <NavLink className="px-4 py-2 rounded-lg" to="/">
                  Home
                </NavLink>
              </span>{" "}
              <span className="hover:text-[#3d52a0]">
                <NavLink className="px-4 py-2 rounded-lg" to="/need_volunteer">
                  Need Volunteer
                </NavLink>
              </span>
              {user && (
                <>
                  {" "}
                  <div className="dropdown  dropdown-bottom">
                    <div className="pl-4 flex gap-1 items-center">
                      <h1>My Profile</h1>
                      <IoIosArrowDown className="text-lg"></IoIosArrowDown>
                    </div>
                    <ul
                      tabIndex={0}
                      className="-ml-[9px] border border-secondary-1 border-t-0 pl-8 dropdown-content z-50 menu p-3  bg-base-100 rounded-b-xl w-52 font-semibold  space-y-2 pb-4"
                    >
                      <li>
                        <NavLink to="/add_volunteer_post">
                          Add Volunteer Post
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/manage_post">Manage My Post</NavLink>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {!user && (
                <>
                  {" "}
                  <span className="hover:text-[#3d52a0]">
                    <NavLink className="px-4 py-2 rounded-lg" to="/login">
                      Login
                    </NavLink>
                  </span>
                  <span className="hover:text-[#3d52a0]">
                    <NavLink className="px-4 py-2 rounded-lg" to="/register">
                      Register
                    </NavLink>
                  </span>{" "}
                </>
              )}
            </div>
          </div>
          <Link
            to="/"
            className="text-xl md:text-2xl btn-ghost font-jost flex gap-0 lg:text-2xl font-bold text-secondary-1"
          >
            <div className="flex md:ml-2 md:gap-1 items-center">
              ECO <span className="hidden md:flex">Volunteers</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 font flex gap-5 text-[16px]">
            {navLinks}
          </div>
        </div>
        <label className="swap ml-3 md:ml-8 swap-rotate">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="theme-controller"
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-8 h-8 md:w-10 md:h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-7 h-7 md:w-8 md:h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <Link to="/donate">
          {" "}
          <button className="btn ml-3 md:ml-5 max-sm:btn-sm bg-green-500 border-2 border-green-500 text-white hover:bg-white hover:text-green-500 hover:border-green-500">
            <FaDonate className="text-xl"></FaDonate>
            <span className="hidden md:flex">Donate</span>
          </button>
        </Link>{" "}
        <div className="navbar-end flex md:gap-5 items-center">
          {loading ? (
            <>
              <span className="loading loading-spinner loading-md"></span>
            </>
          ) : user ? (
            <div className="flex items-center gap-1">
              <a>
                <div
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName && user.displayName}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <Tooltip
                    style={{ backgroundColor: "#3d52a0", borderRadius: "10px" }}
                    className="z-50 "
                    id="my-tooltip"
                    place="left"
                  />
                </div>
              </a>
              <button
                onClick={handleSignOut}
                className="max-sm:btn-sm bg-green-1000 btn bg-secondary-1 text-[#FCFCFC] font-bold hover:bg-secondary-1 border-none"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="max-sm:btn-sm bg-green-1000 btn bg-secondary-1 text-[#FCFCFC] font-bold flex items-center gap-1 hover:bg-secondary-1 border-none"
            >
              <FiLogIn></FiLogIn>Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
