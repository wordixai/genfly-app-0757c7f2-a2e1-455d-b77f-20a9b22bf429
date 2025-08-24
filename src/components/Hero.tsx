import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              MUSA
            </h1>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            PMS and cramps suck?
          </h2>
          
          <h3 className="text-5xl md:text-8xl font-black text-gradient mb-12">
            I got you
          </h3>
          
          {/* Dragon Character */}
          <div className="relative mx-auto mb-16 max-w-md">
            <img 
              src="https://framerusercontent.com/images/ntnwvaujmyoFa18Cv0SPkaRVws.png?scale-down-to=1024"
              alt="Musa Dragon"
              className="w-full h-auto"
            />
            
            {/* Floating Stickers */}
            <div className="absolute -top-8 -left-8 w-16 h-16 floating-sticker">
              <img 
                src="https://framerusercontent.com/images/0RKMso5BQwuEJvqNOTB9OKz5GSQ.png"
                alt="Shoe Sticker"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-4 -right-12 w-20 h-16 floating-sticker">
              <img 
                src="https://framerusercontent.com/images/D8LfvWB1q88uUqAOoJNeZmbavc.png"
                alt="Eyes Sticker"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 -left-12 w-14 h-14 floating-sticker">
              <img 
                src="https://framerusercontent.com/images/9XDgdKnLCjrMtfdP171gR6QIwdw.png"
                alt="Brain Sticker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;