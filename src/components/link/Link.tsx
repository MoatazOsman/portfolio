"use client";

import { SelectedPage } from "@/enums/selectedPage";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
  onNavigate?: () => void;
};

const Link = ({ page, selectedPage, setSelectedPage, onNavigate }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isSelected = selectedPage === lowerCasePage;

  return (
    <a
      className={`${isSelected ? "text-yellow" : ""}
       transition duration-500 hover:text-yellow`}
      href={`#${lowerCasePage}`}
      aria-current={isSelected ? "page" : undefined}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        onNavigate?.();
      }}
    >
      {page}
    </a>
  );
};

export default Link;
