import type { ReactNode } from "react";

type Block =
  | { kind: "paragraph"; lines: string[] }
  | { kind: "list"; items: string[] }
  | { kind: "code"; text: string };

const INLINE =
  /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))/g;

function renderInline(text: string, key: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let index = 0;

  for (const match of text.matchAll(INLINE)) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    const token = match[0];
    const id = `${key}-${index}`;
    index += 1;

    if (token.startsWith("`")) {
      nodes.push(
        <code
          key={id}
          className="bg-deep-blue px-1 py-0.5 font-mono text-sm text-yellow"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("**")) {
      nodes.push(
        <strong key={id} className="font-semibold text-white">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("*")) {
      nodes.push(<em key={id}>{token.slice(1, -1)}</em>);
    } else if (match[2] && match[3]) {
      nodes.push(
        <a
          key={id}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-yellow underline decoration-yellow underline-offset-[3px]"
        >
          {match[2]}
        </a>
      );
    }

    last = start + token.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function parseProse(source: string): Block[] {
  const blocks: Block[] = [];
  const lines = source.split("\n");
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    blocks.push({ kind: "paragraph", lines: paragraph });
    paragraph = [];
  };

  const flushList = () => {
    if (list.length === 0) return;
    blocks.push({ kind: "list", items: list });
    list = [];
  };

  for (const line of lines) {
    const item = /^[-*]\s+(.+)$/.exec(line.trim());
    if (item) {
      flushParagraph();
      list.push(item[1]);
      continue;
    }
    if (line.trim().length === 0) {
      flushParagraph();
      flushList();
      continue;
    }
    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

function parseMarkdown(source: string): Block[] {
  const chunks = source.split("```");
  const blocks: Block[] = [];

  chunks.forEach((chunk, index) => {
    if (index % 2 === 1) {
      const text = chunk.replace(/^[^\n]*\n/, "").replace(/\n$/, "");
      blocks.push({ kind: "code", text });
      return;
    }
    blocks.push(...parseProse(chunk));
  });

  return blocks;
}

const MarkdownMessage = ({ content }: { content: string }) => {
  const blocks = parseMarkdown(content);

  return (
    <div className="space-y-2 break-words">
      {blocks.map((block, index) => {
        const key = `block-${index}`;
        if (block.kind === "code") {
          return (
            <pre
              key={key}
              className="overflow-x-auto bg-deep-blue p-3 font-mono text-sm leading-relaxed text-mist"
            >
              <code>{block.text}</code>
            </pre>
          );
        }
        if (block.kind === "list") {
          return (
            <ul key={key} className="list-disc space-y-1 pl-5">
              {block.items.map((item, itemIndex) => (
                <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={key}>
            {block.lines.map((line, lineIndex) => (
              <span key={`${key}-${lineIndex}`}>
                {lineIndex > 0 ? <br /> : null}
                {renderInline(line, `${key}-${lineIndex}`)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
};

export default MarkdownMessage;
