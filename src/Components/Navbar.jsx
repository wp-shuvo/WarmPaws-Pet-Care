import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext/Authcontext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, singOutUser } = use(AuthContext);

  //SingOut Or LogOut user
  const handleSingOut = () => {
    singOutUser()
      .then(() => {
        toast.success('sing-out succesful.');
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink className="font-semibold text-white" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-white" to="/services">
          Services
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className="font-semibold text-white" to="/myprofile">
            My profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#814C2A] shadow-sm px-4 md:px-10 lg:px-32 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold "
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold text-white">
          WarmPaws
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="relative flex flex-col items-center mr-3.5 group">
          {user && (
            <>
              <img
                className="h-10 w-10 rounded-full border-2 border-[#E88743] group-hover:scale-105 transition-transform duration-200"
                src={user?.photoURL}
                alt="Profile Picture"
              />
              <span className="absolute bottom-[-35px] px-3 py-1 text-[10px] text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user?.displayName}
              </span>
            </>
          )}
        </div>
        {user ? (
          <a
            onClick={handleSingOut}
            className="px-7 py-2 rounded-xl bg-[#E88743] shadow-xl hover:bg-[#bb7440] hover:cursor-pointer font-bold"
          >
            LogOut
          </a>
        ) : (
          <Link
            to="/login"
            className="px-7 py-2 rounded-xl bg-[#E88743] shadow-xl hover:bg-[#bb7440] hover:cursor-pointer font-bold"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
