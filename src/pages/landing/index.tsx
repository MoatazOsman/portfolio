import { SelectedPage } from "@/enums/selectedPage";
import useMediaQuery from "@/hooks/useMediaQuery";
import MoatazProfileImage from "@/assets/moataz.png";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "@/components/socialMediaIcons";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Landing = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="gap-16 py-10 md:flex md:h-full md:items-center md:justify-between"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32"
      >
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-left-20 before:-top-20
          before:z-[-1] before:h-full before:w-full before:max-w-[400px] before:rounded-t-[400px] before:border-2 before:border-blue"
          >
            <img
              className="z-10 w-full max-w-[400px] transition duration-500 hover:saturate-200
              hover:filter md:max-w-[600px]"
              src={MoatazProfileImage}
              alt="Profile Picture"
            />
          </div>
        ) : (
          <img
            className="z-10 w-full max-w-[400px] transition duration-500 hover:saturate-200
            hover:filter md:max-w-[600px]"
            src={MoatazProfileImage}
            alt="Profile Picture"
          />
        )}
      </motion.div>

      {/* MAIN SECTION */}

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
          <p className="z-10 whitespace-nowrap text-center font-playfair text-6xl md:order-1  md:text-start">
            Moataz {""}
            <span
              className="z-20 whitespace-pre-line before:absolute before:-left-[25px] before:-top-[70px]
              before:z-[-1] xs:relative xs:font-semibold xs:text-deep-blue xs:before:content-brush"
            >
              Osman
            </span>
          </p>

          <p className="mb-7 mt-10 text-center text-sm leading-6 md:text-start md:text-lg md:leading-8">
            <strong>Software developer</strong> (Frontend | Mobile) with more
            than 7+ years experience in software development and i have a very
            good knowledge in these fields (Angular, React.js, Next.js, Ionic,
            Flutter, Capacitor, Cordova, Fastlane, AngularJs, NodeJs, NestJs,
            Javascript, ES6, Typescript, html, css, html5, css3, bootstrap,
            Tailwind CSS, Git, Jenkins, CircleCi, Rest API, MongoDB, MySQL,
            Firebase, Netlify, Vercel, Heroku, Google Maps, Transit Maps,
            Fintech, SEO)
          </p>
        </motion.div>

        {/* Contact */}
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
          <AnchorLink
            className="rounded-sm bg-gradient-rainblue px-7 py-3 font-semibold text-deep-blue transition duration-500 hover:bg-blue hover:text-white"
            href="#contact"
            onClick={() => setSelectedPage(SelectedPage.Contact)}
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className=" rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            href="#contact"
            onClick={() => setSelectedPage(SelectedPage.Contact)}
          >
            <div className="flex h-full w-full items-center justify-center bg-deep-blue px-10 font-playfair transition duration-500 hover:text-red">
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div>
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
