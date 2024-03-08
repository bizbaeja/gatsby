export default {
  /**
   * basic Information
   */
  title: `bizbaeja blog`,
  description: `개발자 bizbaeja의 개발 블로그입니다.`,
  language: `ko`,
  siteUrl: `https://github.com/bizbaeja`,
  ogImage: `/level4.gif`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `배자현`,
    nickname: `bizbaeja`,
    stack: ['Fullstack', 'Java', 'Typescript','Next.JS'],
    bio: {
      email: `bjgbjg112@gmail.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'Computer Science, Korean National Open University',
    },
    social: {
      github: `https://github.com/bizbaeja`,
      linkedIn: `https://www.linkedin.com/in/smart312agile/`,
      resume: `https://portfolio-lilac-seven-80.vercel.app`,
    },
    
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'category1',
      category: 'featured-category1',
    },
    {
      title: 'category2',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'A Corp.',
      kr: 'A 회사',
      info: 'A 팀',
      link: '',
    },
    {
      category: 'Career',
      date: '2021.01.04 - 2022.01.04',
      en: 'B Corp.',
      kr: 'B 회사',
      info: 'B 팀',
      link: '',
    },
    {
      category: 'Activity',
      date: '2023.07 - NOW',
      en: 'Community',
      kr: '커뮤니티',
      info: 'IT 커뮤니티',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/bizbaeja',
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
