"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/enums/selectedPage";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "../link/Link";
import { useEffect, useState, type ReactElement } from "react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBg = isTopOfPage ? "" : "bg-red-surface";

  useEffect(() => {
    if (isDesktop) setIsMenuToggled(false);
  }, [isDesktop]);

  useEffect(() => {
    if (!isMenuToggled) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuToggled(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuToggled]);

  const closeMenu = () => setIsMenuToggled(false);

  const links: ReactElement = (
    <>
      <Link
        page="Home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        onNavigate={closeMenu}
      />
      <Link
        page="Skills"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        onNavigate={closeMenu}
      />
      <Link
        page="Experiences"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        onNavigate={closeMenu}
      />
      <Link
        page="Contact"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        onNavigate={closeMenu}
      />
    </>
  );

  return (
    <nav className={`${navbarBg} fixed top-0 z-40 w-full py-6`}>
      <div className="mx-auto flex w-5/6 items-center justify-between">
        <a
          href="#home"
          className="font-playfair text-3xl font-bold text-white"
          onClick={() => setSelectedPage(SelectedPage.Home)}
        >
          MO
        </a>

        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {links}
          </div>
        ) : (
          <button
            type="button"
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(true)}
            aria-label="Open menu"
            aria-expanded={isMenuToggled}
            aria-controls="mobile-nav"
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        )}

        {!isDesktop && isMenuToggled && (
          <>
            <div
              className="fixed inset-0 z-40 bg-opaque-black"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <div
              id="mobile-nav"
              className="fixed bottom-0 right-0 z-50 h-full w-[min(300px,85vw)] bg-blue"
            >
              <div className="flex justify-end p-8">
                <button
                  type="button"
                  className="rounded-full p-2"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6 text-white" />
                </button>
              </div>

              <div className="flex flex-col items-center gap-10 text-2xl text-deep-blue">
                {links}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
