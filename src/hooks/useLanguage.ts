import { useState, useEffect } from 'react';

export type Language = 'ru' | 'tg';

interface LanguageContent {
  ru: string;
  tg: string;
}

const defaultLanguage: Language = 'tg';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'ru' ? 'tg' : 'ru');
  };

  const t = (content: LanguageContent) => content[currentLanguage];

  return {
    currentLanguage,
    toggleLanguage,
    t,
    isRussian: currentLanguage === 'ru',
    isTajik: currentLanguage === 'tg'
  };
};