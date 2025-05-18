
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const handleClick = () => {
    window.open('https://tally.so/r/wvbB1A', '_blank');
  };

  return (
    <header className="bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 py-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="font-display font-bold text-2xl text-owwy-primary">OWWY</div>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#problem" className="text-gray-600 hover:text-owwy-primary transition-colors duration-300">Problem</a>
          <a href="#solution" className="text-gray-600 hover:text-owwy-primary transition-colors duration-300">Solution</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-owwy-primary transition-colors duration-300">How It Works</a>
          <a href="#faq" className="text-gray-600 hover:text-owwy-primary transition-colors duration-300">FAQ</a>
        </nav>
        <Button 
          className="bg-owwy-primary hover:bg-owwy-dark text-white"
          onClick={handleClick}
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
