import React, { createContext, useContext, useState, ReactNode } from 'react';
import { en } from '../locales/en';
import { id } from '../locales/id';

type Language = 'en' | 'id';

const translations = { en, id };

interface TranslationContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider = ({ children, initialLanguage = 'en' }: { children: ReactNode; initialLanguage?: Language }) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const t = translations[language];
  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error('useTranslation must be used within a TranslationProvider');
  return context;
};
