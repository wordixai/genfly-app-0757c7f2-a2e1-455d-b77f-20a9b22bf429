import React from 'react';

const HabitsSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Build a Self-Care habit that sticks
            </h2>
            
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
              <span className="font-bold text-gradient">Stress and bad habits = terrible PMS and cramps.</span>
              {' '}We make self-care habits feel like <strong>a game you </strong>
              <em><strong>actually</strong></em>
              <strong> want to play</strong>, so you can feel good in every phase of your cycle.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <img 
                src="https://framerusercontent.com/images/Y7gmccPVix5ibutunbLvczggqc.png?scale-down-to=1024"
                alt="App Screenshot"
                className="w-full h-auto rounded-3xl"
              />
              
              {/* Floating Stickers around phone */}
              <div className="absolute -top-8 -right-12 w-24 h-32 floating-sticker">
                <img 
                  src="https://framerusercontent.com/images/JTqsXczE29zxpKIotOnGsBAqE94.png"
                  alt="Sticker 1"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-16 w-28 h-14 floating-sticker">
                <img 
                  src="https://framerusercontent.com/images/A2mfDXT0hPxMp0XO4keeQWMLugg.png"
                  alt="Sticker 3"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute top-1/2 -right-20 w-36 h-28 floating-sticker">
                <img 
                  src="https://framerusercontent.com/images/dY1XrjUSYnwa4haMDb6UgNTg3k.webp?scale-down-to=512"
                  alt="Decorative Element"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute bottom-1/4 -left-20 w-32 h-24 floating-sticker">
                <img 
                  src="https://framerusercontent.com/images/my66rkL5TrhjbsIZJbRc8epPwU.webp"
                  alt="Decorative Element 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabitsSection;