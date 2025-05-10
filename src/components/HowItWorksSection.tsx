import React from 'react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Lending Made Easy and Worry-Free
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-owwy-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
              1
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">Create an Agreement</h3>
            <p className="text-gray-600">
              Fill in the details, choose your terms, and create a secure agreement in minutes.
            </p>
          </div>
          <div className="lg:mt-12 bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-owwy-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
              2
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">Send & Sign</h3>
            <p className="text-gray-600">
              Share the agreement directly through WhatsApp for easy e-signature.
            </p>
          </div>
          <div className="lg:mt-24 bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-owwy-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
              3
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">Automatic Reminders</h3>
            <p className="text-gray-600">
              OWWY sends gentle reminders, so you don't have to ask (or beg people who borrowed from you!).
            </p>
          </div>
          <div className="lg:mt-12 bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-owwy-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
              4
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">Track Payments Easily</h3>
            <p className="text-gray-600">
              See every installment, every time, with full transparency.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-owwy-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
              5
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">Get Peace of Mind</h3>
            <p className="text-gray-600">
              Focus on your relationship, not the repayment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;