
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const SolutionSection = () => {
  const { t } = useTranslation();
  return (
    <section id="solution" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
        <p className="font-display text-2xl md:text-4xl text-gray-900">
            {t.solution.title}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            {t.solution.subtitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.solution.desc}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-display font-semibold text-xl mb-2">{t.solution.points[0].title}</h3>
                <p className="text-gray-600">
                  {t.solution.points[0].desc}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-display font-semibold text-xl mb-2">{t.solution.points[1].title}</h3>
                <p className="text-gray-600">
                  {t.solution.points[1].desc}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-display font-semibold text-xl mb-2">{t.solution.points[2].title}</h3>
                <p className="text-gray-600">
                  {t.solution.points[2].desc}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-display font-semibold text-xl mb-2">{t.solution.points[3].title}</h3>
                <p className="text-gray-600">
                  {t.solution.points[3].desc}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card md:col-span-2">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-display font-semibold text-xl mb-2">{t.solution.points[4].title}</h3>
                <p className="text-gray-600">
                  {t.solution.points[4].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
