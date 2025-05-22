import { Send } from "lucide-react";
import { useRef, useEffect } from "react";

interface ChatInputProps {
  input: string;
  setInput: (val: string) => void;
  handleSend: (e: React.FormEvent) => void;
}

export default function ChatInput({ input, setInput, handleSend }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (input === "" && textareaRef.current) {
      textareaRef.current.style.height = "40px";
    }
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "40px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <form
      onSubmit={handleSend} 
      className="flex items-center gap-2 px-4 py-3 bg-white w-full max-w-[390px] mx-auto"    >
      <textarea
        ref={textareaRef}
        placeholder="Ask me anything..."
        value={input}
        onChange={handleChange}
        className="flex-1 border-none rounded-xl px-4 py-2 bg-gray-100 focus:outline-none resize-none overflow-y-auto text-sm"
        style={{ minWidth: "40px", maxHeight: "120px", overflow: "hidden" }}
        rows={1}
      />
      <button
        type="submit"
        className="bg-green-700 hover:bg-green-800 rounded-full p-3 flex items-center justify-center transition"
      >
        <Send size={20} className="text-white" />
      </button>
    </form>
  );
}
