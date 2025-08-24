import React from 'react';

const DragonCarousel: React.FC = () => {
  const dragons = [
    {
      id: 1,
      src: "https://framerusercontent.com/images/kY5FyiE00ILG7rLs5TqRH6yY.png",
      alt: "Water Dragon"
    },
    {
      id: 2,
      src: "https://framerusercontent.com/images/RFRtayMKfwPT0eqsynAeFP4ZM.png",
      alt: "Air Dragon"
    },
    {
      id: 3,
      src: "https://framerusercontent.com/images/XjBXwXxgWGwNXEHG30EDVvsXVU.png",
      alt: "Fire Dragon"
    },
    {
      id: 4,
      src: "https://framerusercontent.com/images/zo9xhctfO2rUUhYk8enSy1MEPU4.png",
      alt: "Earth Dragon"
    }
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="relative">
        <div className="flex infinite-scroll gap-8">
          {/* First set */}
          <div className="flex gap-8 shrink-0">
            {dragons.map((dragon) => (
              <div key={dragon.id} className="w-64 h-72 shrink-0">
                <img
                  src={dragon.src}
                  alt={dragon.alt}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless scroll */}
          <div className="flex gap-8 shrink-0">
            {dragons.map((dragon) => (
              <div key={`${dragon.id}-duplicate`} className="w-64 h-72 shrink-0">
                <img
                  src={dragon.src}
                  alt={dragon.alt}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[hsl(var(--purple-gradient-start))] to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[hsl(var(--purple-gradient-end))] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default DragonCarousel;