import React from 'react';
import { Link } from 'react-router';

const experts = [
  {
    id: 1,
    name: 'Dr. Ayesha Rahman',
    title: 'Veterinarian & Small Animal Surgeon',
    img: 'https://i.ibb.co.com/gZYdQ1fS/vet1.jpg',
    bio: 'Specializes in surgical care and senior pet wellness. Passionate about pain management and gentle handling.',
    specialties: ['Surgery', 'Senior Care'],
  },
  {
    id: 2,
    name: 'Dr. Farzana Karim',
    title: 'Veterinary Dermatologist',
    img: 'https://i.ibb.co.com/wZ1SmwPX/vet2.jpg',
    bio: 'Focused on skin and coat health, allergies, and nutraceutical approaches for winter skin protection.',
    specialties: ['Dermatology', 'Allergies', 'Nutrition'],
  },
  {
    id: 3,
    name: 'Dr. Nabila Chowdhury',
    title: 'Behavior & Rehabilitation Specialist',
    img: 'https://i.ibb.co.com/CsH1hWD4/vet3.jpg',
    bio: 'Helps pets adapt to seasonal routine changes with enrichment and gentle rehabilitation plans.',
    specialties: ['Behavior', 'Rehab', 'Enrichment'],
  },
  {
    id: 4,
    name: 'Dr. Samira Hasan',
    title: 'Preventive Care & Nutrition',
    img: 'https://i.ibb.co.com/4Z1ykxD5/vet4.jpg',
    bio: 'Advocates preventive medicine, vaccination plans, and diet adjustments for colder months.',
    specialties: ['Preventive Care', 'Vaccination', 'Diet'],
  },
];

const MeetOurVets = () => {
  return (
    <div>
      <div className="mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-[#4A2C1D]">
            Meet Our Expert Vets
          </h2>
          <p className="mt-2 text-lg text-[#6A4E3A] mx-auto">
            A friendly team of veterinarians dedicated to keeping your pets
            safe, warm, and healthy during winter.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {experts.map(e => (
            <article
              key={e.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#F0DCC2]"
            >
              <div className="relative">
                <img
                  src={e.img}
                  alt={`${e.name} portrait`}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute -bottom-6 left-4">
                  <div className="w-16 h-16 rounded-full ring-4 ring-white overflow-hidden shadow-lg">
                    <img
                      src={e.img}
                      alt={`${e.name} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 px-5 pb-6">
                <h3 className="text-xl font-semibold text-[#4A2C1D]">
                  {e.name}
                </h3>
                <p className="text-sm text-[#C55C2E] font-medium mt-1">
                  {e.title}
                </p>

                <p className="mt-3 text-sm text-[#6A4E3A]">{e.bio}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {e.specialties.map(s => (
                    <span
                      key={s}
                      className="text-xs bg-[#FFF7EC] text-[#C55C2E] px-2 py-1 rounded-full border border-[#F0DCC2]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    to="/contactus"
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg bg-[#E88743] text-white shadow-sm hover:bg-[#C55C2E]"
                  >
                    Contact
                  </Link>

                  <div className="flex items-center gap-3">
                    <button
                      aria-label={`Call ${e.name}`}
                      className="p-2 rounded-lg border border-[#F0DCC2] hover:bg-[#FFF7EC]"
                    >
                      <svg
                        className="h-5 w-5 text-[#6A4E3A]"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5h2l.4 2M7 10h10l1 5H6l1-5zm5 8a2 2 0 100-4 2 2 0 000 4z"
                        />
                      </svg>
                    </button>

                    <button
                      aria-label={`Message ${e.name}`}
                      className="p-2 rounded-lg border border-[#F0DCC2] hover:bg-[#FFF7EC]"
                    >
                      <svg
                        className="h-5 w-5 text-[#6A4E3A]"
                        fill="currentColor"
                      >
                        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H7l-5 3V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#6A4E3A]">
            Need help choosing the right winter care for your pet?{' '}
            <Link to="/contactus" className="font-semibold text-[#C55C2E]">
              Contact our team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetOurVets;
