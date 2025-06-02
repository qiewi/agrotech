import Image from "next/image";
import { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 pb-40 min-h-[200px]">
      {messages.map((msg, index) =>
        msg.sender === "user" ? (
          <div key={index} className="flex justify-end mb-3">
            <div className="w-fit max-w-[70%] px-4 py-2 rounded-lg bg-green-700 text-white text-left">
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ) : (
          <div key={index} className="flex items-start mb-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
              <Image
                src="/bot-avatar.png"
                alt="Bot"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <div className="w-fit max-w-[70%] px-4 py-2 rounded-lg bg-gray-100 text-gray-900 text-left">
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        )
      )}
      <div ref={bottomRef} />
    </div>
  );
}
