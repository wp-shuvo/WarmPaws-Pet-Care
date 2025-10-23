import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/Authcontext';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Register = () => {
  const { registerUser, errorInvalid, setErrorInvalid } = use(AuthContext);
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
        toast('✅ Account created successfully!');
        event.target.reset();
      })
      .catch(error => {
        console.log(error.message);
        toast(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        {/* Left Section (Text) */}
        <div className="text-center mb-5">
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
                <label className="label text-[#4A2C1D]">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full border-[#F0DCC2] focus:outline-none focus:ring-2 focus:ring-[#E88743]"
                  placeholder="Password"
                />

                <button className="btn bg-[#E88743]  text-white mt-4 hover:bg-[#C55C2E]">
                  Register
                </button>

                {/* Google button */}
                {/* <button className="btn bg-white text-black border-[#e5e5e5]">
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
                </button> */}
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Register;
