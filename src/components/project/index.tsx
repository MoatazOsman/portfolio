"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  description: string;
  coverImagePath: StaticImageData;
};

const Project = ({ title, description, coverImagePath }: Props) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const projectVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  const overlayStyles =
    "absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue";
  return (
    <motion.div className="relative" variants={projectVariant}>
      <div className={overlayStyles}>
        <p className="text-center font-playfair text-2xl">{title}</p>
        <p className="mt-7">{description}</p>
      </div>

      <Image src={coverImagePath} alt={projectTitle} />
    </motion.div>
  );
};

export default Project;
