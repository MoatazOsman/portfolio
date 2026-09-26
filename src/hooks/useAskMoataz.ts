"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Hosted Ask Moataz agent API (Render). */
export const ASK_MOATAZ_API_URL =
  process.env.NEXT_PUBLIC_ASK_MOATAZ_API_URL ??
  "https://ask-moataz-api.onrender.com/api/chat";

const MAX_CONTENT_LENGTH = 8_000;

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

/**
 * `running` covers the server round trip, including tool calls such as
 * search_portfolio_knowledge. The API returns only the final assistant message.
 */
export type ToolState = "idle" | "running";

export type AskPhase = "idle" | "awaiting" | "error";

interface SendOptions {
  /** Resend the latest user turn without appending a duplicate bubble. */
  retry?: boolean;
}

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `msg-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

function readError(payload: unknown, status: number): string {
  if (isRecord(payload) && typeof payload.error === "string" && payload.error.trim()) {
    return payload.error.trim();
  }
  if (status === 503) {
    return "Ask Moataz is missing an API key on the server. Add it and try again.";
  }
  return `Ask Moataz could not answer (${status}). Try again in a moment.`;
}

function readReply(payload: unknown): string {
  if (!isRecord(payload) || !isRecord(payload.message)) {
    throw new Error("Ask Moataz returned an unexpected response.");
  }
  const { role, content } = payload.message;
  if (role !== "assistant" || typeof content !== "string" || content.trim().length === 0) {
    throw new Error("Ask Moataz returned an empty reply.");
  }
  return content.trim();
}

export function useAskMoataz() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [phase, setPhase] = useState<AskPhase>("idle");
  const [error, setError] = useState<string | null>(null);
  const messagesRef = useRef<ChatMessage[]>([]);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  const sendMessage = useCallback(async (raw: string, options?: SendOptions) => {
    const content = raw.trim();
    if (!content || abortRef.current) return;

    if (content.length > MAX_CONTENT_LENGTH) {
      setPhase("error");
      setError("That message is too long. Keep it under 8000 characters.");
      return;
    }

    const history = messagesRef.current;
    const last = history[history.length - 1];
    const retrying = options?.retry === true && last?.role === "user";

    const nextHistory = retrying
      ? history
      : [...history, { id: createId(), role: "user" as const, content }];

    if (!retrying) {
      messagesRef.current = nextHistory;
      setMessages(nextHistory);
    }

    const controller = new AbortController();
    abortRef.current = controller;
    setPhase("awaiting");
    setError(null);

    try {
      const response = await fetch(ASK_MOATAZ_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: nextHistory.map(({ role, content: turn }) => ({
            role,
            content: turn,
          })),
        }),
      });

      const text = await response.text();
      let payload: unknown = null;
      if (text) {
        try {
          payload = JSON.parse(text) as unknown;
        } catch {
          payload = null;
        }
      }

      if (!response.ok) {
        throw new Error(readError(payload, response.status));
      }

      const reply = readReply(payload);
      const assistant: ChatMessage = {
        id: createId(),
        role: "assistant",
        content: reply,
      };
      const withReply = [...nextHistory, assistant];
      messagesRef.current = withReply;
      setMessages(withReply);
      setPhase("idle");
    } catch (caught) {
      if (caught instanceof DOMException && caught.name === "AbortError") return;
      const offline =
        caught instanceof TypeError
          ? "Could not reach Ask Moataz right now. Check your connection and try again."
          : null;
      setPhase("error");
      setError(offline ?? (caught instanceof Error ? caught.message : "Ask Moataz could not answer."));
    } finally {
      if (abortRef.current === controller) abortRef.current = null;
    }
  }, []);

  const retry = useCallback(() => {
    const last = messagesRef.current[messagesRef.current.length - 1];
    if (!last || last.role !== "user") return;
    void sendMessage(last.content, { retry: true });
  }, [sendMessage]);

  const toolState: ToolState = phase === "awaiting" ? "running" : "idle";

  return {
    messages,
    phase,
    error,
    toolState,
    isLoading: phase === "awaiting",
    sendMessage,
    retry,
  };
}
