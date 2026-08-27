"use client";

import { useEffect, useState } from "react";
import DotGroup from "@/components/dotGroup";
import Navbar from "@/components/navbar";
import { SelectedPage } from "@/enums/selectedPage";
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

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const atTop = window.scrollY === 0;
        setIsTopOfPage(atTop);
        if (atTop) setSelectedPage(SelectedPage.Home);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
          <div className="hidden md:block">
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
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
