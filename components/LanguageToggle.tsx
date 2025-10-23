
import React from 'react';
import type { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, setLanguage }) => {
  return (
    <div className="flex items-center space-x-1 p-1 rounded-full bg-gray-200 dark:bg-gray-700">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          language === 'en'
            ? 'bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow'
            : 'text-gray-600 dark:text-gray-400'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          language === 'pt'
            ? 'bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow'
            : 'text-gray-600 dark:text-gray-400'
        }`}
        aria-pressed={language === 'pt'}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageToggle;
