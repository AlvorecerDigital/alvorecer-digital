import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <Bot className="h-16 w-16 text-primary animate-float" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Automatize seu negócio com{" "}
            <span className="text-primary">Inteligência Artificial</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transforme sua empresa com soluções de IA, chatbots inteligentes,
            integração com CRM e agendamento automático.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Comece Agora</Button>
            <Button variant="outline" size="lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};