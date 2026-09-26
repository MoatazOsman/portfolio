"use client";

import { FormEvent, KeyboardEvent as ReactKeyboardEvent, useEffect, useId, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion, useReducedMotion } from "framer-motion";
import LineGradient from "@/components/lineGradient";
import type { AskPhase, ChatMessage } from "@/hooks/useAskMoataz";
import type { CharacterMood } from "./MoatazCharacter";
import MoatazCharacter from "./MoatazCharacter";
import MessageList from "./MessageList";
import QuickPrompts from "./QuickPrompts";

type Props = {
  messages: ChatMessage[];
  phase: AskPhase;
  error: string | null;
  mood: CharacterMood;
  onClose: () => void;
  onSend: (content: string) => void;
  onRetry: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled])';

const ChatDrawer = ({
  messages,
  phase,
  error,
  mood,
  onClose,
  onSend,
  onRetry,
}: Props) => {
  const titleId = useId();
  const drawerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const reduceMotion = useReducedMotion();
  const awaiting = phase === "awaiting";
  const showPrompts = messages.length === 0 && !awaiting;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusables = [...drawer.querySelectorAll<HTMLElement>(FOCUSABLE)];
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

    drawer.addEventListener("keydown", onKeyDown);
    return () => drawer.removeEventListener("keydown", onKeyDown);
  }, []);

  const submit = (value: string) => {
    const next = value.trim();
    if (!next || awaiting) return;
    onSend(next);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(inputRef.current?.value ?? "");
  };

  const onInputKeyDown = (event: ReactKeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit(event.currentTarget.value);
    }
  };

  return (
    <motion.div
      ref={drawerRef}
      id="ask-moataz-drawer"
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      aria-busy={awaiting}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
      transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}
      className="flex max-h-[min(32rem,calc(100dvh-8.5rem))] w-[min(24rem,calc(100vw-2.5rem))] flex-col border border-blue/25 bg-deep-blue"
    >
      <header className="flex items-center gap-3 px-4 pb-3 pt-4">
        <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-blue">
          <MoatazCharacter mood={mood} />
        </span>
        <h2 id={titleId} className="min-w-0 flex-1 font-playfair text-2xl font-semibold leading-none text-white">
          Ask Moataz
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center text-white transition-colors duration-500 hover:text-yellow"
          aria-label="Close Ask Moataz"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </header>
      <LineGradient />

      {showPrompts ? (
        <div className="flex flex-col gap-4 px-4 py-4">
          <p className="max-w-[34ch] text-base leading-7 text-mist">
            Ask about the stack, the products Moataz has shipped, or how to get in touch.
          </p>
          <QuickPrompts disabled={awaiting} onSelect={submit} />
        </div>
      ) : (
        <MessageList messages={messages} phase={phase} />
      )}

      <div className="mt-auto flex flex-col gap-3 px-4 pb-4 pt-2">
        {error ? (
          <div role="alert" className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-sm font-semibold leading-5 text-red">{error}</p>
            {messages.at(-1)?.role === "user" ? (
              <button
                type="button"
                onClick={onRetry}
                className="text-sm font-semibold text-yellow underline decoration-yellow underline-offset-[3px]"
              >
                Try again
              </button>
            ) : null}
          </div>
        ) : null}
        <form onSubmit={onSubmit} className="flex items-end gap-2">
          <label htmlFor="ask-moataz-input" className="sr-only">
            Message Ask Moataz
          </label>
          <textarea
            ref={inputRef}
            id="ask-moataz-input"
            name="message"
            rows={2}
            maxLength={8000}
            disabled={awaiting}
            placeholder="ASK ABOUT THE WORK"
            onKeyDown={onInputKeyDown}
            className="max-h-28 min-h-12 w-full resize-none bg-blue p-3 text-sm font-semibold leading-5 text-deep-blue placeholder:text-deep-blue/70 disabled:opacity-70"
          />
          <button
            type="submit"
            disabled={awaiting}
            className="h-12 shrink-0 bg-yellow px-4 text-sm font-semibold uppercase tracking-wide text-deep-blue transition-colors duration-500 hover:bg-red hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ChatDrawer;
