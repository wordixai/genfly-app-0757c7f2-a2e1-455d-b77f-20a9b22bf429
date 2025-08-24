import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TransformSection from '../components/TransformSection';
import HabitsSection from '../components/HabitsSection';
import WidgetCarousel from '../components/WidgetCarousel';
import FeatureSection from '../components/FeatureSection';
import DragonCarousel from '../components/DragonCarousel';
import UnlockSection from '../components/UnlockSection';
import AvatarSection from '../components/AvatarSection';
import FinalSection from '../components/FinalSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TransformSection />
      <HabitsSection />
      <WidgetCarousel />
      
      {/* Hormonscope Feature */}
      <FeatureSection
        title="Daily Hormonscope"
        description="Think of it as your daily vibe check—except it's powered by your hormones. Know what's happening inside and how to make it work for you."
        imageSrc="https://framerusercontent.com/images/nC1nqFYwRIXMNpGt4Dd8r4Xa5E.png?scale-down-to=1024"
        imageAlt="Daily Hormonscope"
        stickers={[
          {
            src: "https://framerusercontent.com/images/32QoYrrWvPz0RLsyxo0FwwdBJA.png",
            alt: "Sticker 1",
            className: "-top-12 -right-16 w-28 h-18"
          },
          {
            src: "https://framerusercontent.com/images/iXVtZb7SEzoc9rtCSUfAVmOF8.png",
            alt: "Sticker 2", 
            className: "bottom-1/4 -left-20 w-28 h-4"
          },
          {
            src: "https://framerusercontent.com/images/naXGD1F5YRt2uSpnOLYsvXVxi0.png",
            alt: "Sticker 3",
            className: "-bottom-8 -right-20 w-30 h-24"
          }
        ]}
      />
      
      {/* Science-based Tips Feature */}
      <FeatureSection
        title="Science-based tips for your hormones"
        description="We cracked the code so you don't have to. Get cycle-based tips for food, workouts, and moods—made simple, for you and so easy to actually use."
        imageSrc="https://framerusercontent.com/images/LOMjYAeltxep8ZWysyYZ27b1nc.png?scale-down-to=1024"
        imageAlt="Science-based tips"
        reverse={true}
        stickers={[
          {
            src: "https://framerusercontent.com/images/B9m1ho5wkLQ7KHJWq1W8zhCjM.png",
            alt: "Science Sticker 1",
            className: "-top-8 -left-16 w-30 h-15"
          },
          {
            src: "https://framerusercontent.com/images/NoXXhogXigSyEypS9hmJ8ftYE.png?scale-down-to=512",
            alt: "Science Sticker 2",
            className: "top-1/3 -right-20 w-48 h-32"
          },
          {
            src: "https://framerusercontent.com/images/3q2usgTk00pSL10otPXwQf95sQU.png",
            alt: "Science Sticker 3",
            className: "-bottom-4 -left-12 w-20 h-13"
          },
          {
            src: "https://framerusercontent.com/images/d356sVzGxS9YjiQAwjT6QbtR81Q.png",
            alt: "Science Sticker 4",
            className: "bottom-1/4 -right-16 w-28 h-18"
          }
        ]}
      />
      
      {/* Stress Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative mx-auto max-w-sm">
              <img 
                src="https://framerusercontent.com/images/yLJeJiOlZHHn9HwLpBdIkNxdgsU.gif"
                alt="Stress Animation"
                className="w-full h-auto rounded-3xl"
              />
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Stress and hormones? The ultimate frenemies
              </h2>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                Musa can help you restore hormonal balance with just 3 minutes of practice a day.
              </p>
            </div>
          </div>
          
          {/* Data Privacy Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Your body, your data.
              </h2>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                Founded by women who care about you. You can use anonymously, delete your data any time, and we will NEVER sell it. 
                <span className="font-bold text-gradient"> No surprises here.</span>
              </p>
            </div>
            
            <div className="relative mx-auto max-w-sm">
              <img 
                src="https://framerusercontent.com/images/EGapbIoi2wm0YvpMrQIniFOfc.gif"
                alt="Data Privacy"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <DragonCarousel />
      <UnlockSection />
      <AvatarSection />
      <FinalSection />
      <Footer />
    </div>
  );
};

export default Index;