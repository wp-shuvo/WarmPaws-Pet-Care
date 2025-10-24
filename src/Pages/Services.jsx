import React from 'react';
import { Link, useLoaderData } from 'react-router';
import BookNowForm from '../Components/BookNowForm';

const Services = () => {
  const data = useLoaderData();
  const {
    serviceId,
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    description,
    image,
    category,
    slotsAvailable,
  } = data;
  console.log(serviceId);
  return (
    <div>
      <div className="w-full flex justify-center items-center py-8">
        <div
          key={serviceId}
          className="bg-white rounded-2xl overflow-hidden border border-[#F0DCC2] hover:shadow-lg transition w-[90%] md:w-[80%] lg:w-[70%] flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 w-full flex justify-center rounded-2xl">
            <img
              src={image}
              alt={serviceName}
              className="w-full md:w-[90%] h-auto object-cover rounded-2xl p-4"
            />
          </div>

          <div className="md:w-1/2 w-full p-6 text-left">
            <h3 className="text-2xl font-semibold text-[#4A2C1D] mb-2">
              {serviceName}
            </h3>
            <p className="text-[#6A4E3A] font-medium mb-2">
              Provider: {providerName}
            </p>
            <p className="text-[#6A4E3A] font-medium mb-2">
              Email: {providerEmail}
            </p>
            <p className="text-[#6A4E3A] font-medium mb-2">
              Category: {category}
            </p>
            <p className="text-[#6A4E3A] font-medium mb-2">
              Slots Available: {slotsAvailable}
            </p>
            <p className="text-[#6A4E3A] font-medium mb-3">
              Rating: ⭐ {rating} / 5
            </p>
            <p className="text-lg font-bold text-[#E88743] mb-4">
              Price: ${price}
            </p>

            <p className="text-[#6A4E3A] mb-4">{description}</p>

            <Link to={`/services/${serviceId}`}>
              <button className="w-full bg-[#E88743] text-white py-2 rounded-lg font-medium hover:bg-[#C55C2E] transition">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <BookNowForm />
    </div>
  );
};

export default Services;
