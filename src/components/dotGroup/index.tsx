import { SelectedPage } from "@/enums/selectedPage";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const DotGroup = ({ selectedPage, setSelectedPage }: Props) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="fixed right-7 top-[60%] flex flex-col gap-6">
      <AnchorLink
        className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"}
       h-3 w-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage(SelectedPage.Home)}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
        }
       h-3 w-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage(SelectedPage.Skills)}
      ></AnchorLink>
      {/* <AnchorLink
        className={`${selectedPage === "projects" ? selectedStyles : "bg-dark-grey"}
       h-3 w-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage(SelectedPage.Projects)}
      ></AnchorLink> */}

      <AnchorLink
        className={`${
          selectedPage === "experiences" ? selectedStyles : "bg-dark-grey"
        }
       h-3 w-3 rounded-full`}
        href="#experiences"
        onClick={() => setSelectedPage(SelectedPage.Experiences)}
      ></AnchorLink>

      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        }
       h-3 w-3 rounded-full`}
        href="#contact"
        onClick={() => setSelectedPage(SelectedPage.Contact)}
      ></AnchorLink>
    </div>
  );
};

export default DotGroup;
