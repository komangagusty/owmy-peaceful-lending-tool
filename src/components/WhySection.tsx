
import React from 'react';

const WhySection = () => {
  return (
    <section className="bg-owwy-primary text-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">
            You Deserve to Feel Good About Helping
          </h2>
          
          <p className="text-xl mb-6">
            You're generous. You're loyal.
          </p>
          
          <p className="text-xl mb-12">
            But even the kindest people need assurance. OWWY makes sure your goodness isn't taken for granted.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="https://tally.so/r/wzO2EM" target="_blank" rel="noopener noreferrer" className="bg-white text-owwy-primary hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-medium text-lg">
              Join the Waitlist
            </a>
            <a href="#faq" className="bg-transparent border border-white hover:bg-white/10 transition-colors px-8 py-3 rounded-lg font-medium text-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
