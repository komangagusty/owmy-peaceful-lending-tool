
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
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="ml-3 font-semibold text-lg">Loan Agreement</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-medium">$2,000</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">Qard (interest-free)</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">6 months</span>
                </div>
                
                <div className="border-t border-gray-200 my-3 pt-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-gray-600">Next payment:</div>
                      <div className="font-medium">$333 on July 15</div>
                    </div>
                    <button className="bg-owwy-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-owwy-dark transition-colors">
                      Send Reminder
                    </button>
                  </div>
                </div>
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
