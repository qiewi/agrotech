"use client"

import { useState } from "react"
import ChatHeader from "./components/ChatHeader"
import MessageList from "./components/MessageList"
import ChatInput from "./components/ChatInput"


interface Message {
  sender: "user" | "bot"
  text: string
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg: Message = { sender: "user", text: input }
    setMessages((prev) => [...prev, userMsg])
    setInput("")

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response || "Maaf, terjadi error." },
      ])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Maaf, tidak bisa terhubung ke server." },
      ])
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <ChatHeader />
      <div className="flex overflow-y-auto pb-40"> {/* padding bawah besar */}
        <MessageList messages={messages} />
      </div>
      {/* ChatInput fixed di atas BottomNav */}
      <div className="fixed bottom-16 left-0 w-full z-20 bg-white border-t border-gray-100">
        <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
      </div>
    </div>
  );
}
