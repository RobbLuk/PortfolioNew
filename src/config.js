module.exports = {
  siteTitle: 'Robert Philipp Lukas',
  siteDescription:
    'Robert Lukas is an Project Manager, Data Scientist, Data Engineer, Technician based in Germany, who loves learning new things and helping.',
  siteKeywords: 'Robert Lukas, Lukas, engineer, web developer, javascript, python, R, Data science',
  siteUrl: 'https://robbluk.github.io/PortfolioNew',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Robert Lukas',
  location: 'Munich, Germany',
  email: 'robert_lukas@outlook.de',
  github: 'https://github.com/RobbLuk',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/RobbLuk',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/robert-philipp-lukas-954a01222',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/luk_robb',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
    yellow: '#E5D283',
    Navy: '#213555',
    grey: '#F0F0F0',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
