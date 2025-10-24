import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#814C2A] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-evenly lg:items-center  gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <p>📍 45 Pet Care Avenue, Dhaka, Bangladesh</p>
          <p>📞 +880 1234-567890</p>
          <p>✉️ support@warmpaws.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-gray-200 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-500" />

      <div className="text-center text-sm">
        © {new Date().getFullYear()}{' '}
        <span className="font-semibold">WarmPaws</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
