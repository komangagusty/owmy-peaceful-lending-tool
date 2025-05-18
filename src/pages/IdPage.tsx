import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TranslationProvider } from '../context/TranslationContext';
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

const IdPage = () => (
  <TranslationProvider initialLanguage="id">
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

export default IdPage;
