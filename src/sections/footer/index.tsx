import SocialMediaIcons from "@/components/socialMediaIcons";

const Footer = () => {
  return (
    <footer className="bg-red-surface pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)] pt-10">
      <div className="mx-auto w-10/12">
        <SocialMediaIcons />

        <div className="justify-center md:flex md:justify-between">
          <div className="max-md:text-center">
            <p className="mb-3 font-playfair text-2xl font-semibold text-yellow">
              MOATAZ OSMAN
            </p>
            <a
              href="mailto:moatazmohamedahmed606@gmail.com"
              className="inline-flex min-h-11 items-center break-all text-yellow transition duration-500 hover:text-white"
            >
              moatazmohamedahmed606@gmail.com
            </a>
          </div>
          <p className="text-md font-playfair text-yellow max-md:mt-4 max-md:text-center">
            ©{new Date().getFullYear()} OSMAN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
