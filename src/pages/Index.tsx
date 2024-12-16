import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Chat } from "@/components/Chat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Chat />
    </div>
  );
};

export default Index;