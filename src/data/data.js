import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'TL', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  name: 'Thomas Lochner',
  subtitle: 'I\'m a developer located in Tucson, AZ.',
  heroBtn: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello! My name is Thomas Lochner, and I am a software developer located in Tucson, AZ.',
  paragraphTwo: 'I enjoy coding beautiful and useful applications for the web. I started my career as a student developer\
                at the University of Arizona, where I also received my Bachelor\'s degree in Computer Science with a \
                minor in Business Administration. Later on in my junior year I accepted a full-time position as a Business Systems \
                Integration Specialist also at the University of Arizona. About a year later, I then accepted a full-time senior \
                position as an Integration Engineer in a different department, still at the University of Arizona.',
  paragraphThree: 'As a developer, I appreciate many things coding-oriented. However, I am especially interested in JavaScript frameworks \
                  (such as ReactJS) as well as Python. I\'ve created this portfolio in React, as well as one of my personal projects, \
                  which you can view below.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
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
