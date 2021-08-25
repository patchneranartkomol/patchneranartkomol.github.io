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
  img: 'profile.jpg',
  paragraphOne:
    "I'm a software engineer building distributed systems at <redacted>. Some of my past work includes search advertising solutions at System1, and a few of the projects in my porfolio below.",
  paragraphTwo:
    'Outside of the office, I am on a continuous pursuit for the best cup of coffee and enjoy creative expression through dance.',
  paragraphThree: "If you'd like to consult with me on a project, please get in touch.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Lodgebook',
    info: 'A simple way for hotels to streamline maintenance and guest notifications.',
    info2: 'We aim to give guests the best experience possible.',
    url: 'https://www.mylodgebook.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
