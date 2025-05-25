
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const ProblemSection = () => {
  const { t } = useTranslation();
  return (
    <section id="problem" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="font-display text-2xl md:text-4xl text-gray-900">
            {t.problem.title}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            {t.problem.subtitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mt-12">
          {t.problem.familiar}
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">{t.problem.points[0]}</h3>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">{t.problem.points[1]}</h3>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">{t.problem.points[2]}</h3>
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
