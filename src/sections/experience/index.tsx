"use client";

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

const storeAlt = (type: STORE) => {
  if (type === STORE.GOOGLE_PLAY) return "google-play";
  if (type === STORE.APPSTORE) return "appstore";
  if (type === STORE.APP_GALLERY) return "Huawei App Gallery";
  return "web";
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
                    <div className="flex h-5 items-center rounded-br-[50%] rounded-tr-[50%] bg-blue px-4 py-4 text-center max-sm:mb-[15px] max-sm:justify-center max-sm:rounded-br-[0%] max-sm:rounded-tr-[0%]">
                      <p className="m-0 text-center">{experience.date}</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center gap-8 max-sm:gap-4">
                        <div className="flex items-center">
                          <div className="h-[30px] w-[30px] rounded-full bg-yellow shadow-3xl shadow-yellow"></div>
                        </div>
                        <p className="text-3xl font-semibold max-xs:text-2xl">
                          {experience.title}
                        </p>
                      </div>
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
                          {experience.projects.map((project, projectIndex) => {
                            return (
                              <motion.ul
                                key={`project-${projectIndex}`}
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

                                  {!!project.stores?.length && (
                                    <div className="flex items-center gap-4">
                                      <p className="">view it on:</p>
                                      {project.stores.map((store, storeIndex) => {
                                        return (
                                          <a
                                            key={`store-${storeIndex}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            href={store.url}
                                            className={`${
                                              store.type === STORE.WEB
                                                ? "max-sm:w-[60px]"
                                                : ""
                                            }`}
                                          >
                                            <Image
                                              src={storeImage(store.type)}
                                              alt={storeAlt(store.type)}
                                              width={100}
                                              height={40}
                                              className="h-auto w-[100px]"
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
