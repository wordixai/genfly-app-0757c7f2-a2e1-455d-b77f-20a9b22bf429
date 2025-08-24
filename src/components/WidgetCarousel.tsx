import React from 'react';

const WidgetCarousel: React.FC = () => {
  const widgets = [
    {
      id: 1,
      src: "https://framerusercontent.com/images/UDM3K3B9KLeX6HQyVneJbljM.png?scale-down-to=512",
      alt: "Widget 1"
    },
    {
      id: 2,
      src: "https://framerusercontent.com/images/nlCYdbjAxDl4gyer7aZFnY9V4U.png",
      alt: "Widget 2"
    },
    {
      id: 3,
      src: "https://framerusercontent.com/images/y5nJHBp4ejyPjhDwh47YudbWhDI.png?scale-down-to=512",
      alt: "Widget 3"
    },
    {
      id: 4,
      src: "https://framerusercontent.com/images/GJmI70Ro6dYR5Axow5TT10O7De8.png?scale-down-to=512",
      alt: "Widget 4"
    },
    {
      id: 5,
      src: "https://framerusercontent.com/images/8szAzo3yJu7GhSoIGc2TioYhgJo.png?scale-down-to=512",
      alt: "Widget 5"
    }
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="relative">
        <div className="flex infinite-scroll gap-6">
          {/* First set */}
          <div className="flex gap-6 shrink-0">
            {widgets.map((widget) => (
              <div key={widget.id} className="w-40 h-40 shrink-0">
                <img
                  src={widget.src}
                  alt={widget.alt}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless scroll */}
          <div className="flex gap-6 shrink-0">
            {widgets.map((widget) => (
              <div key={`${widget.id}-duplicate`} className="w-40 h-40 shrink-0">
                <img
                  src={widget.src}
                  alt={widget.alt}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[hsl(var(--purple-gradient-start))] to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[hsl(var(--purple-gradient-end))] to-transparent pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center mt-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-8">
          Meet Musa, your self-care dragon.
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-2">Habits?</h4>
            <p className="text-lg text-white">Handled</p>
            <p className="text-lg">✨</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-2">Dragons?</h4>
            <p className="text-lg text-white">Collectable</p>
            <p className="text-lg">🐉</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-2">Self-care?</h4>
            <p className="text-lg text-white">On point</p>
            <p className="text-lg">👑</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WidgetCarousel;