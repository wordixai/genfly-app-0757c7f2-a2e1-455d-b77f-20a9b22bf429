import React from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  stickers?: Array<{
    src: string;
    alt: string;
    className: string;
  }>;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  stickers = []
}) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {title}
            </h2>
            
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
            <div className="relative mx-auto max-w-sm">
              <img 
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded-3xl"
              />
              
              {/* Dynamic Stickers */}
              {stickers.map((sticker, index) => (
                <div key={index} className={`absolute floating-sticker ${sticker.className}`}>
                  <img 
                    src={sticker.src}
                    alt={sticker.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;