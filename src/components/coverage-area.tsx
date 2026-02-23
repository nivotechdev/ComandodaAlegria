import { MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-vibrant-pink/10">
            <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
    </div>
)

export default function CoverageArea() {
  return (
    <section id="coverage" className="w-full py-20 md:py-32 lg:py-40 bg-vibrant-pink/10 relative">
      <Wave />
      <div className="container mx-auto px-5 relative">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="relative mb-4">
                <div className="absolute -top-12 -left-16 animate-float">
                    <Sparkles className="h-16 w-16 text-primary/50 -rotate-45" />
                </div>
                <div className="bg-vibrant-pink/20 rounded-full p-6 border-4 border-vibrant-pink/30">
                    <MapPin className="h-16 w-16 text-vibrant-pink" />
                </div>
                <div className="absolute -bottom-12 -right-16 animate-float" style={{animationDelay: '1s'}}>
                     <Sparkles className="h-16 w-16 text-accent/50 rotate-[15deg]" />
                </div>
            </div>
            <div className="bg-white/30 backdrop-blur-md border-2 border-dashed border-accent/50 rounded-3xl p-8 lg:p-12 animate-bounce-in shadow-lg">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px white' }}>
                    <span className="text-accent inline-block -rotate-2">Magia</span>{' '}
                    <span className="text-primary inline-block rotate-1">Onde Você</span>{' '}
                    <span className="text-vibrant-pink inline-block">Estiver!</span>
                </h2>
                <p className="mt-4 max-w-[600px] text-foreground/80 md:text-xl/relaxed font-medium">
                Não importa o lugar, a magia chega num balão! Atendemos em casas, prédios, parques e empresas com toda a estrutura necessária.
                </p>
            </div>
            <Button asChild size="lg" className="bg-vibrant-pink text-white rounded-full px-6 py-5 text-lg sm:px-10 sm:py-7 sm:text-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-105 animate-pulse-balloon w-full max-w-sm sm:w-auto">
                <Link href="#contact">🎈 Quero a Comando na minha festa!</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
