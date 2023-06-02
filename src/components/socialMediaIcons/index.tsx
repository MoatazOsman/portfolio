import linkedinIcon from "@/assets/linkedin.png";
import facebookIcon from "@/assets/facebook.png";
import githubIcon from "@/assets/github.png";
import whatsAppIcon from "@/assets/whatsapp.png";

const SocialMediaIcons = () => {
  return (
    <div className="my-10 flex justify-center gap-7 md:justify-start">
      <a
        className="transition duration-500 hover:opacity-50"
        href="http://www.linkedin.com/in/moataz-mohamed-ahmed/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} alt="linkedin-link" />
      </a>

      <a
        className="transition duration-500 hover:opacity-50"
        href="https://github.com/MoatazOsman"
        target="_blank"
        rel="noreferrer"
      >
        <img className="invert" src={githubIcon} alt="github-link" />
      </a>

      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.facebook.com/mezo.wiza/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebookIcon} alt="facebook-link" />
      </a>

      <a
        className="transition duration-500 hover:opacity-50"
        href="https://wa.me/201068913918"
        target="_blank"
        rel="noreferrer"
      >
        <img className="invert" src={whatsAppIcon} alt="whatsapp-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
