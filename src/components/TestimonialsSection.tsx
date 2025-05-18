
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            {t.testimonials.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-owwy-accent rounded-full flex items-center justify-center font-bold text-white">
                F
              </div>
              <div className="ml-4">
                <div className="font-display font-medium text-lg">{t.testimonials.items[0].name}</div>
                <div className="text-sm text-gray-500">{t.testimonials.items[0].role}</div>
              </div>
            </div>
            
            <blockquote className="text-gray-700 italic mb-4">
              {t.testimonials.items[0].quote}
            </blockquote>
            
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star}
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-owwy-primary rounded-full flex items-center justify-center font-bold text-white">
                A
              </div>
              <div className="ml-4">
                <div className="font-display font-medium text-lg">{t.testimonials.items[1].name}</div>
                <div className="text-sm text-gray-500">{t.testimonials.items[1].role}</div>
              </div>
            </div>
            
            <blockquote className="text-gray-700 italic mb-4">
              {t.testimonials.items[1].quote}
            </blockquote>
            
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star}
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
