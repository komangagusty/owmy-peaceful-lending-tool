
import React from 'react';
import WaitlistForm from './WaitlistForm';

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
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-owwy-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  OW
                </div>
                <div className="ml-4">
                  <div className="font-medium">OWWY</div>
                  <div className="text-sm text-gray-500">Peaceful Lending</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
                <div className="text-sm text-gray-600 mb-2">Active Loan</div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Sarah</div>
                    <div className="text-sm text-green-600">On time</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$500</div>
                    <div className="text-sm text-gray-500">Due in 3 days</div>
                  </div>
                </div>
                <div className="mt-3 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="mt-1 text-xs text-gray-500 text-right">75% repaid</div>
              </div>
              
              <div className="text-center text-sm text-gray-500">
                No awkward conversations. No forgotten payments.
              </div>
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
