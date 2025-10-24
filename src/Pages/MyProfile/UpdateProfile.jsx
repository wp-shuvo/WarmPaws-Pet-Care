import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/Authcontext';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
  const { updateUserProfile, setLoader } = useContext(AuthContext);
  // const location = useLocation();
  const naviagte = useNavigate();

  const handleUpdateProfile = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateUserProfile(name, photoUrl)
      .then(result => {
        naviagte('/myprofile');
        toast.success('Update Profile successfully!');
        setLoader(false);
      })
      .catch(error => {
        console.log('Error from updateProfile', error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-[#F0DCC2] rounded-2xl shadow-lg p-8">
        <h1 className="text-center text-3xl font-bold text-[#4A2C1D] mb-6">
          Update Your Profile
        </h1>

        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#4A2C1D] mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-[#F0DCC2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E88743]"
              name="name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#4A2C1D] mb-2">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 border border-[#F0DCC2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E88743]"
              name="photoUrl"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E88743] text-white py-3 rounded-lg font-semibold hover:bg-[#C55C2E] transition"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
