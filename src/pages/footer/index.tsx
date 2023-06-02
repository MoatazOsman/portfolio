import SocialMediaIcons from "@/components/socialMediaIcons";


const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="mx-auto w-10/12">
        <SocialMediaIcons />

        <div className="justify-center md:flex md:justify-between">
          <div className="max-md:text-center">
            <p className="font-playfair text-2xl font-semibold text-yellow mb-3">
              MOATAZ OSMAN
            </p>
            <a
              href="mailto:moatazmohamedahmed606@gmail.com"
              className="text-yellow hover:text-deep-blue transition duration-500"
            >
              moatazmohamedahmed606@gmail.com
            </a>
          </div>
          <p className="text-md font-playfair text-yellow max-md:text-center">
            ©2023 OSMAN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
