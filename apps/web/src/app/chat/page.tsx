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

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg: Message = { sender: "user", text: input }
    const botReply: Message = {
      sender: "bot",
      text: "Halo! Ini AgroBot. (Simulasi)",
    }

    setMessages((prev) => [...prev, userMsg, botReply])
    setInput("")
  }

  return (
    <div className="flex flex-col flex-grow relative w-full">
      <ChatHeader />
      <MessageList messages={messages} />
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  )
}