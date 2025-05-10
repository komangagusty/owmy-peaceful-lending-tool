import React from 'react';
import WaitlistForm from './WaitlistForm';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">
              Lending to Friends and Family Shouldn't Hurt Your Heart
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              OWWY makes lending simple, stress-free, and emotionally peaceful. 
              So you can help without the awkward follow-up.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <WaitlistForm />
            </div>
          </div>
          
          <div className="flex-1 relative animate-fade-in">
            <div className="relative overflow-hidden">
              <img 
                src="/images/diverse-friends-group.png" 
                alt="Diverse group of friends supporting each other"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-owwy-light rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-owwy-accent/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
