'use client';

import { MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CoverageArea() {
  return (
    <section 
      id="coverage" 
      className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-b from-vibrant-pink/10 via-primary/10 to-background"
    >
      {/* Floating Stars */}
      <Sparkles className="absolute top-[10%] left-[5%] h-8 w-8 text-primary/30 animate-twinkle opacity-50" style={{ animationDelay: '0s' }} />
      <Sparkles className="absolute top-[20%] right-[10%] h-6 w-6 text-accent/30 animate-twinkle opacity-60" style={{ animationDelay: '1s' }} />
      <Sparkles className="absolute bottom-[25%] left-[15%] h-10 w-10 text-vibrant-pink/30 animate-twinkle opacity-40" style={{ animationDelay: '2s' }} />
      <Sparkles className="absolute bottom-[15%] right-[20%] h-5 w-5 text-secondary/30 animate-twinkle opacity-70" style={{ animationDelay: '3s' }} />
      <Sparkles className="absolute top-1/2 left-[40%] h-4 w-4 text-primary/30 animate-twinkle opacity-50" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
            <div 
              className="relative flex items-center justify-center h-36 w-36 bg-white/80 backdrop-blur-sm rounded-full shadow-2xl animate-pulse"
              style={{ animationDuration: '4s' }}
            >
                <MapPin className="h-20 w-20 text-vibrant-pink drop-shadow-lg" />
            </div>
            
            <div className="space-y-6">
                <h2 className="font-headline text-5xl font-extrabold tracking-tight md:text-6xl" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.7)' }}>
                    <span className="text-accent inline-block -rotate-2">Magia</span>{' '}
                    <span className="text-primary inline-block rotate-1">Onde Você</span>{' '}
                    <span className="text-vibrant-pink inline-block">Estiver!</span>
                </h2>
                <p className="mt-4 mx-auto max-w-[600px] text-base text-foreground/80 md:text-lg font-medium leading-loose">
                Não importa o lugar, a magia chega num balão! Atendemos em casas, prédios, parques e empresas com toda a estrutura necessária.
                </p>
            </div>

            <Button 
              asChild 
              className={cn(
                "bg-vibrant-pink text-white hover:bg-vibrant-pink/90 rounded-full px-12 text-lg font-bold shadow-2xl transition-all hover:scale-105 h-[60px] min-w-[300px] mt-8",
                "relative overflow-hidden"
              )}
            >
                <Link href="#contact">
                  Quero a Comando na minha festa!
                  <span className="absolute inset-0 block -translate-x-full animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}