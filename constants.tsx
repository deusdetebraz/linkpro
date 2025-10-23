// FIX: Added import for React to use React types and JSX syntax.
import React from 'react';
import type { ProfileData, LocalizationContent } from './types';

// SVG Icons as React Components
const WebsiteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const VideoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m22 8-6 4 6 4V8Z"></path><rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect></svg>
);

const StoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7H12v4H2z"/></svg>
);

const PortfolioIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);


// Mock Profile Data
export const PROFILE_DATA: ProfileData = {
  name: "Alex Johnson",
  username: "alexdev",
  avatarUrl: "https://picsum.photos/id/237/200/200",
  bio: "Full-Stack Developer & UI/UX Designer crafting beautiful digital experiences. Let's connect and build something amazing together!",
  links: [
    { id: 1, title: "Official Website", url: "#", icon: WebsiteIcon },
    { id: 2, title: "My Digital Store", url: "#", icon: StoreIcon },
    { id: 3, title: "Featured Video", url: "#", icon: VideoIcon, premium: true },
    { id: 4, title: "Design Portfolio", url: "#", icon: PortfolioIcon },
  ],
  socialLinks: [
    { id: 1, platform: 'github', url: "#" },
    { id: 2, platform: 'linkedin', url: "#" },
    { id: 3, platform: 'instagram', url: "#" },
    { id: 4, platform: 'tiktok', url: "#" },
    { id: 5, platform: 'whatsapp', url: "#" },
  ],
};

// Localization Content
export const LOCALIZATION: LocalizationContent = {
  en: {
    bio: "Full-Stack Developer & UI/UX Designer crafting beautiful digital experiences. Let's connect and build something amazing together!",
    links: {
      1: "Official Website",
      2: "My Digital Store",
      3: "Featured Video",
      4: "Design Portfolio",
    },
  },
  pt: {
    bio: "Desenvolvedor Full-Stack e Designer UI/UX criando experiências digitais incríveis. Vamos nos conectar e construir algo fantástico juntos!",
    links: {
      1: "Site Oficial",
      2: "Minha Loja Digital",
      3: "Vídeo em Destaque",
      4: "Portfólio de Design",
    },
  },
};