import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const HowItWorksSection = () => {
  const { t } = useTranslation();
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            {t.howItWorks.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-owwy-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
              1
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">{t.howItWorks.steps[0].title}</h3>
            <p className="text-gray-600">
              {t.howItWorks.steps[0].desc}
            </p>
          </div>
          <div className="lg:mt-12 bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="w-12 h-12 bg-owwy-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
              2
            </div>
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">{t.howItWorks.steps[1].title}</h3>
            <p className="text-gray-600">
              {t.howItWorks.steps[1].desc}
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
            <h3 className="font-display font-medium text-xl mb-3 text-gray-900">{t.howItWorks.steps[4].title}</h3>
            <p className="text-gray-600">
              {t.howItWorks.steps[4].desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;