import { MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-vibrant-pink/10">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.39-16.72-168.19-17.73-250.45-.39-58.02,11.9-113.81,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
    </div>
)

export default function CoverageArea() {
  return (
    <section id="coverage" className="w-full py-20 md:py-32 lg:py-40 bg-vibrant-pink/10 relative">
      <Wave />
      <div className="container mx-auto px-4 md:px-6 relative">
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
            <Button asChild size="lg" className="bg-vibrant-pink text-white rounded-full px-10 py-8 text-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-105 animate-pulse-balloon">
                <Link href="#contact">🎈 Quero a Comando na minha festa!</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
