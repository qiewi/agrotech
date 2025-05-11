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
    <div className="flex flex-col flex-grow relative w-full">
      <ChatHeader />
      <MessageList messages={messages} />
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  )
}
