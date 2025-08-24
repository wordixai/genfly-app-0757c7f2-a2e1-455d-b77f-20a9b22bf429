import React from 'react';

const TransformSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          {/* Floating Stickers */}
          <div className="absolute -top-12 left-1/4 w-16 h-16 floating-sticker">
            <img 
              src="https://framerusercontent.com/images/D8LfvWB1q88uUqAOoJNeZmbavc.png"
              alt="Eyes Sticker"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -top-8 right-1/4 w-12 h-12 floating-sticker">
            <img 
              src="https://framerusercontent.com/images/83YGnw5nLGNiS8lkXR0XTxo.png"
              alt="Panda Sticker"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-8 left-1/3 w-14 h-14 floating-sticker">
            <img 
              src="https://framerusercontent.com/images/QjUViunGk3ZjotlrmvTsNz7d5o.png"
              alt="Avocado Sticker"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-4 right-1/3 w-16 h-18 floating-sticker">
            <img 
              src="https://framerusercontent.com/images/iB5OcfpsfXMxfi0yc6aXkuLxGCs.png"
              alt="Volcano Sticker"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-normal text-white/80 mb-6 leading-tight">
            Transform your menstrual cycle into a source of power, not stress.
          </h2>
          
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Get ready to unlock your cyclical 
            <br />
            <span className="text-gradient">goddess era.</span>
          </h3>
          
          {/* Decorative Underline */}
          <div className="flex justify-center">
            <svg width="171" height="25" viewBox="0 0 171 25" className="opacity-50">
              <path d="M.345 16.2C39.766-6.264 123.706-7.186 171 25l-1.697-.569c-26.6-10.707-47.206-17.58-80.62-20.633-23.331-2.129-64.506 3.446-87.28 13.064 0 0-.805.275-1.245-.057-.441-.332.188-.605.188-.605Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;