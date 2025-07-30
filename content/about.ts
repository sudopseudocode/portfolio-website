import type { ReactNode } from 'react';

export type About = {
  title: string;
  jobTitle: string;
  tagLine: string;
  email: string;
  bio: string[];
  image?: ReactNode;
  frontEnd: string[];
  backEnd: string[];
  platforms: string[];
  tools: string[];
};

export const about: About = {
  title: 'Paul DiLoreto',
  jobTitle: 'Lead Software Engineer',
  tagLine: 'Currently working at Docusign',
  email: 'paul@diloreto.com',
  bio: [
    `Paul is a proud UCLA graduate, with a diverse array of skills and interests. After receiving his Bachelor of Art's from UCLA's School of Theater, Film and Television, he went on to perform in several regional musical theatre productions. Currently, Paul is performing part-time as "Shorty" in the Red Car Trolley Newsboys at Disney California Adventure.`,
    `He is also a adept, self-taught developer. After building his first desktop computer and coding his first website at the age of 13, his thirst for technical knowledge has yet to be quenched. To date, Paul has become proficient in numerous Front and Back End Languages. In the past few years, he has worked on Wordpress customization & older LAMP stack websites. Today, Paul mainly works with Node.js (TypeScript), React, and designs scalable systems with whatever tools appropriate for the requirements and scale.`,
    'Paul is currently a Lead Software Engineer at Docusign.',
  ],
  frontEnd: [
    'TypeScript',
    'React',
    'NextJS',
    'Service Workers',
    'Gatsby',
    'StencilJS',
    'Web Components',
    'CSS modules, Emotion, PostCSS, Sass, JSS, etc.',
    'Vanilla HTML, CSS, JS (when appropriate)',
    'Meteor (at Disney)',
    'jQuery (back in the day)',
  ],
  backEnd: [
    'Node.js',
    'Rust',
    'WebSockets',
    'WebRTC',
    'NextJS',
    'Express',
    'Terraform',
    'Meteor (at Disney)',
    'PHP (in the distant past)',
    'MongoDB',
    'SQL (Postgres, MySQL, etc.)',
  ],
  platforms: ['AWS', 'Azure', 'Github Actions', 'Circle CI', 'Jenkins', 'Data Dog', 'In-house proprietary services (when applicable)'],
  tools: [
    'Atlassian Suite (JIRA, Confluence)',
    'Git',
    'Docker, Docker Compose, Kubernetes',
    'Neovim (I could go on and on about configs/plugins)',
    'Tmux',
    'Several CLI tools',
    'Alacritty',
    'Arch Linux (and other common distros)',
  ],
};
