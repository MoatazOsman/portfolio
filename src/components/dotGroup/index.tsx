"use client";

import { SelectedPage } from "@/enums/selectedPage";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const DotGroup = ({ selectedPage, setSelectedPage }: Props) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  const dots = [
    { page: SelectedPage.Home, label: "Home" },
    { page: SelectedPage.Skills, label: "Skills" },
    { page: SelectedPage.Experiences, label: "Experiences" },
    { page: SelectedPage.Contact, label: "Contact" },
  ];

  return (
    <div className="fixed right-7 top-[60%] z-30 flex flex-col gap-6 p-2">
      {dots.map(({ page, label }) => (
        <a
          key={page}
          className={`${selectedPage === page ? selectedStyles : "bg-dark-grey"}
       h-3 w-3 rounded-full`}
          href={`#${page}`}
          onClick={() => setSelectedPage(page)}
          aria-label={label}
          aria-current={selectedPage === page ? "true" : undefined}
        />
      ))}
    </div>
  );
};

export default DotGroup;
