import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  eslint,
  figma,
  git,
  graphql,
  java,
  javascript,
  jest,
  jira,
  materialUi,
  nodeJs,
  notion,
  prettier,
  react,
  reactQuery,
  redux,
  sass,
  storybook,
  tailwindCss,
  typescript,
  vscode,
  wordpress,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: "Technologies I've used",
      skills: [
        react({
          level: 5,
        }),
        reactQuery({ level: 4 }),
        storybook({ level: 3 }),
        javascript({ level: 3 }),
        typescript({
          level: 4,
        }),
        redux({ level: 3 }),
        jest({ level: 4 }),

        materialUi({ level: 4 }),
        sass({
          level: 4,
        }),
        tailwindCss({ level: 3 }),
        prettier({ level: 5 }),
        eslint({
          level: 4,
        }),
        nodeJs({ level: 2 }),
        graphql({ level: 2 }),
        java({ level: 2 }),
      ],
    },
    {
      title: "Tools I've worked with",
      skills: [jira(), figma(), vscode(), wordpress(), notion(), git(), apolloGraphql()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:pl', name: 'Polish - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
        { icon: 'circle-flags:es-variant', name: 'Spanish - B1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
