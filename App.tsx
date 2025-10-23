
import React, { useState, useEffect } from 'react';
import { PROFILE_DATA, LOCALIZATION } from './constants';
import SocialIcon from './components/SocialIcon';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import type { Language, Link as LinkType } from './types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const currentTranslations = LOCALIZATION[language];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100 via-transparent to-blue-100 dark:from-purple-900/20 dark:via-transparent dark:to-blue-900/20 -z-10"></div>
      
      <header className="absolute top-4 right-4 flex items-center space-x-4">
        <LanguageToggle language={language} setLanguage={setLanguage} />
        <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </header>

      <main className="container mx-auto px-4 py-8 sm:py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md text-center">
          
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <img 
              src={PROFILE_DATA.avatarUrl} 
              alt={PROFILE_DATA.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white dark:border-gray-700 shadow-lg"
            />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{PROFILE_DATA.name}</h1>
            <p className="text-md text-purple-600 dark:text-purple-400 mb-4">@{PROFILE_DATA.username}</p>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {currentTranslations.bio}
            </p>
          </div>

          <div className="mt-8 space-y-4 w-full">
            {PROFILE_DATA.links.map((link, index) => (
              <LinkButton key={link.id} link={link} title={currentTranslations.links[link.id]} index={index} />
            ))}
          </div>
          
          <div className="mt-10 flex justify-center items-center space-x-6 animate-fade-in" style={{ animationDelay: '900ms' }}>
            {PROFILE_DATA.socialLinks.map(social => (
              <SocialIcon key={social.id} platform={social.platform} url={social.url} />
            ))}
          </div>

          <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <p>Powered by <span className="font-bold text-purple-600 dark:text-purple-400">LinkPro+</span></p>
          </footer>
        </div>
      </main>
    </div>
  );
};


interface LinkButtonProps {
    link: LinkType;
    title: string;
    index: number;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, title, index }) => {
    const { url, icon: Icon, premium } = link;
    const animationDelay = `${300 + index * 100}ms`;

    const premiumClasses = "text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/50 hover:bg-purple-200 dark:hover:bg-purple-900/80 animate-pulse-glow";
    const standardClasses = "text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700";

    return (
        <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-full p-4 rounded-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 animate-fade-in ${ premium ? premiumClasses : standardClasses }`}
            style={{ animationDelay }}
        >
            {Icon && <Icon className="w-5 h-5 mr-3" />}
            {title}
            {premium && (
                <span className="absolute top-1 right-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    PRO
                </span>
            )}
        </a>
    );
};

export default App;
