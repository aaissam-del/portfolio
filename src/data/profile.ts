/**
 * Centralized student profile data used across the entire portfolio.
 * Update this file only to change content, section visibility, navigation, and chatbot knowledge.
 */
export type IconName =
  | 'logo'
  | 'menu'
  | 'close'
  | 'arrowUp'
  | 'arrowRight'
  | 'externalLink'
  | 'mail'
  | 'github'
  | 'linkedin'
  | 'user'
  | 'sparkles'
  | 'briefcase'
  | 'graduationCap'
  | 'folder'
  | 'send'
  | 'bot';

export type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
  tone: 'github' | 'linkedin' | 'email';
};

export type NavItem = {
  id: string;
  href: string;
  label: string;
  icon: IconName;
};

export type AboutCard = {
  number: string;
  title: string;
  body: string;
};

export type ProjectEntry = {
  title: string;
  summary: string;
  stack: string[];
  repoUrl: string;
  collaboration: string;
  note?: string;
};

export type SectionLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProfileData = {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  availability: string;
  email: string;
  avatarUrl: string;
};

export const profile: ProfileData = {
  fullName: 'Aymane Aissam',
  firstName: 'Aymane',
  lastName: 'Aissam',
  title: 'Étudiant en informatique',
  subtitle: 'Portfolio personnel, présence publique et points de contact réunis dans une interface claire et évolutive.',
  availability: 'Disponible pour un stage',
  email: 'a.aissam@esisa.ac.ma',
  avatarUrl: 'https://avatars.githubusercontent.com/u/257891159?v=4',
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/aaissam-del',
    icon: 'github',
    tone: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aymane-aissam-481642384',
    icon: 'linkedin',
    tone: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:a.aissam@esisa.ac.ma',
    icon: 'mail',
    tone: 'email',
  },
];

export const aboutCards: AboutCard[] = [
  {
    number: '01',
    title: 'Profil public',
    body: 'Ce portfolio rassemble les informations publiques disponibles pour Aymane Aissam et fournit un point d’entrée rapide vers ses liens de contact.',
  },
  {
    number: '02',
    title: 'Contenu dynamique',
    body: 'Les sections techniques, académiques et professionnelles apparaissent uniquement lorsqu’elles contiennent des données réelles dans ce fichier centralisé.',
  },
];

export const skills: never[] = [];
export const softSkills: never[] = [];
export const education: never[] = [];
export const experience: never[] = [];
export const publications: never[] = [];
export const certifications: never[] = [];
export const projects: ProjectEntry[] = [
  {
    title: 'SurvivorC',
    summary:
      'Jeu 2D top-down de survie en C11 avec Raylib, incluant vagues d’ennemis dynamiques, score combo, abilities (Purge, Jam, Sprint) et effets visuels.',
    stack: ['C11', 'Raylib', 'Makefile', 'MinGW-w64'],
    repoUrl: 'https://github.com/Anas404tgg/survivorc',
    collaboration: 'Collaboration avec Anas Boulif via GitHub Copilot',
    note: 'Projet académique avec architecture modulaire (player, enemy, AI, collisions, UI, particles, effects).',
  },
];

export const heroStats: Array<{ label: string; value: string }> = [];

export const contactLinks: SectionLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/aaissam-del',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aymane-aissam-481642384',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:a.aissam@esisa.ac.ma',
  },
];

const activeSections = [
  { id: 'about', href: '/#about', label: 'À propos', icon: 'user' as const, visible: aboutCards.length > 0 },
  { id: 'projects', href: '/projects', label: 'Projets', icon: 'folder' as const, visible: projects.length > 0 },
  { id: 'contact', href: '/#contact', label: 'Contact', icon: 'mail' as const, visible: true },
];

export const navItems: NavItem[] = activeSections
  .filter((section) => section.visible)
  .map((section) => ({ id: section.id, href: section.href, label: section.label, icon: section.icon }));

export const footerNavItems = navItems;

export const sections = {
  about: aboutCards,
  skills,
  softSkills,
  education,
  experience,
  publications,
  certifications,
  projects,
};

export const sectionPresence = {
  about: aboutCards.length > 0,
  skills: skills.length > 0 || softSkills.length > 0,
  education: education.length > 0,
  experience: experience.length > 0,
  publications: publications.length > 0,
  certifications: certifications.length > 0,
  projects: projects.length > 0,
  contact: true,
};

export const quickActions = [
  { label: `Qui est ${profile.firstName} ?`, intent: 'about' },
  { label: 'Contact', intent: 'contact' },
  { label: 'GitHub', intent: 'social' },
  { label: 'LinkedIn', intent: 'social' },
];

export const knowledgeBase = {
  profile,
  aboutCards,
  socialLinks,
  contactLinks,
  navItems,
  sectionPresence,
};
