import React from 'react';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const handleClick = () => {
    toast.success('✅ Send Message successfully!');
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-extrabold text-[#4A2C1D]">Contact Us</h2>
        <p className="mt-3 text-lg text-[#6A4E3A]">
          Have questions or need advice about your pet’s care? We’re here to
          help!
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-black bg-white rounded-2xl shadow-md border border-[#F0DCC2] p-8 lg:p-12">
        <form className="grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#4A2C1D] mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3  border border-[#F0DCC2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E88743]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#4A2C1D] mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-[#F0DCC2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E88743]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#4A2C1D] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+880 123 456 7890"
              className="w-full px-4 py-3 border border-[#F0DCC2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E88743]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#4A2C1D] mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-[#F0DCC2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E88743]"
            ></textarea>
          </div>

          <button
            onClick={handleClick}
            type="button"
            className="w-full bg-[#E88743] text-white py-3 rounded-lg font-semibold hover:bg-[#C55C2E]"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-[#6A4E3A]">
          <p>📍 Location: 45 Pet Care Avenue, Dhaka, Bangladesh</p>
          <p>📞 Phone: +880 1234 567 890</p>
          <p>📧 Email: support@warmpaws.com</p>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
