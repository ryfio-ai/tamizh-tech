"use client";

import { useState, FormEvent, useEffect } from "react";
import { Send, Bot, Paperclip, Mic, CornerDownLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

interface Message {
  id: number;
  content: string;
  sender: "user" | "ai";
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm the TamizhTech AI Assistant. How can I help you with our robotics services or club today?",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      content: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          content: data.content,
          sender: "ai",
        },
      ]);
    } catch (err: any) {
      console.error("Chat Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          content: err.message || "Sorry, I encountered an error. Please try again or contact us directly.",
          sender: "ai",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ExpandableChat
      size="md"
      position="bottom-right"
      icon={<Bot className="h-6 w-6" />}
    >
      <ExpandableChatHeader className="flex-col text-center justify-center py-5 border-orange-500/10 bg-slate-900/80 backdrop-blur-md">
        <div className="flex flex-col items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/logo/TTRC LOGO.jpg"
              alt="TTRC Logo"
              width={60}
              height={60}
              className="relative rounded-full border border-white/10 bg-black/40 object-contain p-1"
            />
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <h1 className="text-lg font-heading font-black text-white tracking-tighter uppercase flex items-center gap-1.5">
              TTRC <span className="text-orange-400">AI Assistant</span>
            </h1>
            <p className="text-[9px] text-orange-400 font-bold tracking-[0.2em] uppercase opacity-90">
              TamizhTech Smart Assistant
            </p>
          </div>
        </div>
      </ExpandableChatHeader>

      <ExpandableChatBody className="bg-slate-950/40">
        <ChatMessageList>
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0 border border-white/10 overflow-hidden bg-black/20"
                src={
                  message.sender === "user"
                    ? undefined
                    : "/logo/TTRC LOGO.jpg"
                }
                fallback={message.sender === "user" ? "ME" : "TTRC"}
              />
              <ChatBubbleMessage
                variant={message.sender === "user" ? "sent" : "received"}
                className={message.sender === "user" ? "bg-orange-500/90 shadow-lg shadow-orange-900/20" : "bg-slate-800/90 border border-white/5"}
              >
                <div className="prose prose-sm prose-invert max-w-none break-words leading-relaxed">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {message.content}
                  </ReactMarkdown>
                </div>
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0 border border-white/10 overflow-hidden bg-black/20"
                src="/logo/TTRC LOGO.jpg"
                fallback="TTRC"
              />
              <ChatBubbleMessage isLoading className="bg-slate-800/90 border border-white/5" />
            </ChatBubble>
          )}
        </ChatMessageList>
      </ExpandableChatBody>

      <ExpandableChatFooter className="bg-slate-900/50 border-orange-500/10">
        <form
          onSubmit={handleSubmit}
          className="relative rounded-xl border border-white/10 bg-black/20 focus-within:ring-1 focus-within:ring-orange-500/50 p-1"
        >
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="min-h-12 resize-none rounded-lg bg-transparent border-0 p-3 shadow-none focus-visible:ring-0 text-white"
          />
          <div className="flex items-center p-2 pt-0 justify-between">
            <div className="flex text-slate-400">
              <span className="text-[10px] ml-2 font-medium uppercase tracking-widest opacity-50">Powered by Gemini</span>
            </div>
            <Button type="submit" size="sm" className="ml-auto gap-1.5 bg-orange-500 hover:bg-orange-600 text-white" disabled={isLoading}>
              {isLoading ? "Thinking..." : "Send"}
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
