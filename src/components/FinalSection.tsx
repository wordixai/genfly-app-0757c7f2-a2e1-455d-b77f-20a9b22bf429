import React from 'react';

const FinalSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              <img 
                src="https://framerusercontent.com/images/WPrHdI3JBseldEkovUl8bTRpU.png?scale-down-to=512"
                alt="Baby Dragon"
                className="w-full h-auto"
              />
              
              {/* Floating Stickers */}
              <div className="absolute -top-8 -left-12 w-16 h-18 floating-sticker">
                <img 
                  src="https://framerusercontent.com/images/bDaSvII8uaalaaWQ55igogmrTY.png"
                  alt="Sticker 5"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute top-1/4 -right-16 w-20 h-16 floating-sticker">
                <img 
                  src="https://framerusercontent.com/images/awBXpAEAFxwoQwqTyDrl2M0akfs.png"
                  alt="Sticker 4"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute bottom-1/4 -left-16 w-18 h-20 floating-sticker">
                <img 
                  src="https://framerusercontent.com/images/mzNVa3oV8I1t2NrYw8e34dApc8w.png"
                  alt="Sticker 3"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-12 w-16 h-12 floating-sticker">
                <img 
                  src="https://framerusercontent.com/images/uZxVZyHK51ymFUcidR7tNWF9U.png"
                  alt="Sticker 2"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -top-12 -left-16 w-16 h-18 floating-sticker">
                <img 
                  src="https://framerusercontent.com/images/j5IY5X8avfUaoF2uRluLWOIvV9Q.png"
                  alt="Sticker 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Not just another period tracker…
            </h2>
            
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
              We're not just tracking—we help you turn self-care into a daily ritual. 
              <strong> Let's get your hormones working </strong>
              <em><strong>with</strong></em>
              <strong> you, not against you.</strong>
            </p>
            
            <p className="text-2xl md:text-3xl font-black text-gradient">
              It's next-level cycle care, and it's all yours
            </p>
            
            {/* Decorative Underline */}
            <div className="mt-4">
              <svg width="171" height="25" viewBox="0 0 171 25" className="opacity-50">
                <path d="M.345 16.2C39.766-6.264 123.706-7.186 171 25l-1.697-.569c-26.6-10.707-47.206-17.58-80.62-20.633-23.331-2.129-64.506 3.446-87.28 13.064 0 0-.805.275-1.245-.057-.441-.332.188-.605.188-.605Z" fill="#FEFE67"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;