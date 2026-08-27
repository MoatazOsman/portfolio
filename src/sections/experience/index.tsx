"use client";

import LineGradient from "@/components/lineGradient";
import { motion } from "framer-motion";
import AppStoreImage from "@/assets/appstore.svg";
import GooglePlayImage from "@/assets/google-play.svg";
import AppGalleryImage from "@/assets/app-gallery-store.svg";
import WebImage from "@/assets/web.svg";
import { EXPERIENCES } from "@/data/experience";
import { STORE } from "@/models/experience";
import { SelectedPage } from "@/enums/selectedPage";
import Image from "next/image";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const storeImage = (type: STORE) => {
  if (type === STORE.GOOGLE_PLAY) return GooglePlayImage;
  if (type === STORE.APPSTORE) return AppStoreImage;
  if (type === STORE.APP_GALLERY) return AppGalleryImage;
  return WebImage;
};

const storeLabel = (type: STORE) => {
  if (type === STORE.GOOGLE_PLAY) return "Google Play";
  if (type === STORE.APPSTORE) return "the App Store";
  if (type === STORE.APP_GALLERY) return "AppGallery";
  return "the web";
};

const Experience = ({ setSelectedPage }: Props) => {
  return (
    <section id="experiences" className="scroll-mt-24 pb-16 pt-32">
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
          className="px-8 text-center md:w-1/3 md:px-0 md:text-left"
        >
          <h2 className="mb-5 font-playfair text-4xl font-semibold text-red">
            EXPERIENCE
          </h2>
          <LineGradient width="mx-auto w-2/4 md:mx-0" />
        </motion.div>

        <div className="p-16 max-sm:p-8">
          {EXPERIENCES.map((experience, index) => {
            return (
              <motion.div
                key={`experience-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mb-20 flex flex-col"
              >
                <div className="flex flex-row gap-4 max-sm:flex-col">
                  <div className="flex h-5 items-center rounded-br-[50%] rounded-tr-[50%] bg-blue px-4 py-4 text-center max-sm:mb-[15px] max-sm:justify-center max-sm:rounded-br-[0%] max-sm:rounded-tr-[0%]">
                    <p className="m-0 text-center font-semibold text-deep-blue">
                      {experience.date}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-8 max-sm:gap-4">
                      <div className="flex items-center">
                        <div className="h-[30px] w-[30px] rounded-full bg-yellow shadow-3xl shadow-yellow"></div>
                      </div>
                      <h3 className="text-3xl font-semibold max-xs:text-2xl">
                        {experience.title}
                      </h3>
                    </div>
                    <div className="ml-[15px] mt-4 flex flex-row items-center border-l-2 border-white/40">
                      <div className="ml-8 flex flex-col pl-[15px] max-sm:pl-[0px]">
                        <p className="text-xl max-xs:text-lg">
                          {experience.companyName}, {experience.companyRegion}
                        </p>
                        <p className="mt-2 text-lg text-mist max-xs:text-sm">
                          {experience.description}
                        </p>

                        <p className="mt-4 font-playfair text-lg font-semibold">
                          Projects: {experience.projects.length}
                        </p>
                        {experience.projects.map((project, projectIndex) => {
                          return (
                            <ul
                              key={`project-${projectIndex}`}
                              className="mt-2 list-inside list-disc"
                            >
                              <li className="text-mist">
                                <span className="font-bold text-red">
                                  {project.title}:{" "}
                                </span>
                                {project.description}

                                {!!project.stores?.length && (
                                  <div className="mt-2 flex flex-wrap items-center gap-4">
                                    <p>View it on:</p>
                                    {project.stores.map((store, storeIndex) => {
                                      const label = `View ${project.title} on ${storeLabel(store.type)}`;
                                      return (
                                        <a
                                          key={`store-${storeIndex}`}
                                          target="_blank"
                                          rel="noreferrer"
                                          href={store.url}
                                          aria-label={label}
                                          className="inline-flex shrink-0"
                                        >
                                          <Image
                                            src={storeImage(store.type)}
                                            alt=""
                                            width={100}
                                            height={40}
                                            className="h-10 w-auto max-w-[100px]"
                                          />
                                        </a>
                                      );
                                    })}
                                  </div>
                                )}
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
