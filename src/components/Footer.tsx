import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[hsl(270,100%,8%)] py-16 relative">
      <div className="container mx-auto px-6">
        <div className="border-t border-white/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-6">MUSA</h3>
              
              <div className="space-y-3 text-white/80">
                <p>support@musa.app</p>
                <a href="https://musa.app/terms" target="_blank" rel="noopener" className="block hover:text-white transition-colors">
                  Terms and Conditions
                </a>
                <a href="https://musa.app/privacy" target="_blank" rel="noopener" className="block hover:text-white transition-colors">
                  Privacy policy
                </a>
                <a href="https://musa.app/health_policy" target="_blank" rel="noopener" className="block hover:text-white transition-colors">
                  Health Data Privacy Policy
                </a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/musacycle/" 
                target="_blank" 
                rel="noopener"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              
              <a 
                href="https://www.tiktok.com/@musacycle" 
                target="_blank" 
                rel="noopener"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/musa-app" 
                target="_blank" 
                rel="noopener"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-white/50">© 2025 Musa. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Fixed Download Button */}
      <a 
        href="https://apps.apple.com/us/app/musa-cycle-syncing-dragon/id6504586102"
        target="_blank"
        rel="noopener"
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-2xl z-50"
      >
        Download app
      </a>
    </footer>
  );
};

export default Footer;