import LineGradient from "@/components/lineGradient";
import { motion } from "framer-motion";
import AppStoreImage from "@/assets/appstore.svg";
import GooglePlayImage from "@/assets/google-play.svg";
import AppGalleryImage from "@/assets/app-gallery-store.svg";
import WebImage from "@/assets/web.svg";
import { EXPERIENCES } from "@/data/experience";
import { STORE } from "@/models/experience";
import { Fragment } from "react";
import { SelectedPage } from "@/enums/selectedPage";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Experience = ({ setSelectedPage }: Props) => {
  return (
    <section id="experiences" className="pb-16 pt-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}
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
          className="text-center md:w-1/3 md:text-left"
        >
          <p className="mb-5 font-playfair text-4xl font-semibold text-red">
            EXPERIENCE
          </p>
          <LineGradient width="mx-auto w-2/4" />
          {/* <p className="mt-10">
          Here's What is My experience over the 6 past years until now for
          different companies.
        </p> */}
        </motion.div>

        <div className="p-16 max-sm:p-8">
          {EXPERIENCES.map((experience, index) => {
            return (
              <Fragment key={`experience-${index}`}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="mb-20 flex flex-col"
                >
                  <div className="flex flex-row gap-4 max-sm:flex-col">
                    {/* Date */}
                    <div className="flex h-5 items-center rounded-br-[50%] rounded-tr-[50%] bg-blue px-4 py-4 text-center max-sm:rounded-br-[0%] max-sm:rounded-tr-[0%] max-sm:justify-center max-sm:mb-[15px]">
                      <p className="m-0 text-center">{experience.date}</p>
                    </div>
                    <div className="flex flex-col">
                      {/* Position */}
                      <div className="flex flex-row items-center gap-8 max-sm:gap-4">
                        <div className="flex items-center">
                          <div className="h-[30px] w-[30px] rounded-full bg-yellow shadow-3xl shadow-yellow"></div>
                        </div>
                        <p className="text-3xl font-semibold max-xs:text-2xl">
                          {experience.title}
                        </p>
                      </div>
                      {/* Company and brief */}
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className="ml-[15px] mt-4 flex flex-row items-center border-l-2"
                      >
                        <div className="ml-8 flex flex-col pl-[15px] max-sm:pl-[0px]">
                          <p className="text-xl max-xs:text-lg">
                            {experience.companyName}, {experience.companyRegion}
                          </p>
                          <p className=" mt-2 text-lg text-gray-400 max-xs:text-sm">
                            {experience.description}
                          </p>

                          <p className="mt-4 font-playfair text-lg font-semibold">
                            Projects: {experience.projects.length}
                          </p>
                          {/* Projects */}
                          {experience.projects.map((project, index) => {
                            return (
                              <motion.ul
                                key={`project-${index}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                variants={{
                                  hidden: { opacity: 0, x: -50 },
                                  visible: { opacity: 1, x: 0 },
                                }}
                                className="mt-2 list-inside list-disc"
                              >
                                <li className="text-gray-400">
                                  <span className="font-bold text-red">
                                    {project.title}:{" "}
                                  </span>
                                  {project.description}

                                  {project.stores?.length && (
                                    <div className="flex items-center gap-4">
                                      <p className="">view it on:</p>
                                      {project.stores.map((store, index) => {
                                        return (
                                          <a
                                            key={`store-${index}`}
                                            target="_blank"
                                            href={store.url}
                                            className={`${store.type === STORE.WEB ? 'max-sm:w-[60px]' : ''}`}
                                          >
                                            <img
                                              src={
                                                store.type === STORE.GOOGLE_PLAY
                                                  ? GooglePlayImage
                                                  : store.type ===
                                                    STORE.APPSTORE
                                                  ? AppStoreImage
                                                  : store.type ===
                                                    STORE.APP_GALLERY
                                                  ? AppGalleryImage
                                                  : WebImage
                                              }
                                              alt={
                                                store.type === STORE.GOOGLE_PLAY
                                                  ? "google-play"
                                                  : store.type ===
                                                    STORE.APPSTORE
                                                  ? "appstore"
                                                  : store.type ===
                                                    STORE.APP_GALLERY
                                                  ? "Huawei App Gallery"
                                                  : "web"
                                              }
                                              width={100}
                                            />
                                          </a>
                                        );
                                      })}
                                    </div>
                                  )}
                                </li>
                              </motion.ul>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Fragment>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
