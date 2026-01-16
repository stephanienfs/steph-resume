import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Software Engineer',
      institution: 'University of Palermo',
      image: import('@/assets/logos/up-univeristy.jpg'),
      dates: [new Date('2012.04'), new Date('2020.11')],
      description: 'Master degree. Specialization in software development.',
      links: [
        website({ url: 'https://www.palermo.edu/ingenieria/ingenieria_informatica/ingenieria_informatica.html' }),
      ],
    },
    {
      title: 'High School in Human Science',
      institution: 'Esclavas del Sagrado Corazón',
      image: import('@/assets/logos/esclavas-high.jpeg'),
      dates: [new Date('2006.03'), new Date('2011.12')],
      description: "Bachelor's degree. Specialization in human science.",
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
