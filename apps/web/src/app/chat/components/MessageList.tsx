import { useRef, useEffect } from "react"

interface Message {
    sender: "user" | "bot"
    text: string
  }
  
  interface MessageListProps {
    messages: Message[]
  }
  
  export default function MessageList({ messages }: MessageListProps) {
    const bottomRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])
  
    return (
      <div className="flex-1 overflow-y-auto p-4 pb-40 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`w-fit max-w-[70%] mb-3 px-4 py-2 rounded-lg break-words ${
              msg.sender === "user"
                ? "ml-auto bg-greenish text-left text-white"
                : "mr-auto bg-gray-200 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    )
  }
  