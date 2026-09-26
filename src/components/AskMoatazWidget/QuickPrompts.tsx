const PROMPTS = [
  "What is Moataz's tech stack?",
  "Show me project highlights",
  "How can I reach Moataz?",
] as const;

type Props = {
  disabled?: boolean;
  onSelect: (prompt: string) => void;
};

const QuickPrompts = ({ disabled = false, onSelect }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {PROMPTS.map((prompt) => (
        <button
          key={prompt}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(prompt)}
          className="rounded-sm border border-blue/40 bg-deep-blue px-3 py-2 text-left text-sm font-semibold leading-5 text-white transition-colors duration-500 hover:border-red hover:bg-red-surface disabled:cursor-not-allowed disabled:opacity-70"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default QuickPrompts;
