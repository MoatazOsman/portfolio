import { Experience, STORE } from "@/models/experience";

export const EXPERIENCES: Experience[] = [
  {
    date: "Oct 2022 – Present",
    title: "Senior Software Engineer",
    companyName: "Avvocatoflash",
    companyRegion: "Italy (Remote)",
    description: `I work remotely as a senior software engineer, maintaining four web and mobile applications with Node.js, microservices, Angular, Ionic, Capacitor, React.js, and Next.js. I applied a monorepo with shared frontend code, cutting coding and testing time by more than 50%, and launched the lawyer mobile app with in-app purchases alongside the web app, increasing product sales by 35%. I also automated mobile and web releases with Fastlane and CircleCI to the App Store, Play Store, Huawei AppGallery, and Netlify.`,
    projects: [
      {
        title: "Avvocatoflash Lawyer app",
        description: `A cross-platform app designed to increase the business of the law firm by enabling lawyers to find new customers, conduct video conferences with clients, digitally sign legal documents, and offer other profitable features.`,
        stores: [
          {
            type: STORE.APPSTORE,
            url: "https://apps.apple.com/us/app/avvocatoflash-avvocati/id1587345212?platform=iphone",
          },
          {
            type: STORE.GOOGLE_PLAY,
            url: "https://play.google.com/store/apps/details?id=it.avvocatoflash.lawyer",
          },
        ],
      },
      {
        title: "Avvocatoflash Website",
        description: `A static website with a plugged-in blog that provides users with profitable articles to read about the law, including updates on various legal cases and other useful features.`,
        stores: [
          {
            type: STORE.WEB,
            url: "https://www.avvocatoflash.it/",
          },
        ],
      },
    ],
  },
  {
    date: "Sep 2025 – Aug 2026",
    title: "Technical Team Lead",
    companyName: "Intouch Technology",
    companyRegion: "Qatar (Remote)",
    description: `I led the engineering team for Zourx, an AI-driven experience management platform, through technical direction, architecture, code reviews, and mentoring. I designed a scalable frontend architecture with React.js, Next.js, Angular, and micro frontends, modernized a legacy frontend, and published a shared design system as an NPM package. I worked with product, design, and backend teams, and used AI-assisted development to speed delivery.`,
    projects: [
      {
        title: "Zourx Platform",
        description: `A modern web platform built for Zourx to deliver a seamless and scalable user experience across core business workflows.`,
        stores: [
          {
            type: STORE.WEB,
            url: "https://zourx.com/",
          },
        ],
      },
      {
        title: "Zourx Client v2.0",
        description: `A dedicated client-facing portal focused on improving user journey, usability, and performance for customer operations.`,
        stores: [
          {
            type: STORE.WEB,
            url: "https://zourx.com/client-v2.0",
          },
        ],
      },
    ],
  },
  {
    date: "Jun 2021 – Sep 2022",
    title: "Senior Software Developer",
    companyName: "Amon.Tech",
    companyRegion: "Estonia (Remote)",
    description: `I led the frontend team on three applications using Node.js, microservices, Angular, Ionic, Capacitor, React.js, and Next.js, including Web3 integrations, blockchain contracts, and push notifications with OneSignal and Firebase. I improved CI/CD and cut deployment time by more than 40%, and established unit testing with Mocha, Jest, and Jasmine plus end-to-end testing with Cypress.`,
    projects: [
      {
        title: "Amon Wallet",
        description: `A cross-platform app for cryptocurrency wallets that enables users to withdraw, deposit, exchange and trade cryptocurrencies, and offers many profitable features such as the ability to request a card and view their transaction history.`,
        stores: [
          {
            type: STORE.APPSTORE,
            url: "https://apps.apple.com/us/app/amon/id1375721006?platform=iphone",
          },
          {
            type: STORE.GOOGLE_PLAY,
            url: "https://play.google.com/store/apps/details?id=tech.amon&hl=en&gl=US",
          },
          {
            type: STORE.APP_GALLERY,
            url: "https://appgallery.cloud.huawei.com/ag/n/app/C104691101?channelId=prod&id=be116160d93845f9942cdec6aadcbd67&s=421047A738F5F2D42650F3B6B1179B5A39B68EB8A78B95B7F2B8726A147A5736&detailType=0&v=",
          },
        ],
      },
      {
        title: "Amon Website",
        description: `The Amon.Tech site for the wallet and crypto products.`,
        stores: [
          {
            type: STORE.WEB,
            url: "https://amon.tech/",
          },
        ],
      },
    ],
  },
  {
    date: "Jan 2019 – Jun 2021",
    title: "Full Stack Engineer",
    companyName: "GBM (Gulf Business Machines)",
    companyRegion: "Maadi - Cairo",
    description: `I worked as a full stack engineer, directing a frontend team while working with the backend team. I started 5+ projects across learning and education, fintech, and transportation using Angular, Ionic, Cordova, Capacitor, Node.js, Nest.js, MySQL, and AWS. I selected scalable patterns for each business case, configured Sentry, set up Jenkins and GitHub CI/CD to AWS EC2, the App Store, and Play Store, and introduced unit testing with Mocha and Jasmine.`,
    projects: [
      {
        title: "SILA",
        description: `A multi-platform app designed to facilitate visitors of World Cup 2022 in Qatar by helping them choose the best routes to stadiums, and allowing them to reserve their tickets for both the matches and public transportation.`,
        stores: [
          {
            type: STORE.APPSTORE,
            url: "https://apps.apple.com/us/app/sila/id1484452317?platform=iphone",
          },
          {
            type: STORE.GOOGLE_PLAY,
            url: "https://play.google.com/store/apps/details?id=sila.sports.com&hl=en&gl=US",
          },
          {
            type: STORE.WEB,
            url: "https://sila.qa/",
          },
        ],
      },
      {
        title: "QIIB",
        description: `A mobile and web portal e-banking system designed for the Qatar International Islamic Bank, consisting of two main parts: retail and corporate systems. The system facilitates transfers, bill payments, and salary batch operations for both domestic and international bank accounts.`,
        stores: [
          {
            type: STORE.APPSTORE,
            url: "https://apps.apple.com/us/app/qiib-mobile/id861866151?platform=iphone",
          },
          {
            type: STORE.GOOGLE_PLAY,
            url: "https://play.google.com/store/apps/details?id=com.QIIB&hl=en&gl=US",
          },
        ],
      },
    ],
  },
  {
    date: "Oct 2017 – Dec 2018",
    title: "Mobile Developer",
    companyName: "Vericash/ CIT Global",
    companyRegion: "Nasr City - Cairo",
    description: `I contributed to three scalable fintech applications using Android native, Cordova, Angular.js, and Node.js. One of them served over 2 million active users. I automated the build process, cutting build time by 40%, and received the Project Hero award. After six months I was promoted to a senior role and supervised a team of three developers.`,
    projects: [
      {
        title: "UBA Mobile Banking",
        description: `This mobile banking app is regarded as one of the best in Nigeria and South Africa and serves more than 20 countries in Africa. It had more than 2 million active users. I am proud to have been one of the main members who added new features to this app.`,
        stores: [
          {
            type: STORE.APPSTORE,
            url: "https://apps.apple.com/us/app/uba-mobile-banking/id1000669926?platform=iphone",
          },
          {
            type: STORE.GOOGLE_PLAY,
            url: "https://play.google.com/store/apps/details?id=com.uba.vericash&hl=en&gl=US",
          },
        ],
      },
      {
        title: "Mahfazti By Umniah",
        description: `This is one of the best mobile wallets that serves people in Jordan and is supervised by the Central Bank of Jordan (CBJ). I am the owner of the project who revamped this app and added new features.`,
        stores: [
          {
            type: STORE.APPSTORE,
            url: "https://apps.apple.com/us/app/uwallet-jo/id1517825593",
          },
          {
            type: STORE.GOOGLE_PLAY,
            url: "https://play.google.com/store/apps/details?id=com.a2a.umniah&hl=en&gl=US",
          },
        ],
      },
    ],
  },
  {
    date: "Dec 2017 – Present",
    title: "Freelancer",
    companyName: "Mostaql",
    companyRegion: "mostaql.com",
    description: `I provide freelance software development across varied applications and business workflows, with a 5-star rating. Technologies include React.js, TypeScript, Angular, Flutter, Ionic, Capacitor, Cordova, Sass, Node.js, and MongoDB.`,
    projects: [],
  },
  {
    date: "Jun 2016 – Jun 2017",
    title: "Android Developer",
    companyName: "Watania co. for roads",
    companyRegion: "Nasr City - Cairo",
    description: `I delivered two Android applications for road-permission ticketing, integrating Bixolon printers with Android devices over Bluetooth for outlets without electricity.`,
    projects: [],
  },
];
