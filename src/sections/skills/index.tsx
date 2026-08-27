"use client";

import LineGradient from "@/components/lineGradient";
import { motion } from "framer-motion";
import SkillsImage from "@/assets/skills-image.png";
import AngularImage from "@/assets/angular.svg";
import JavascriptImage from "@/assets/javascript.svg";
import FlutterImage from "@/assets/flutter.svg";
import NodeJSImage from "@/assets/nodejs.svg";
import IonicImage from "@/assets/ionic.svg";
import TypeScriptImage from "@/assets/typescript.svg";
import JenkinsImage from "@/assets/jenkins.svg";
import HtmlImage from "@/assets/html.svg";
import CssImage from "@/assets/css.svg";
import CircleCiImage from "@/assets/circleci.svg";
import ReactJsImage from "@/assets/reactjs.svg";
import NextJsImage from "@/assets/nextjs.svg";
import TailwindCssImage from "@/assets/tailwindcss.svg";
import BootstrapImage from "@/assets/bootstrap.svg";
import RXJSImage from "@/assets/rxjs.svg";
import NestJsImage from "@/assets/nestjs.svg";
import { SelectedPage } from "@/enums/selectedPage";
import Image, { type StaticImageData } from "next/image";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type SkillPair = {
  left: { src: StaticImageData; name: string; className?: string };
  right: { src: StaticImageData; name: string; className?: string };
};

const skillPairs: SkillPair[] = [
  {
    left: { src: AngularImage, name: "Angular" },
    right: { src: RXJSImage, name: "RxJS" },
  },
  {
    left: { src: TypeScriptImage, name: "TypeScript" },
    right: { src: JavascriptImage, name: "JavaScript" },
  },
  {
    left: { src: IonicImage, name: "Ionic" },
    right: { src: FlutterImage, name: "Flutter" },
  },
  {
    left: { src: ReactJsImage, name: "React.js" },
    right: { src: NextJsImage, name: "Next.js", className: "invert" },
  },
  {
    left: { src: NodeJSImage, name: "Node.js" },
    right: { src: NestJsImage, name: "NestJS", className: "h-full w-1/3" },
  },
  {
    left: { src: CssImage, name: "CSS" },
    right: { src: HtmlImage, name: "HTML" },
  },
  {
    left: { src: BootstrapImage, name: "Bootstrap" },
    right: { src: TailwindCssImage, name: "Tailwind CSS" },
  },
  {
    left: { src: CircleCiImage, name: "CircleCI", className: "invert" },
    right: { src: JenkinsImage, name: "Jenkins" },
  },
];

const Skills = ({ setSelectedPage }: Props) => {
  const skillContainerStyles =
    "flex w-full flex-col items-center justify-between gap-3 rounded-2xl border border-blue/25 bg-navy p-5 transition duration-500 hover:border-red hover:bg-red-surface";
  const skillStyles =
    "flex w-full sm:max-w-[calc(50%-1rem)] sm:basis-4/4 md:basis-1/4";
  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };
  const skillVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="skills" className="my-auto scroll-mt-24 pb-24 pt-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        className="mt-32 md:flex md:justify-between md:gap-16"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/3"
        >
          <h2 className="mb-5 font-playfair text-4xl font-semibold">
            MY <span className="text-red">SKILLS</span>
          </h2>
          <LineGradient width="w-1/3" />
          <p className="mb-7 mt-10 text-mist">
            These are the tools I have used across 9+ years of production work.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          <div
            className="relative z-0 before:absolute before:-left-10 before:-top-10
          before:z-[-1] before:hidden before:h-full before:w-full before:border-2 before:border-blue md:ml-20 md:before:block"
          >
            <Image className="z-10" src={SkillsImage} alt="" />
          </div>
        </div>
      </motion.div>

      <div className="mt-16 md:flex md:justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={containerVariant}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-wrap gap-8 md:flex-nowrap">
            {skillPairs.slice(0, 4).map((pair) => (
              <motion.div
                key={`${pair.left.name}-${pair.right.name}`}
                variants={skillVariant}
                className={skillStyles}
              >
                <div className={skillContainerStyles}>
                  <div className="flex h-full w-full items-center justify-center">
                    {[pair.left, pair.right].map((skill) => (
                      <div
                        key={skill.name}
                        className="flex h-full basis-1/2 flex-col items-center justify-between gap-5"
                      >
                        <Image
                          src={skill.src}
                          alt=""
                          className={`w-1/2 ${skill.className ?? ""}`}
                        />
                        <p className="font-semibold">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 md:flex-nowrap">
            {skillPairs.slice(4).map((pair) => (
              <motion.div
                key={`${pair.left.name}-${pair.right.name}`}
                variants={skillVariant}
                className={skillStyles}
              >
                <div className={skillContainerStyles}>
                  <div className="flex h-full w-full items-center justify-center">
                    {[pair.left, pair.right].map((skill) => (
                      <div
                        key={skill.name}
                        className="flex h-full basis-1/2 flex-col items-center justify-between gap-5"
                      >
                        <Image
                          src={skill.src}
                          alt=""
                          className={`w-1/2 ${skill.className ?? ""}`}
                        />
                        <p className="font-semibold">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
