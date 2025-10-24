import React from 'react';
import toast from 'react-hot-toast';

const BookNowForm = () => {
  const handleBookNow = event => {
    event.preventDefault();
    event.target.reset();
    toast.success('✅ Book successfully!');
  };
  return (
    <div className="hero my-7">
      <div className="hero-content flex-col">
        {/* Left Section (Text) */}
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold text-[#4A2C1D]">Book Now!</h1>
        </div>

        {/* Right Section (Form) */}
        <div className="w-[350px] md:w-[500px] shadow-2xl border border-[#F0DCC2] rounded-2xl">
          <div className="card-body">
            <form onSubmit={handleBookNow}>
              <fieldset className="fieldset">
                <label className="label text-[#4A2C1D]">Email</label>
                <input
                  type="name"
                  name="name"
                  className="input input-bordered w-full border-[#F0DCC2] focus:outline-none focus:ring-2 focus:ring-[#E88743]"
                  placeholder="Your Name"
                />
                <label className="label text-[#4A2C1D]">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full border-[#F0DCC2] focus:outline-none focus:ring-2 focus:ring-[#E88743]"
                  placeholder="Email"
                />
                <button className="btn bg-[#E88743]  text-white mt-4 hover:bg-[#C55C2E]">
                  Book Now
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowForm;
