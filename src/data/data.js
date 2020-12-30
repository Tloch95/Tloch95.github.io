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
  resume: 'https://www.resumemaker.online/es.php',
};

// EXPERIENCE DATA
export const experienceData = {
  jobs: [
    {
      position: 'Student Developer',
      company: 'University of Arizona, Eller IT',
      responsibilities: [
        'Manage and maintain integration of relational databases', 
        'Collaborate with colleagues to facilitate code advancement process',
        'Debug current/past code using Visual Studio, SQL Management Studio, and more',
        'Demonstrate best coding practices and ability to produce efficient and maintainable code',
        'Create user-friendly graphical interfaces for both mobile and web solutions'
      ]
    },
    {
      position: 'Business Systems Integration Specialist',
      company: 'University of Arizona, Eller IT',
      responsibilities: [
        'Prepare integration plans for SQL and Oracle databases', 
        'Properly and seamlessly integrate data from external sources',
        'Transform and manipulate data to be processed using C#',
        'Create well-functioning programs using MVC, Entity Framework, and more'
      ]
    },
    {
      position: 'Senior Integration Engineer',
      company: 'University of Arizona, UITS',
      responsibilities: [
        'Collaborate with team members to identify data needs and prepare solution plans', 
        'Develop integration plans for both internal and external disparate systems',
        'Manage and maintain performance of internal data systems using AWS tools and more',
        'Create and maintain real-time solution(s) for data synchronization between systems'
      ]
    }
  ]
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'spectaskular.PNG',
    title: 'Spectaskular',
    desc: 'A simple task management app to keep track of your life. Built using a Flask/Postgres backend deployed with Heroku, and a ReactJS frontend deployed with Netlify.',
    desc2: '',
    url: 'https://spectaskular.netlify.app/',
    repo: 'https://gitlab.com/tloch95/spectaskular-ui',
    repo2: 'https://gitlab.com/tloch95/spectaskular-api',
  },
  {
    id: nanoid(),
    img: 'thomaslochnerdotus.PNG',
    title: 'thomaslochner.us',
    desc: '',
    desc2: '',
    url: 'https://www.thomaslochner.us/',
    repo: 'https://github.com/Tloch95/thomaslochner.us',
    repo2: '',
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
