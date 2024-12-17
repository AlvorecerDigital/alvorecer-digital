import { useState } from "react";
import { Bot, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useAIAssistant } from "@/hooks/use-ai-assistant";

interface Message {
  role: "assistant" | "user";
  content: string;
}

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Eu sou IO 👋 Como posso ajudar você hoje com soluções de automação e IA para seu negócio?",
    },
  ]);
  const [input, setInput] = useState("");
  const { getAIResponse, isLoading } = useAIAssistant();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await getAIResponse(input, "services");
      if (response) {
        const assistantMessage: Message = { role: "assistant", content: response };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Error getting AI response:", error);
    }
  };

  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <Bot className="mx-auto h-12 w-12 text-white mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Converse com IO
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/80">
            Descubra como a IA pode transformar seu negócio
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 min-h-[400px] flex flex-col shadow-lg">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "assistant" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === "assistant"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-primary text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-500"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-white hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};