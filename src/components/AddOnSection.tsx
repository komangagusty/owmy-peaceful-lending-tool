
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const AddOnSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
        <p className="font-display text-2xl md:text-4xl text-gray-900">
            {t.addOn.title}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            {t.addOn.subtitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.addOn.desc}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.addOn.points.map((addon, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 feature-card">
              <div className="text-3xl mb-4">{addon.icon}</div>
              <h3 className="font-display font-medium text-lg mb-2 text-gray-900">
                {t.addOn.points[index].title}
              </h3>
              <p className="text-gray-600">
                {t.addOn.points[index].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnSection;
