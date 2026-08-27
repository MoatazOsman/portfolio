"use client";

import { EnvelopeIcon } from "@heroicons/react/24/solid";
import linkedinIcon from "@/assets/linkedin.png";
import githubIcon from "@/assets/github.png";
import whatsAppIcon from "@/assets/whatsapp.png";
import Image from "next/image";

const iconLink =
  "inline-flex h-11 w-11 items-center justify-center transition duration-500 hover:opacity-50 active:opacity-50";

const SocialMediaIcons = () => {
  return (
    <div className="my-10 flex justify-center gap-4 md:justify-start">
      <a
        className={iconLink}
        href="https://www.linkedin.com/in/moataz-mohamed-ahmed/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={linkedinIcon}
          alt="LinkedIn"
          width={30}
          height={30}
          className="h-[30px] w-[30px]"
        />
      </a>

      <a
        className={iconLink}
        href="https://github.com/MoatazOsman"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="h-[30px] w-[30px] invert"
          src={githubIcon}
          alt="GitHub"
          width={30}
          height={30}
        />
      </a>

      <a
        className={iconLink}
        href="mailto:moatazmohamedahmed606@gmail.com"
        aria-label="Email"
      >
        <EnvelopeIcon className="h-[30px] w-[30px]" />
      </a>

      <a
        className={iconLink}
        href="https://wa.me/201068913918"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="h-[30px] w-[30px] invert"
          src={whatsAppIcon}
          alt="WhatsApp"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
