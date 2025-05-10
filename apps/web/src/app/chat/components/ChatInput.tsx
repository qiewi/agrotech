import { Send } from "lucide-react"
import { useRef, useEffect} from "react"

interface ChatInputProps {
  input: string
  setInput: (val: string) => void
  handleSend: (e: React.FormEvent) => void
}

export default function ChatInput({ input, setInput, handleSend }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  
  useEffect(() => {
    if (input === "" && textareaRef.current) {
      textareaRef.current.style.height = "40px"
    }
  }, [input])
  

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    if (textareaRef.current) {
      textareaRef.current.style.height = "40px"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  return (
    <form
      onSubmit={handleSend}
      className="flex items-center gap-2 px-4 py-3 bg-white fixed bottom-19 left-0 right-0 max-w-[390px] mx-auto"
    >
      <textarea
        ref={textareaRef}
        placeholder="Ask Anything"
        value={input}
        onChange={handleChange}
        className="flex-1 border rounded-md px-4 py-2 bg-greyish focus:outline-none resize-none overflow-y-auto"
        style={{ minWidth: "40px", maxHeight: "200px", overflow: "hidden" }}
      />
      <button
        type="submit"
        className="text-white bg-greenish hover:bg-greenish/90 rounded-md p-2"
      >
        <Send size={18} />
      </button>
    </form>
  )
}
