"use client";

import { useEffect, useRef } from "react";
import type { AskPhase, ChatMessage } from "@/hooks/useAskMoataz";
import MoatazCharacter from "./MoatazCharacter";
import MarkdownMessage from "./markdown";

type Props = {
  messages: ChatMessage[];
  phase: AskPhase;
};

const MessageList = ({ messages, phase }: Props) => {
  const endRef = useRef<HTMLDivElement>(null);
  const awaiting = phase === "awaiting";
  const latest = messages.at(-1);
  const announcement = awaiting
    ? "Checking the portfolio."
    : latest?.role === "assistant"
      ? latest.content
      : "";

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, awaiting]);

  return (
    <div className="ask-thread flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-3">
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
      <ol className="flex flex-col gap-3">
        {messages.map((message) => {
          const isUser = message.role === "user";
          return (
            <li key={message.id} className={isUser ? "flex justify-end" : "flex justify-start"}>
              <div
                className={
                  isUser
                    ? "max-w-[85%] bg-red-surface px-3 py-2 text-sm leading-6 text-white"
                    : "max-w-[85%] border border-blue/25 bg-navy px-3 py-2 text-sm leading-6 text-mist"
                }
              >
                <span className="sr-only">{isUser ? "You" : "Ask Moataz"}: </span>
                {isUser ? (
                  <p className="whitespace-pre-wrap break-words">{message.content}</p>
                ) : (
                  <MarkdownMessage content={message.content} />
                )}
              </div>
            </li>
          );
        })}
        {awaiting ? (
          <li className="flex items-end gap-2" aria-live="polite">
            <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-blue/40">
              <MoatazCharacter mood="thinking" />
            </span>
            <p className="border border-blue/25 bg-navy px-3 py-2 text-sm font-semibold text-mist">
              Checking the portfolio
              <span className="ask-typing" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </p>
          </li>
        ) : null}
      </ol>
      <div ref={endRef} />
    </div>
  );
};

export default MessageList;
