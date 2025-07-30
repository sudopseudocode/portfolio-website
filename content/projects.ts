import type { ReactNode } from 'react';

export type Project = {
  title: string;
  description?: string;
  url: string;
  // TODO make required
  image?: ReactNode;
  bullets: string[];
};

export const projects: Project[] = [
  {
    title: 'UX Portfolio',
    url: 'https://carolyndiloreto.com/',
    bullets: [
      'Provided Contentful CMS for non-technical users to manage content',
      'Used React, CSS Modules, and TypeScript',
      'Serverside rendering + static site generation with NextJS',
      'Static content changes in Contentful CMS triggers continuous deployment via Netlify webhooks',
      'Testing with Jest + Playwright',
    ],
  },
  {
    title: 'Family Website',
    url: 'https://diloreto.com/',
    bullets: [
      'Provided Contentful CMS for non-technical users to manage content',
      'Used React, CSS Modules, and TypeScript',
      'NextJS for static site generation',
      'Static content changes in Contentful CMS triggers continuous deployment via Netlify webhooks',
      'Testing with Jest + Playwright',
    ],
  },
];
