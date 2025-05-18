
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const WhySection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-owwy-primary text-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="/images/pinky-promise.png" 
            alt="Pinky promise illustration" 
            className="mx-auto mb-8 w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-lg"
            loading="eager"
          />
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">
            {t.why.title}
          </h2>
          
          <p className="text-xl mb-6">
            {t.why.subtitle}
          </p>
          
          <p className="text-xl mb-12">
            {t.why.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href={t.common.tallyFormUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-owwy-primary hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-medium text-lg">
              {t.common.joinWaitlist}
            </a>
            <a href="#faq" className="bg-transparent border border-white hover:bg-white/10 transition-colors px-8 py-3 rounded-lg font-medium text-lg">
              {t.common.learnMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
