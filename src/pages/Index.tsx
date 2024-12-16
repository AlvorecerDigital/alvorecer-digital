import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
    </div>
  );
};

export default Index;