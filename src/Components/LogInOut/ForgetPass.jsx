import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/Authcontext';

function ForgetPass() {
  const { forgetPassword } = useContext(AuthContext);

  const handleForgetPass = e => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      console.log('Please provide an email address.');
      return;
    }

    forgetPassword(email)
      .then(res => {
        console.log('Password reset email sent successfully:', res);
        alert('Password reset email sent! Please check your inbox.');
        e.target.reset(); // Clear the form after successful submission
      })
      .catch(error => {
        console.error('Error sending password reset email:', error);
        alert('Failed to send password reset email. Please try again.');
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        {/* Left Section (Text) */}
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold text-[#4A2C1D]">Reset Password</h1>
        </div>

        {/* Right Section (Form) */}
        <div className="w-[350px] md:w-[500px] shadow-2xl border border-[#F0DCC2] rounded-2xl">
          <div className="card-body">
            <form onSubmit={handleForgetPass}>
              <fieldset className="fieldset">
                <label className="label text-[#4A2C1D]">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full border-[#F0DCC2] focus:outline-none focus:ring-2 focus:ring-[#E88743]"
                  placeholder="Email"
                />
                <button className="btn bg-[#E88743]  text-white mt-4 hover:bg-[#C55C2E]">
                  Reset Password
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;
