import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/Authcontext';
import 'animate.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
  const { loginUser, singInWithGoogle } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const naviagte = useNavigate();

  const handleSingIn = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then(result => {
        console.log(result.user);
        event.target.reset();
        toast.success('✅ login successfully!');
        naviagte(location?.state || '/');
      })
      .catch(error => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  // login with gogle
  const handleGoogleSingin = () => {
    singInWithGoogle()
      .then(result => {
        toast('✅ login successfully!');
        console.log(result.user);
        naviagte(location?.state || '/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        {/* Left Section (Text) */}
        <div className="text-center mb-5 animate__animated animate__fadeInDown">
          <h1 className="text-5xl font-bold text-[#4A2C1D] ">Login now!</h1>
        </div>

        {/* Right Section (Form) */}
        <div className="w-[350px] md:w-[500px] shadow-2xl border border-[#F0DCC2] rounded-2xl">
          <div className="card-body">
            <form onSubmit={handleSingIn}>
              <fieldset className="fieldset">
                <label className="label text-[#4A2C1D]">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full border-[#F0DCC2] focus:outline-none focus:ring-2 focus:ring-[#E88743]"
                  placeholder="Email"
                />
                {/* Password */}
                <div className="relative">
                  <label className="label text-[#4A2C1D]">Password</label>
                  <input
                    type={showPass ? 'text' : 'password'}
                    name="password"
                    className="input input-bordered w-full border-[#F0DCC2] focus:outline-none focus:ring-2 focus:ring-[#E88743] z-0"
                    placeholder="Password"
                  />
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 bottom-4 cursor-pointer text-black z-40"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>

                <div className="mt-2 text-left">
                  <Link
                    to="/forgetPassword"
                    className="link link-hover text-[#E88743]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button className="btn bg-[#E88743]  text-white mt-4 hover:bg-[#C55C2E]">
                  Login
                </button>
              </fieldset>
            </form>
            {/* Google logIn Button */}
            <button
              onClick={handleGoogleSingin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            {/*  */}
            <h1 className="mb-20">
              New to our website ? Please{' '}
              <Link className="text-red-600 underline" to="/register">
                Register
              </Link>{' '}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
