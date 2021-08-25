import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Patch Neranartkomol | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Patch Neranartkomol - Personal Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Software Engineer',
  name: 'Patch Neranartkomol',
  subtitle: 'Web Development',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'patch.jpg',
  paragraphOne:
    "I'm a software engineer building distributed systems at <redacted>. My past work includes developing search advertising solutions at System1. On this site, you'll find some of my unrelated, public-facing projects.",
  paragraphTwo:
    'Outside of the office, I am on a continuous pursuit for the best cup of coffee and enjoy creative expression through dance.',
  paragraphThree: "If you'd like to consult with me on a project, please get in touch.",
  resume: '', // if no resume url, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lodgebook.png',
    title: 'Lodgebook',
    info: 'A simple way for hotels to streamline maintenance and guest notifications.',
    info2: 'We aim to give guests the best experience possible.',
    url: 'https://www.mylodgebook.com/',
    repo: '', // if no repo, the button will not show up - Remove for closed source project
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'State Bills',
    info: 'A web application for users to browse and filter information about legislation going through any US state legislature.',
    info2: 'Powered by data from the Legiscan API.',
    url: '',
    repo: 'https://github.com/patchneranartkomol/state_bills',
  },

  {
    id: nanoid(),
    img: 'hellogov.png',
    title: 'HelloGov',
    info: 'A call-to-rep tool built for Hack for LA local hack nights and other civic organizations.',
    info2: 'We make it easy to contact State and Federal lawmakers. Currently in invite-only beta.',
    url: 'https://hellogov.squarespace.com/',
    repo: 'https://github.com/helloGov/webapp',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'patch@neranartkomol.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/PatcharaponN1',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:patch@neranartkomol.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/patcharaponn/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/patchneranartkomol',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
