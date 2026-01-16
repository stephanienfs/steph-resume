import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Stephanie Fernandez Salinas',
  role: 'Senior Software Engineer',
  details: [
    { label: 'Email', value: 'stephanienicolefs@gmail.com', url: 'mailto:stephanienicolefs@gmail.com' },
    { label: 'Current residence', value: 'Buenos Aires, Argentina' },
    { label: 'Citizenship', value: 'United States (US Citizen)' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'stephanienicolefs@gmail.com' },
    { label: 'LinkedIn', value: '/in/stephanie-nicole-fs', url: 'https://linkedin.com/in/stephanie-nicole-fs' },
    { label: 'GitHub', value: '/stephanienfs', url: 'https://github.com' },
    { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    "I'm a passionate Front-End Engineer with a strong enthusiasm for challenging projects. I specialize in ReactJS, TypeScript, and JavaScript, utilizing these technologies to create innovative and scalable solutions. Under a business mindset, I am thrilled to develop technology that fulfills user needs. As a team player that has worked on several projects from different countries, I embrace diversity to approach any situation with a wider perspective. These experiences have nurtured my fascination for sharing and learning from different cultures, especially in teamwork.",
  tags: [],
  action: {
    label: 'Download CV',
    url: '/Stephanie-Fernandez-Salinas-Resume.pdf',
    downloadedFileName: 'Stephanie_Fernandez_Salinas_Resume.pdf',
  },
  links: [
    github({ url: 'https://github.com/stephanienfs' }),
    linkedin({ url: 'https://linkedin.com/in/stephanie-nicole-fs' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
