
import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';

const images = [
  '/images/product-showcase-1.png',
  '/images/product-showcase-2.png',
  '/images/product-showcase-3.png',
];

const ProductLineSection = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Fade effect for manual navigation only
  const handleNav = (nextIdx: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(nextIdx);
      setFade(true);
    }, 400);
  };
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
        <p className="font-display text-2xl md:text-4xl text-gray-900">
            {t.productLine.title}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            {t.productLine.subtitle}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 feature-card h-full">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-owwy-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-2xl mb-2 text-gray-900">Free Loan (via Qard)</h3>
            </div>
            <p className="text-gray-600 mb-4">
              An interest-free, friendly loan, perfect for family and friends.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <div className="text-sm text-gray-500">
                Shariah-compliant ✓
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 feature-card h-full">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-2xl mb-2 text-gray-900">Profit Financing (via Tawarruq)</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Yes! You can have halal profit for every financing you give, we will arrange it!
            </p>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <div className="text-sm text-gray-500">
                Shariah-compliant ✓
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 feature-card h-full">
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-2xl mb-2 text-gray-900">Existing Loans</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Already lent money? Upload the agreement and let OWWY manage the rest.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <div className="text-sm text-gray-500">
                Shariah-compliant ✓
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">All services are fully Shariah-compliant! Don't worry!</p>
        </div>

        {/* Product Showcase Carousel */}
        <div className="flex flex-col items-center my-16">
          <div className="relative flex items-center justify-center">
            <button
              className="absolute left-0 z-10 bg-white rounded-full shadow p-2 -ml-6 disabled:opacity-30"
              onClick={() => handleNav(current === 0 ? images.length - 1 : current - 1)}
              aria-label="Previous"
              disabled={current === 0}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <div className="max-w-xs w-full p-0 flex flex-col items-center">
              <img src={images[current]} alt={`Product Showcase ${current + 1}`} className={`w-full mb-4 object-contain transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <button
              className="absolute right-0 z-10 bg-white rounded-full shadow p-2 -mr-6 disabled:opacity-30"
              onClick={() => handleNav(current === images.length - 1 ? 0 : current + 1)}
              aria-label="Next"
              disabled={current === images.length - 1}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === current ? 'bg-owwy-primary' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLineSection;
