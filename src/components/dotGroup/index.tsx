"use client";

import { SelectedPage } from "@/enums/selectedPage";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const selectedStyles = `relative bg-yellow before:absolute before:left-[-50%] before:top-[-50%] before:h-6 before:w-6 before:rounded-full before:border-2 before:border-yellow`;

const DotGroup = ({ selectedPage, setSelectedPage }: Props) => {
  const dots = [
    { page: SelectedPage.Home, label: "Home" },
    { page: SelectedPage.Skills, label: "Skills" },
    { page: SelectedPage.Experiences, label: "Experiences" },
    { page: SelectedPage.Contact, label: "Contact" },
  ];

  return (
    <div className="fixed right-[max(0.5rem,env(safe-area-inset-right,0px))] top-[60%] z-30 flex flex-col">
      {dots.map(({ page, label }) => (
        <a
          key={page}
          className="flex h-11 w-11 items-center justify-center"
          href={`#${page}`}
          onClick={() => setSelectedPage(page)}
          aria-label={label}
          aria-current={selectedPage === page ? "true" : undefined}
        >
          <span
            className={`${selectedPage === page ? selectedStyles : "bg-dark-grey"} h-3 w-3 rounded-full`}
          />
        </a>
      ))}
    </div>
  );
};

export default DotGroup;
