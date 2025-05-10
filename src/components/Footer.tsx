
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-display font-bold text-2xl text-owwy-primary mb-4">OWWY</div>
            <p className="text-gray-500 max-w-xs">
              Making lending simple, stress-free, and emotionally peaceful.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              &copy; {new Date().getFullYear()} OWWY. All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-owwy-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-owwy-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-500 hover:text-owwy-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-owwy-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-owwy-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-owwy-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-owwy-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
