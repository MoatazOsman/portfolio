import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/enums/selectedPage";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "../link/Link";
import { useState } from "react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isMenusToggled, setIsMenuToggled] = useState(false);
  const navbarBg = isTopOfPage ? "" : "bg-red";

  const links: JSX.Element = (
    <>
      <Link
        page="Home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Link
        page="Skills"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* <Link
        page="Projects"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      /> */}
      <Link
        page="Experiences"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Contact"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  );
  return (
    <nav className={`${navbarBg} fixed top-0 z-40 w-full py-6`}>
      <div className="mx-auto flex w-5/6 items-center justify-between">
        <h4 className="font-playfair text-3xl font-bold text-white">MO</h4>

        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {links}
          </div>
        ) : (
          <button
            className=" rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenusToggled)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}

        {!isDesktop && isMenusToggled && (
          <div className="fixed bottom-0 right-0 h-full w-[300px] bg-blue">
            <div className="flex justify-end p-8">
              <button
                className=" rounded-full  p-2"
                onClick={() => setIsMenuToggled(!isMenusToggled)}
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="flex flex-col items-center gap-10 text-2xl text-deep-blue">
              {links}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
