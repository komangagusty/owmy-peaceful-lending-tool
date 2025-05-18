
import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import WaitlistForm from './WaitlistForm';

const CTASection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-br from-owwy-light to-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            {t.cta.title}
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            {t.cta.desc}
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-10">
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                  ✓
                </div>
                <span>{t.cta.benefits[0]}</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                  ✓
                </div>
                <span>{t.cta.benefits[1]}</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                  ✓
                </div>
                <span>{t.cta.benefits[2]}</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center mb-8">
            <WaitlistForm />
          </div>
          
          <p className="text-lg font-medium text-owwy-primary">
            {t.cta.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
