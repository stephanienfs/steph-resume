import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import { wordpress, javascript, squarespace, breakdance } from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Lineout',
      image: import('@/assets/portfolio/lineoutagency_logo.jpeg'),
      dates: [new Date('2020-03'), null],
      details: [
        { label: 'Team size', value: '6 people' },
        { label: 'My role', value: ['Front-end Developer, Wordpress Developer'] },
        { label: 'Company', value: 'Lineout' },
        { label: 'Category', value: ['Web app', 'Wordpress'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      ],
      description: `
      Lineout Media is a full-service digital marketing agency specializing in performance marketing, analytics, and creative strategy for growth-driven brands.

      Main Tasks:

      • E-commerce development and maintenance

      • Landing page development and maintenance
      `,
      tagsList: {
        title: 'Technologies',
        tags: [wordpress(), javascript(), squarespace(), breakdance()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
