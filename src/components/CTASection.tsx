
import React from 'react';
import WaitlistForm from './WaitlistForm';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-owwy-light to-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Be the First to Experience Peaceful Lending
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            We're rolling out OWWY to a small group first. Join the waitlist and get:
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-10">
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                  ✓
                </div>
                <span>Early access to our beta version</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                  ✓
                </div>
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                  ✓
                </div>
                <span>A chance to shape the future of emotionally safe lending</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center mb-8">
            <WaitlistForm />
          </div>
          
          <p className="text-lg font-medium text-owwy-primary">
            "OWWY: Help Freely, Collect Peacefully."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
