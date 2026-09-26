"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAskMoataz } from "@/hooks/useAskMoataz";
import type { CharacterMood } from "./MoatazCharacter";
import MoatazCharacter from "./MoatazCharacter";
import ChatDrawer from "./ChatDrawer";

const AskMoatazWidget = () => {
  const { messages, phase, error, sendMessage, retry } = useAskMoataz();
  const [open, setOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const lockScroll = useMediaQuery("(max-width: 767px)");

  const mood: CharacterMood =
    phase === "awaiting" ? "thinking" : open ? "listening" : "idle";

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) launcherRef.current?.focus();
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open || !lockScroll) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open, lockScroll]);

  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] z-[41] flex flex-col items-end gap-3 md:right-16">
      <AnimatePresence>
        {open ? (
          <ChatDrawer
            key="ask-moataz-drawer"
            messages={messages}
            phase={phase}
            error={error}
            mood={mood}
            onClose={() => setOpen(false)}
            onSend={(content) => {
              void sendMessage(content);
            }}
            onRetry={retry}
          />
        ) : null}
      </AnimatePresence>

      <button
        ref={launcherRef}
        type="button"
        className="group flex items-center"
        aria-expanded={open}
        aria-controls={open ? "ask-moataz-drawer" : undefined}
        aria-label={open ? "Close Ask Moataz" : "Open Ask Moataz"}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="mr-[-2px] hidden border-2 border-blue bg-deep-blue px-3 py-2 font-playfair text-lg leading-none text-white transition-colors duration-500 group-hover:border-red ss:inline">
          {open ? "Close" : "Ask Moataz"}
        </span>
        <span className="relative block">
          <span className="block h-[4.75rem] w-[4.75rem] overflow-hidden rounded-full border-2 border-blue bg-navy transition-colors duration-500 group-hover:border-red group-hover:shadow-[2px_8px_18px_rgb(44_188_233_/_0.35)]">
            <MoatazCharacter mood={mood} />
          </span>
          <span
            className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-deep-blue bg-yellow"
            aria-hidden="true"
          />
        </span>
        </button>
    </div>
  );
};

export default AskMoatazWidget;
