import { MapPin, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoverageArea() {
  return (
    <section id="coverage" className="w-full py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="relative mb-4">
                <div className="absolute -top-12 -left-16 animate-float">
                    <Sparkles className="h-16 w-16 text-primary/50 -rotate-45" />
                </div>
                <div className="bg-vibrant-pink/10 rounded-full p-6 border-4 border-vibrant-pink/20">
                    <MapPin className="h-16 w-16 text-vibrant-pink" />
                </div>
                <div className="absolute -bottom-12 -right-16 animate-float" style={{animationDelay: '1s'}}>
                     <Rocket className="h-16 w-16 text-accent/50 rotate-[135deg]" />
                </div>
            </div>
            <div className="border-4 border-dashed border-accent/50 rounded-3xl p-8 lg:p-12 animate-bounce-in">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground" style={{textShadow: '2px 2px 0px hsl(var(--secondary)/0.5)'}}>
                Magia Onde Você Estiver!
                </h2>
                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Não importa o lugar, a magia chega num balão! Atendemos em casas, prédios, parques e empresas com toda a estrutura necessária.
                </p>
            </div>
            <Button asChild size="lg" className="bg-vibrant-pink text-white rounded-full px-10 py-8 text-xl font-bold shadow-lg hover:shadow-xl transition-transform hover:scale-110 active:scale-105 animate-pulse-balloon hover:bg-accent active:bg-accent/90">
                <Link href="#contact">🎈 Quero o Comando na minha festa!</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
