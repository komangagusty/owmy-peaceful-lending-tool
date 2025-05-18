
import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trackEvent } from '@/lib/firebase';

const FAQSection = () => {
  const { t } = useTranslation();
  const faqs = t.faq.items;
  
  const handleAccordionValueChange = (value: string) => {
    // Only track when an accordion item is expanded (not when collapsed)
    if (value) {
      const index = value.replace('item-', '');
      const questionText = faqs[parseInt(index)].question;
      
      trackEvent('faq_expanded', {
        question_id: index,
        question_text: questionText,
        section: 'faq'
      });
    }
  };
  
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            {t.faq.title}
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            onValueChange={handleAccordionValueChange}
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
