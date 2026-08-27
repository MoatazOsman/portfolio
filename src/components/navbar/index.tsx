"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/enums/selectedPage";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "../link/Link";
import { useEffect, useRef, useState, type ReactElement } from "react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const FOCUSABLE = "a[href], button:not([disabled])";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBg = isTopOfPage ? "" : "bg-red-surface";
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const wasMenuOpen = useRef(false);

  useEffect(() => {
    if (isDesktop) setIsMenuToggled(false);
  }, [isDesktop]);

  useEffect(() => {
    if (!isMenuToggled) {
      document.body.style.overflow = "";
      if (wasMenuOpen.current) {
        hamburgerRef.current?.focus();
        wasMenuOpen.current = false;
      }
      return;
    }

    wasMenuOpen.current = true;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const skip = document.querySelector(".skip-link");
    const bar = document.getElementById("nav-bar");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    skip?.setAttribute("inert", "");
    bar?.setAttribute("inert", "");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuToggled(false);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusables = [
        ...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ];
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      skip?.removeAttribute("inert");
      bar?.removeAttribute("inert");
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
    <nav
      className={`${navbarBg} fixed top-0 z-40 w-full pb-6 pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)] pt-[max(1.5rem,env(safe-area-inset-top,0px))]`}
    >
      <div
        id="nav-bar"
        className="mx-auto flex w-5/6 items-center justify-between"
      >
        <a
          href="#home"
          className="inline-flex min-h-11 items-center font-playfair text-3xl font-bold text-white"
          onClick={() => setSelectedPage(SelectedPage.Home)}
        >
          MO
        </a>

        <div className="hidden justify-between gap-16 font-opensans text-sm font-semibold sm:flex">
          {links}
        </div>

        <button
          ref={hamburgerRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-red sm:hidden"
          onClick={() => setIsMenuToggled(true)}
          aria-label="Open menu"
          aria-expanded={isMenuToggled}
          aria-controls="mobile-nav"
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      {isMenuToggled && (
        <div
          ref={dialogRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex h-full flex-col bg-red-surface pb-[env(safe-area-inset-bottom,0px)] pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)] pt-[env(safe-area-inset-top,0px)]"
        >
          <div className="flex justify-end p-8">
            <button
              ref={closeButtonRef}
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 px-6 text-2xl font-semibold text-white">
            {links}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
