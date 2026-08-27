import { Experience, STORE } from "@/models/experience";

export const EXPERIENCES: Experience[] = [
  {
    date: "2026",
    title: "Senior Software Engineer II",
    companyName: "InTouch Technology",
    companyRegion: "Qatar (Remote)",
    description: `I'm working as a Senior Software Engineer II at InTouch Technology, where I built the Zourx platform and its client portal. I have worked with Angular, Signals, React.js, Azure Pipelines, and Figma to deliver scalable, production-ready frontend experiences.`,
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
    date: "2022",
    title: "Software Developer",
    companyName: "Avvocatoflash",
    companyRegion: "Italy (Remote)",
    description: `I worked as a software developer for AvvocatoFlash, a company that specializes in providing legal services to law firms and clients by connecting them with the best lawyers. I worked on applications using Ionic, Angular, Capacitor, Next.js, Node.js, MongoDB, Fastlane, and CircleCI.`,
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
    date: "2021",
    title: "Software Developer",
    companyName: "Amon.Tech",
    companyRegion: "Estonia (Remote)",
    description: `I worked as a software developer for Amon.Tech, a company that specializes in blockchain and cryptocurrencies where users can buy, sell, and exchange crypto in one place. I worked on applications using Ionic, Angular, Capacitor, Next.js, Node.js, MongoDB, Fastlane, and CircleCI.`,
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
    date: "2019",
    title: "Fullstack Developer",
    companyName: "GBM (Gulf Business Machines)",
    companyRegion: "Maadi - Cairo",
    description: `I worked as a fullstack developer for GBM, a company that provides different solutions for entities and organizations. I worked on applications using IBM Mobile First, Ionic, Angular, TypeScript, Cordova, Nest.js, Node.js, Jenkins, Fastlane, and AWS EC2.`,
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
    date: "2017",
    title: "Mobile Developer",
    companyName: "Vericash/ CIT Global",
    companyRegion: "Nasr City - Cairo",
    description: `I worked as a mobile developer for Vericash, a company that specializes in fintech and providing digital financial solutions for South Africa and Arab regions. I worked on applications using AngularJS, Cordova, OnsenUI, HTML, CSS, Less, and Node.js.`,
    projects: [
      {
        title: "UBA Mobile Banking",
        description: `This mobile banking app is regarded as one of the best in Nigeria and South Africa and serves more than 20 countries in Africa. With over 5 million downloads on both Google Play Store and Apple Store, it has more than 2 million active users. I am proud to have been one of the main members who added new features to this app.`,
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
];
