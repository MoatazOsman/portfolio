import LineGradient from "@/components/lineGradient";
import useMediaQuery from "@/hooks/useMediaQuery";
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

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Skills = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const skillContainerStyles =
    "flex flex-col items-center justify-between gap-3 rounded-2xl bg-gray-900 p-5 transition duration-500 hover:bg-red w-full";

  const skillStyles =
    "flex md:basis-1/4 sm:max-w-[calc(50%-1rem)] w-full sm:basis-4/4";
  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
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
    <section id="skills" className="my-auto pb-24 pt-10">
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
          <p className="mb-5 font-playfair text-4xl font-semibold">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mb-7 mt-10">
            Below are most of the skills that I have gained during the past 6
            years of working.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-left-10 before:-top-10
          before:z-[-1] before:h-full before:w-full before:border-2 before:border-blue"
            >
              <img className="z-10" src={SkillsImage} alt="Skills" />
            </div>
          ) : (
            <img className="z-10" src={SkillsImage} alt="Skills" />
          )}
        </div>
      </motion.div>

      {/* SKILLS */}
      <div className="mt-16 gap-32 md:flex md:justify-between">
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 md:w-1/3"
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-5xl font-semibold">01</p>
              <p className="mt-3 font-playfair text-3xl font-semibold">
                Experience
              </p>
            </div>

            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-blue md:w-3/4"></div>
          </div>
          <p className="mt-5">
            Lorem ipsum text text, Lorem ipsum text text, Lorem ipsum text text,
            Lorem ipsum text text
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 md:w-1/3"
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-5xl font-semibold">02</p>
              <p className="mt-3 font-playfair text-3xl font-semibold">
                Innovative
              </p>
            </div>

            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-red md:w-3/4"></div>
          </div>
          <p className="mt-5">
            Lorem ipsum text text, Lorem ipsum text text, Lorem ipsum text text,
            Lorem ipsum text text
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 md:w-1/3"
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-5xl font-semibold">03</p>
              <p className="mt-3 font-playfair text-3xl font-semibold">
                Imaginative
              </p>
            </div>

            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-yellow md:w-3/4"></div>
          </div>
          <p className="mt-5">
            Lorem ipsum text text, Lorem ipsum text text, Lorem ipsum text text,
            Lorem ipsum text text
          </p>
        </motion.div> */}

        {/* LOGOS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariant}
          className="flex flex-col gap-8"
        >
          <div className="flex gap-8 max-md:flex-wrap md:flex-nowrap">
            <motion.div variants={skillVariant} className={skillStyles}>
              <div className={skillContainerStyles}>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img src={AngularImage} alt="Angular" className="w-1/2" />
                    <p className=" font-semibold">Angular</p>
                  </div>
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img src={RXJSImage} alt="RXJS" className="w-1/2" />
                    <p className=" font-semibold">RxJS</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={skillVariant} className={skillStyles}>
              <div className={skillContainerStyles}>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="justify- flex h-full basis-1/2 flex-col items-center gap-5">
                    <img
                      src={TypeScriptImage}
                      alt="TypeScript"
                      className="w-1/2"
                    />
                    <p className=" font-semibold">Typescript</p>
                  </div>
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img
                      src={JavascriptImage}
                      alt="Javascript"
                      className="w-1/2"
                    />
                    <p className=" font-semibold">Javascript</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={skillVariant} className={skillStyles}>
              <div className={skillContainerStyles}>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img src={IonicImage} alt="Ionic" className="w-1/2" />
                    <p className=" font-semibold">Ionic</p>
                  </div>
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img src={FlutterImage} alt="Flutter" className="w-1/2" />
                    <p className=" font-semibold">Flutter</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={skillVariant} className={skillStyles}>
              <div className={skillContainerStyles}>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img src={ReactJsImage} alt="Reactjs" className="w-1/2" />
                    <p className=" font-semibold">React.js</p>
                  </div>
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img
                      src={NextJsImage}
                      alt="Nextjs"
                      className="w-1/2 invert"
                    />
                    <p className=" font-semibold">Next.js</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-8 max-md:flex-wrap md:flex-nowrap">
            <motion.div variants={skillVariant} className={skillStyles}>
              <div className={skillContainerStyles}>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img src={NodeJSImage} alt="Node.js" className="w-1/2" />
                    <p className=" font-semibold">Node.js</p>
                  </div>
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img
                      src={NestJsImage}
                      alt="NestJS"
                      className="h-full w-1/3 justify-self-center"
                    />
                    <p className=" font-semibold">NestJS</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={skillVariant} className={skillStyles}>
              <div className={skillContainerStyles}>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img src={CssImage} alt="CSS" className="w-1/2" />
                    <p className=" font-semibold">CSS</p>
                  </div>
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img src={HtmlImage} alt="HTML" className="w-1/2" />
                    <p className=" font-semibold">HTML</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={skillVariant} className={skillStyles}>
              <div className={skillContainerStyles}>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img
                      src={BootstrapImage}
                      alt="Bootstrap"
                      className="w-1/2"
                    />
                    <p className=" font-semibold">Bootstrap</p>
                  </div>
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img
                      src={TailwindCssImage}
                      alt="Tainwindcss"
                      className="h-full w-1/2 justify-self-center"
                    />
                    <p className=" font-semibold">Tainwindcss</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={skillVariant} className={skillStyles}>
              <div className={skillContainerStyles}>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img
                      src={CircleCiImage}
                      alt="Circleci"
                      className="w-1/2 invert"
                    />
                    <p className="font-semibold">Circleci</p>
                  </div>
                  <div className="flex h-full basis-1/2 flex-col items-center justify-between gap-5">
                    <img src={JenkinsImage} alt="Jenkins" className="w-1/2" />
                    <p className="font-semibold">Jenkins</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
