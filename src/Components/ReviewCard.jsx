import React from 'react';
import reviews from '../../data/reviews.json';

export default function ReviewCard() {
  return (
    <div className="bg-[#FFF7EC] mt-14">
      <div className="mx-auto max-w-7xl px-4">
        {' '}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#4A2C1D]">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-lg text-[#6A4E3A]">
            Real stories from pet owners who trust our winter care services.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map(r => (
            <div
              key={r.id}
              className="p-6 bg-white shadow rounded-xl border border-[#F0DCC2] hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-[#4A2C1D]">{r.name}</h4>
                  <p className="text-sm text-[#6A4E3A]">Owner of {r.petName}</p>
                </div>
              </div>

              <p className="text-[#6A4E3A] mb-3">{r.review}</p>

              <div className="flex text-[#E88743] text-lg">
                {'★'.repeat(r.rating)}
                {'☆'.repeat(5 - r.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
