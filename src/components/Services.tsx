import { Calendar, MessageSquare, Database, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Chatbot Inteligente",
    description:
      "Atendimento 24/7 com IA avançada para responder dúvidas e auxiliar clientes.",
    icon: MessageSquare,
  },
  {
    title: "Integração com CRM",
    description:
      "Sincronize dados de clientes e vendas automaticamente com seu sistema CRM.",
    icon: Database,
  },
  {
    title: "Agendamento Automático",
    description:
      "Sistema inteligente de agendamento que otimiza sua agenda automaticamente.",
    icon: Calendar,
  },
  {
    title: "Automação de Processos",
    description:
      "Automatize tarefas repetitivas e aumente a eficiência do seu negócio.",
    icon: Activity,
  },
];

export const Services = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nossas Soluções
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tecnologias avançadas para impulsionar seu crescimento
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-8 w-8 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};