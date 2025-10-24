import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const ServicesHome = () => {
  const [services, setServices] = useState([]);

  // Load data

  useEffect(() => {
    fetch('./serviecs.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Failed to load services:', err));
  }, []);

  return (
    <div className="mb-7">
      <div className="mx-auto text-center mt-8 mb-10">
        <h2 className="text-4xl font-bold text-[#4A2C1D] mb-2">
          Popular Winter Care Services
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <div
            key={service.serviceId}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#F0DCC2] hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full rounded-xl  p-5"
            />

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-[#4A2C1D] mb-2">
                {service.serviceName}
              </h3>

              <p className="text-[#6A4E3A] mb-3">⭐ {service.rating} / 5</p>

              <p className="text-lg font-bold text-[#E88743] mb-4">
                ${service.price}
              </p>
              <Link to={`/services/${service.serviceId}`}>
                <button className="w-full bg-[#E88743] text-white py-2 rounded-lg font-medium hover:bg-[#C55C2E] transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHome;
