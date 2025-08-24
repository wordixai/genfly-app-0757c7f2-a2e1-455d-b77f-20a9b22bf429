import React from 'react';

const UnlockSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(270,100%,15%)] to-[hsl(270,100%,25%)]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Unlock your
          </h2>
          
          <h3 className="text-4xl md:text-6xl font-bold text-gradient mb-8">
            cyclical goddess era
          </h3>
          
          <h4 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-relaxed">
            You're not the same all month—neither are your habits
          </h4>
          
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            We help you create a daily self-care ritual, making it easier to support your hormones through every phase.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;