import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            MUSA
          </div>
          <a 
            href="https://apps.apple.com/us/app/musa-cycle-syncing-dragon/id6504586102"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Download app
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;