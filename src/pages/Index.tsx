import React, { useEffect } from 'react';
import { TranslationProvider } from '../context/TranslationContext';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ProductLineSection from '../components/ProductLineSection';
import AddOnSection from '../components/AddOnSection';
import WhySection from '../components/WhySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to anchor when clicking anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <TranslationProvider initialLanguage="en">
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ProductLineSection />
        <AddOnSection />
        <WhySection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default Index;
