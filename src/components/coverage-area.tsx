import { MapPin, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoverageArea() {
  return (
    <section id="coverage" className="w-full py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="relative">
                <div className="absolute -top-8 -left-12 animate-float">
                    <Rocket className="h-16 w-16 text-primary/50 -rotate-45" />
                </div>
                <div className="bg-vibrant-pink/10 rounded-full p-6 border-4 border-vibrant-pink/20">
                    <MapPin className="h-16 w-16 text-vibrant-pink" />
                </div>
                <div className="absolute -bottom-8 -right-12 animate-float" style={{animationDelay: '1s'}}>
                     <Rocket className="h-16 w-16 text-accent/50 rotate-[135deg]" />
                </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">
              Não importa o lugar, a magia chega num balão!
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Atendemos em casas, prédios, parques e empresas com toda a estrutura necessária. A diversão é garantida onde você estiver!
            </p>
            <Button asChild size="lg" className="bg-vibrant-pink text-white rounded-full px-10 py-8 text-xl font-bold shadow-lg hover:shadow-xl transition-transform hover:scale-110 active:scale-105 animate-pulse-balloon">
                <Link href="#contact">🎈 Chame o Comando Agora!</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
