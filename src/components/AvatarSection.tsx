import React from 'react';

const AvatarSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Bring your inner goddess to life
            </h2>
            
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              Create your own avatar in Musa and step into your cyclical power—
              <span className="text-gradient"> your goddess era starts now!</span>
            </p>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <img 
                src="https://framerusercontent.com/images/093igWRwWEx4Z8VxcGobHc7hU7I.gif?scale-down-to=512"
                alt="Avatar Transformation"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarSection;