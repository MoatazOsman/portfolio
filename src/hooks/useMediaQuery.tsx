"use client";

import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
