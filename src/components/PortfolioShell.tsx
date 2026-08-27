"use client";

import { useEffect, useState } from "react";
import DotGroup from "@/components/dotGroup";
import Navbar from "@/components/navbar";
import { SelectedPage } from "@/enums/selectedPage";
import useMediaQuery from "@/hooks/useMediaQuery";
import Landing from "@/sections/landing";
import LineGradient from "@/components/lineGradient";
import Skills from "@/sections/skills";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import Experience from "@/sections/experience";

export default function PortfolioShell() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <main>
        <div className="mx-auto w-5/6 md:h-full">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
        <div className="mx-auto w-5/6">
          <Skills setSelectedPage={setSelectedPage} />
        </div>

        <LineGradient />
        <div className="mx-auto w-5/6 max-md:w-full">
          <Experience setSelectedPage={setSelectedPage} />
        </div>

        <LineGradient />
        <div className="mx-auto w-5/6 md:h-full">
          <Contact setSelectedPage={setSelectedPage} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
