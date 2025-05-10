
import React from 'react';

const ProblemSection = () => {
  return (
    <section id="problem" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            When Lending to Friends and Family Becomes a Burden
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Helping those you love should feel good, not frustrating. But when you lend money to someone close:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">It's awkward to ask for it back</h3>
            <p className="text-gray-600">
              Requesting your money back from friends or family can be uncomfortable and strain your relationship.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">Repayments are often delayed</h3>
            <p className="text-gray-600">
              Without structure, repayments are easily forgotten or continuously postponed.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">Relationships at risk</h3>
            <p className="text-gray-600">
              Money issues can damage even the strongest bonds between family members and friends.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700">Sound familiar? Frustrated? Yeah! You're not alone.</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
