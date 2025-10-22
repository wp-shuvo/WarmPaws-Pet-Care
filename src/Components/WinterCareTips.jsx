import React from 'react';

const WinterCareTips = () => {
  const tips = [
    {
      id: 1,
      emoji: '🧣',
      title: 'Keep Them Warm Indoors',
      text: 'Pets, like humans, can feel the chill. Ensure they have a warm, cozy place to rest inside your home, away from drafts or cold floors. A soft bed and extra blankets can make all the difference.',
    },
    {
      id: 2,
      emoji: '🐕',
      title: 'Limit Outdoor Time',
      text: 'When it’s freezing outside, limit your pet’s time outdoors. Short walks are fine, but extended exposure to cold can lead to frostbite or hypothermia — especially for small or short-haired breeds.',
    },
    {
      id: 3,
      emoji: '🧤',
      title: 'Dress for the Weather',
      text: 'A snug sweater or jacket helps your pet stay comfortable on chilly walks. Choose breathable materials that keep them warm without overheating.',
    },
    {
      id: 4,
      emoji: '🐾',
      title: 'Protect Those Paws',
      text: 'Snow, ice, and salt can be harsh on your pet’s paws. Always wipe their feet after walks to remove any chemicals or debris, and consider using pet-safe paw balm for added protection.',
    },
  ];

  return (
    <div className="mb-16">
      <div className="mx-auto text-center mb-10 ">
        <h3 className="my-5 text-3xl font-extrabold text-[#4A2C1D] text-center md:my-8 lg:my-12">
          Winter Care Tips for Pets
        </h3>
        <p className="mt-2 text-lg text-[#6A4E3A]  md:my-8 lg:my-12">
          When the temperature drops and the snow begins to fall, our furry
          companions need a little extra care and attention. Winter can be a
          magical season, but it also brings challenges for pets — from freezing
          temperatures to dry air and slippery sidewalks. Here are some
          essential winter care tips to help your pets stay warm, healthy, and
          happy all season long.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-auto">
        {tips.map(tip => (
          <div
            key={tip.id}
            className="bg-white p-6 rounded-2xl shadow-md border border-[#F0DCC2] hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">{tip.emoji}</div>
            <h3 className="text-xl font-semibold text-[#4A2C1D] mb-2">
              {tip.title}
            </h3>
            <p className="text-[#6A4E3A] text-sm leading-relaxed">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
