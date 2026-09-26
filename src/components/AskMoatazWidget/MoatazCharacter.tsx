"use client";

import { useId } from "react";

export type CharacterMood = "idle" | "listening" | "thinking";

type Props = {
  mood?: CharacterMood;
  className?: string;
};

/**
 * Flat portrait of the Ask Moataz host.
 * Built for a circular crop: hair mass, mist face, magenta jacket, cyan arch.
 */
const MoatazCharacter = ({ mood = "idle", className }: Props) => {
  const clipId = `ask-head-${useId().replace(/:/g, "")}`;
  const engaged = mood === "listening" || mood === "thinking";

  return (
    <svg
      viewBox="0 0 96 96"
      className={`ask-character h-full w-full ${className ?? ""}`}
      data-mood={mood}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="48" cy="48" r="48" fill="#0B1238" />
      <path
        className="ask-character-arch"
        d="M18 60C18 28 30 16 48 16s30 12 30 44"
        fill="none"
        stroke="#2CBCE9"
        strokeWidth="2"
      />
      <path d="M4 80c12-18 26-24 44-24s32 6 44 24v20H4V80z" fill="#9C3068" />
      <path d="M40 68h16v14H40z" fill="#C4D2E8" />
      <path d="M36 74h24l-5 14H41L36 74z" fill="#010026" />
      <circle cx="60" cy="86" r="2.2" fill="#FDCC49" />
      <ellipse cx="26" cy="50" rx="3.5" ry="5.5" fill="#C4D2E8" />
      <ellipse cx="70" cy="50" rx="3.5" ry="5.5" fill="#C4D2E8" />
      <ellipse cx="48" cy="46" rx="20" ry="22" fill="#C4D2E8" />
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M27 46c.5-16 8-24 21-24s20.5 8 21 24c-2-9-9-14-21-14s-19 5-21 14z"
          fill="#010026"
        />
        <path
          d="M30 42c2 6 5 10 9 11-4-2-7-6-9-11z"
          fill="#010026"
        />
        <path d="M40 24c4 6 5 12 3 18" fill="none" stroke="#2CBCE9" strokeWidth="1.7" strokeLinecap="round" />
      </g>
      <g className="ask-character-eyes">
        <ellipse cx="40" cy="49" rx="3.2" ry="3.7" fill="#010026" />
        <circle cx="41.2" cy="47.8" r="1" fill="#FDCC49" />
      </g>
      <g className="ask-character-eyes">
        <ellipse cx="56" cy="49" rx="3.2" ry="3.7" fill="#010026" />
        <circle cx="57.2" cy="47.8" r="1" fill="#FDCC49" />
      </g>
      <path d="M33.5 43.5c2.2-2 5.2-2 7.2 0" fill="none" stroke="#010026" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M55 43.5c2.2-2 5.2-2 7.2 0" fill="none" stroke="#010026" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M48 52.5v6.5" fill="none" stroke="#010026" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
      {engaged ? (
        <path
          d="M40 62.5c2.6 3.6 13 3.6 16 0"
          fill="none"
          stroke="#DC4492"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M41.5 62.5c2 2.2 11 2.2 13.2 0"
          fill="none"
          stroke="#DC4492"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
      <defs>
        <clipPath id={clipId}>
          <ellipse cx="48" cy="46" rx="20" ry="22" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MoatazCharacter;
