
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is OWWY Shariah-compliant?",
      answer: "Yes! OWWY is designed with ethical lending principles in mind."
    },
    {
      question: "Do I need legal knowledge to use OWWY?",
      answer: "Not at all. Everything is simplified for you."
    },
    {
      question: "Can I manage existing loans?",
      answer: "Yes, you can upload any existing agreement and let OWWY take over."
    },
    {
      question: "How does OWWY send reminders?",
      answer: "We send polite, customizable reminders through WhatsApp, Email, or SMS. You choose."
    },
    {
      question: "Is my agreement legally binding?",
      answer: "Absolutely. Every agreement is secured with legally valid documentation."
    }
  ];
  
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Questions that are mostly asked!
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
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
