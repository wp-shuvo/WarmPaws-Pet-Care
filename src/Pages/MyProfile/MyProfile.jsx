import React, { use } from 'react';
import { Link } from 'react-router';

import { AuthContext } from '../../Context/AuthContext/Authcontext';
import { FaUserTimes } from 'react-icons/fa';

const MyProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="mx-auto w-[350px] md:w-[500px]  ">
      <h1 className="text-2xl font-bold text-center mt-10 text-[#4A2C1D]">
        Welcome To Your Profile, {user?.displayName}
      </h1>

      <div className="flex flex-col justify-center items-center mt-10 border-2 border-[#F0DCC2] px-5 py-10 rounded-2xl shadow-md bg-white">
        <div className="border-4 border-[#E88743] rounded-full p-1">
          {user ? (
            <img
              className="h-36 w-36 rounded-full object-cover"
              src={user?.photoURL}
              alt="Profile Picture"
            />
          ) : (
            <FaUserTimes className="text-4xl text-[#C55C2E]" />
          )}
        </div>

        <h1 className="text-xl font-semibold text-[#4A2C1D] mt-8">
          Name: <span className="text-[#6A4E3A]">{user?.displayName}</span>
        </h1>

        <h1 className="text-xl font-semibold text-[#4A2C1D]">
          Email: <span className="text-[#6A4E3A]">{user?.email}</span>
        </h1>

        <Link
          to="/updateprofile"
          className="btn w-full mt-8 bg-[#E88743] text-white font-bold hover:bg-[#C55C2E] border-none flex items-center justify-center gap-2"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
