import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  apolloGraphql,
  eslint,
  grafana,
  materialUi,
  react,
  reactQuery,
  storybook,
  typescript,
  emberjs,
  java,
  sap,
  hana,
  hybris,
  objectiveC,
  jest,
  redux,
  javascript,
  tailwindCss,
  astro,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior Software Engineer',
      company: 'OpenGov',
      image: import('@/assets/logos/opengov-logo.png'),
      dates: [new Date('2023-09'), null],
      description: `
    I work as a Senior Frontend Engineer within the Permitting & Licensing platform, leading front-end architecture initiatives for large-scale, data-intensive products used by government agencies across the United States.

    • Led the front-end architecture for a major workflow initiative and built the Plan Review experience from scratch, designing complex multi-step flows, wizards, validations, and state management to enable government employees to process permits and licenses efficiently at scale.

    • Designed and built a payments framework using React and GraphQL, delivering an extensible, provider-agnostic payment component designed to scale across platforms and integrate with multiple payment providers such as Stripe, Elavon, PaymentTech and others. The framework was built to support high-volume payment workflows and enable new providers to be onboarded through configuration.

    • Designed the architecture and implementation of the Shopping Cart / bulk payments experience, allowing users to group multiple record steps and pay in bulk, significantly reducing up to 300 manual actions per permit/license and improving end-to-end operational efficiency.

    • Built complex, data-heavy UIs including multi-step workflows, wizards, and bulk actions, handling large volumes of data with advanced data fetching and pagination strategies using TanStack Query and GraphQL.

    • Played a key role in frontend architecture decisions, collaborating closely with product, design, and backend teams across workflows, Plan Review, and payments.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          reactQuery(),
          typescript(),
          apolloGraphql(),
          storybook(),
          materialUi(),
          grafana(),
          emberjs(),
          jest(),
        ],
      },
      links: [
        website({ url: 'https://opengov.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/opengov-inc/posts/?feedView=all' }),
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Spot Meetings - Upcraft',
      image: import('@/assets/logos/upcraft-logo.jpeg'),
      dates: [new Date('2021-09'), new Date('2023-08')],
      description: `
    • Joined the founding team for the development of the web application, engaging in the entire product lifecycle from design thinking processes to production release.

    • Hand-on code using React JS, Typescript, and React Hooks, employing design patterns to ensure optimal architecture.

    • Design and development of reusable components with Styled-Components and including them in the Storybook.

    • Integration of REST APIs.

    • Assumed leadership responsibilities, offering unwavering team support, engaging in refinement tasks, estimation, and collaborative roadmap planning with the product team.

    • Integration of a Payments module with an external provider.`,
      tagsList: {
        title: 'Technologies',
        tags: [react(), typescript(), storybook(), jest(), tailwindCss(), astro()],
      },
      links: [
        website({ url: 'https://opengov.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/opengov-inc/posts/?feedView=all' }),
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Axxiome',
      image: import('@/assets/logos/axxiome-logo.png'),
      dates: [new Date('2016-09'), new Date('2021-04')],
      description: `
      <strong>ReactJS Developer at ATB Financial</strong>

      • New features design and development for the implementation of the Electronic Funds Transfer module to the Business Banking Web application using ReactJS with Redux.

      • Implemented Storybooks to store all reusable components built with styled-components, improving component accessibility and facilitating collaboration among developers.

      • Performed unit testing for each component developed using Jest, ensuring the reliability and stability of the application.



      <strong>Senior Business Analyst at Superdigital</strong>

      • Joined the founding team of a major project that consisted of building a Fintech from scratch. Responsible for the design and definition of new business processes end-to-end for the CORE application of Fintech.

      • Led a team designing the technical development of financial products based on functional designs.



      <strong>SAP Java Developer at Center State Bank</strong>

      • Developed Banking Services products using SAP products, enhancing the functionality and usability of the banking systems.

      • Utilized SAP HANA to create real-time sentiment analysis dashboards, providing valuable insights for informed decision-making. I used Java, JavaScript, SQL script, HTML/CSS, and Bootstrap.

      • Designed and developed the workflow of the sale process of loans and credits using SAP Hybris, contributing to improved efficiency and accuracy in the sales process.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), redux(), javascript(), eslint(), java(), sap(), hana(), hybris(), jest()],
      },
      links: [
        website({ url: 'https://www.axxiome.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/axxiome/posts/?feedView=all' }),
      ],
    },
    {
      role: 'Technical Consultant',
      company: 'Deloitte',
      image: import('@/assets/logos/deloitte-logo.png'),
      dates: [new Date('2013-01'), new Date('2016-08')],
      description: `
      • Utilized SAP HANA to craft real-time sentiment analysis dashboards across different topics, enabling informed decision-making. Integrated data collection from Facebook and Twitter via a Node.js middleware, funneling API data into SAP HANA.

      • Development of a mobile native application for iOS using Objective C.

      • Lead a team in web application development and design. Front as well as back end, using HTML5, CSS, JavaScript, and PHP. Estimated each iteration of the project for the team.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [objectiveC(), java(), sap(), hana()],
      },
      links: [
        website({ url: 'https://www.deloitte.com/latam/es/about/story/nuestros-marketplaces/deloitte-argentina.html' }),
        linkedin({ url: 'https://www.linkedin.com/company/deloitte/posts/?feedView=all' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
