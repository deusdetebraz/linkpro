// FIX: Added import for React to resolve errors with React types and JSX namespace.
import React from 'react';

export interface Link {
  id: number;
  title: string;
  url: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  premium?: boolean;
}

export interface SocialLink {
  id: number;
  platform: 'instagram' | 'tiktok' | 'whatsapp' | 'github' | 'linkedin';
  url: string;
}

export interface ProfileData {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  links: Link[];
  socialLinks: SocialLink[];
}

export type Language = 'en' | 'pt';

export interface Translations {
  bio: string;
  links: { [key: number]: string };
}

export interface LocalizationContent {
  en: Translations;
  pt: Translations;
}