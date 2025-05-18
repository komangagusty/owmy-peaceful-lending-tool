
import React from 'react';
import { TrackingButton } from "@/components/ui/tracking-button";
import { useTranslation } from '../context/TranslationContext';
import { trackEvent } from '@/lib/firebase';

const Navbar = () => {
  const { t } = useTranslation();

  const handleNavBarItemClick = (itemName: string, url: string) => {
    trackEvent("navbar_item_click", {
      location: "navbar",
      item_name: itemName,
      link_url: url
    });
  };
  
  const handleClick = () => {
    window.open(t.common.tallyFormUrl, '_blank');
  };

  return (
    <header className="bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 py-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="font-display font-bold text-2xl text-owwy-primary">OWWY</div>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#problem" 
            className="text-gray-600 hover:text-owwy-primary transition-colors duration-300"
            onClick={() => handleNavBarItemClick("problem", "#problem")}
          >
            Problem
          </a>
          <a 
            href="#solution" 
            className="text-gray-600 hover:text-owwy-primary transition-colors duration-300"
            onClick={() => handleNavBarItemClick("solution", "#solution")}
          >
            Solution
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-600 hover:text-owwy-primary transition-colors duration-300"
            onClick={() => handleNavBarItemClick("how_it_works", "#how-it-works")}
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            className="text-gray-600 hover:text-owwy-primary transition-colors duration-300"
            onClick={() => handleNavBarItemClick("faq", "#faq")}
          >
            FAQ
          </a>
        </nav>
        <TrackingButton 
          id="navbar_join_waitlist" 
          additionalData={{ 
            location: "navbar",
            user_type: "visitor",
            tally_url: t.common.tallyFormUrl,
          }}
          className="bg-owwy-primary hover:bg-owwy-dark text-white"
          onClick={handleClick}
        >
          {t.common.joinWaitlist}
        </TrackingButton>
      </div>
    </header>
  );
};

export default Navbar;
