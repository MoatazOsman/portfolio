import { useEffect, useState } from "react";
import DotGroup from "./components/dotGroup";
import Navbar from "./components/navbar";
import { SelectedPage } from "./enums/selectedPage";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./pages/landing";
import LineGradient from "./components/lineGradient";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import Experience from "./pages/experience";

function App() {
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
    // when component unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
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
      {/* <LineGradient />
      <div className="mx-auto w-5/6">
        <Projects />
      </div> */}

      <LineGradient />
      <div className="mx-auto w-5/6 max-md:w-full">
        <Experience setSelectedPage={setSelectedPage} />
      </div>

      {/* <div className="mx-auto w-5/6 md:h-full">
        <Testimonials />
      </div> */}
      <LineGradient />
      <div className="mx-auto w-5/6 md:h-full">
        <Contact setSelectedPage={setSelectedPage} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
