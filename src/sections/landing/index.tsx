"use client";

import { SelectedPage } from "@/enums/selectedPage";
import MoatazProfileImage from "@/assets/moataz.png";
import { motion } from "framer-motion";
import SocialMediaIcons from "@/components/socialMediaIcons";
import LineGradient from "@/components/lineGradient";
import Image from "next/image";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const aboutParagraphs = [
  "My core expertise is in React.js, Next.js, Angular, TypeScript, and JavaScript, with extensive experience designing and developing complex applications, reusable component architectures, and scalable frontend platforms.",
  "I have hands-on experience with Frontend Architecture, Micro Frontends, Monorepo architectures, Design Systems, reusable component libraries, automated testing, CI/CD, performance optimization, and developer experience. I've worked on products across fintech, transportation, education, and experience management, including applications serving millions of users.",
  "Throughout my career, I've also taken on technical leadership responsibilities — leading frontend developers, conducting code reviews, establishing engineering practices, making architectural decisions, and improving development and deployment processes. Some of my work has resulted in significant improvements, including reducing development effort by 50%+ through shared frontend architecture and reducing deployment time by 40%+ through CI/CD automation.",
  "I'm currently expanding my expertise into Applied AI Engineering, focusing on how AI can be integrated into production applications and developer workflows. I'm particularly interested in LLM-powered applications, AI agents, tool calling, RAG, AI SDKs, and AI-assisted software development, while continuing to build on my strong foundation in frontend engineering.",
  "I enjoy solving complex engineering problems, simplifying frontend architectures, improving developer productivity, and building products that are scalable, maintainable, and user-focused.",
];

const aboutClusters = [
  { title: "Core stack", body: aboutParagraphs[0] },
  { title: "Architecture", body: aboutParagraphs[1] },
  { title: "Leadership", body: aboutParagraphs[2] },
  { title: "Applied AI", body: aboutParagraphs[3] },
  { title: "Focus", body: aboutParagraphs[4] },
];

const Landing = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="scroll-mt-24 py-10">
      <div className="gap-16 md:flex md:items-center md:justify-between">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
          className="z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32"
        >
          <div
            className="relative z-0 before:absolute before:-left-20 before:-top-20
            before:z-[-1] before:hidden before:h-full before:w-full before:max-w-[400px] before:rounded-t-[400px] before:border-2 before:border-blue md:ml-20 md:before:block"
          >
            <Image
              className="z-10 w-full max-w-[400px] transition duration-500 hover:saturate-200
              hover:filter md:max-w-[600px]"
              src={MoatazProfileImage}
              alt="Moataz Osman"
              priority
            />
          </div>
        </motion.div>

        <div className="z-30 mt-12 basis-2/5 md:mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="z-10 text-center font-playfair text-4xl leading-tight xs:text-5xl sm:text-6xl md:text-start">
              Moataz{" "}
              <span
                className="z-20 xs:relative xs:font-semibold xs:text-deep-blue xs:before:absolute xs:before:-left-[25px] xs:before:-top-[70px]
                xs:before:z-[-1] xs:before:content-brush"
              >
                Osman
              </span>
            </h1>

            <p className="mb-7 mt-10 text-center text-sm leading-6 md:text-start md:text-lg md:leading-8">
              I&apos;m a <strong>Frontend Engineer</strong> with 9+ years of
              experience building scalable, high-performance web and
              cross-platform applications, with a strong focus on frontend
              architecture, modern web technologies, and engineering
              excellence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-5 flex justify-center md:justify-start"
          >
            <a
              className="rounded-sm bg-gradient-rainblue px-7 py-3 font-semibold text-deep-blue transition duration-500 hover:bg-blue hover:text-white"
              href="#contact"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
            >
              Contact Me
            </a>

            <a
              className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
              href="#contact"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
            >
              <div className="flex h-full w-full items-center justify-center bg-deep-blue px-10 font-playfair transition duration-500 hover:text-red">
                Let&apos;s talk
              </div>
            </a>
          </motion.div>

          <SocialMediaIcons />
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0 },
        }}
        className="mt-5 grid w-full grid-cols-1 gap-x-6 gap-y-7 md:grid-cols-3"
      >
        {aboutClusters.map((cluster) => (
          <article key={cluster.title}>
            <h3 className="mb-[0.35rem] font-playfair text-[1.2rem] font-semibold leading-tight text-yellow">
              {cluster.title}
            </h3>
            <LineGradient width="w-[36%]" />
            <p className="mt-[0.55rem] text-sm leading-[1.7] text-mist">
              {cluster.body}
            </p>
          </article>
        ))}
      </motion.div>
    </section>
  );
};

export default Landing;
