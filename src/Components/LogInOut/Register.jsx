import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/Authcontext';
import 'animate.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Register = () => {
  const { registerUser, errorInvalid, setErrorInvalid, setUser } =
    use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const naviagte = useNavigate();

  const handleRegister = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const ptotoUrl = event.target.photoUrl.value;
    const password = event.target.password.value;

    console.log(name, ptotoUrl);
    if (password.length < 6) {
      setErrorInvalid('Password at least 6 carecter');
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    if (!passwordRegex.test(password)) {
      setErrorInvalid(
        'Password at least one Upparcase Letter , one LowerCase Letter '
      );
      return;
    }

    registerUser(email, password)
      .then(result => {
        console.log(result.user);
        setErrorInvalid('');
        toast.success('✅ Account created successfully!');
        setUser({
          ...result.user,
          displayName: name,
          photoURL: ptotoUrl,
        });
        event.target.reset();
        naviagte(location?.state || '/');
      })
      .catch(error => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        {/* Left Section (Text) */}
        <div className="text-center mb-5 animate__animated animate__fadeInDown">
          <h1 className="text-5xl font-bold text-[#4A2C1D]">
            Register Your Account
          </h1>
        </div>

        {/* Right Section (Form) */}
        <div className="w-[350px] md:w-[500px] shadow-2xl border border-[#F0DCC2] rounded-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Name field ==>> */}
                <label className="label text-[#4A2C1D]">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full border-[#F0DCC2] focus:outline-none focus:ring-2 focus:ring-[#E88743]"
                  placeholder="Your Name"
                />
                {/* Email field ==>> */}
                <label className="label text-[#4A2C1D]">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full border-[#F0DCC2] focus:outline-none focus:ring-2 focus:ring-[#E88743]"
                  placeholder="Yourmail@gmail.com"
                />
                {/* Photo-URL field ==>> */}
                <label className="label text-[#4A2C1D]">Photo-URL</label>
                <input
                  type="text"
                  name="photoUrl"
                  className="input input-bordered w-full border-[#F0DCC2] focus:outline-none focus:ring-2 focus:ring-[#E88743]"
                  placeholder="Photo-URL"
                />
                {/* Password field ==>> */}
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

                <button className="btn bg-[#E88743]  text-white mt-4 hover:bg-[#C55C2E]">
                  Register
                </button>
              </fieldset>
            </form>
            <h1>
              {' '}
              Already Have an account ? Please{' '}
              <Link className="text-red-600 underline" to="/login">
                {' '}
                Login{' '}
              </Link>{' '}
            </h1>
            <h1 className="my-2 text-red-600 text-left">{errorInvalid} </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
