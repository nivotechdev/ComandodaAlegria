'use client';

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-primary/10">
            <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
    </div>
)

export default function CharacterCatalog() {
  const characters = PlaceHolderImages.filter(img => img.id.startsWith("character-"));
  const borderColors = ["border-vibrant-pink", "border-primary", "border-accent", "border-secondary"];
  const displayedCharacters = characters.slice(0, 4);
  
  return (
    <section id="characters" className="w-full py-20 md:py-32 lg:py-40 bg-primary/10 relative">
      <Wave />
      <div className="container mx-auto px-5 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px white' }}>
                <span className="text-primary inline-block -rotate-3">Nosso</span>{' '}
                <span className="text-accent inline-block rotate-2">Catálogo</span>{' '}
                <span className="text-secondary inline-block -rotate-1">de Estrelas</span>
            </h2>
            <p className="max-w-[900px] text-base text-foreground/80 md:text-lg leading-relaxed">
              De super-heróis a princesas, temos o personagem perfeito para encantar seus convidados.
            </p>
          </div>
        </div>
        <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
            {displayedCharacters.map((character, index) => (
                <div key={character.id} className="group animate-bounce-in [animation-fill-mode:backwards]" style={{ animationDelay: `${index * 100}ms` }}>
                    <Card className={`overflow-hidden relative rounded-3xl border-4 bg-background shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-4 group-hover:-rotate-[4deg] ${borderColors[index % borderColors.length]} flex flex-col h-full`}>
                        <div className="relative aspect-[3/4] rounded-t-[calc(1.5rem-4px)]">
                            <Image
                                src={character.imageUrl}
                                alt={character.description}
                                width={400}
                                height={600}
                                className="w-full h-full object-cover object-top rounded-t-[calc(1.5rem-4px)] relative z-10"
                                data-ai-hint={character.imageHint}
                            />
                        </div>
                        <CardContent className="p-4 text-center bg-background rounded-b-[calc(1.5rem-4px)] relative z-0 flex-grow flex items-center justify-center">
                            <h3 className="text-lg font-bold text-foreground font-headline">
                            {character.id.split('-').slice(1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                            </h3>
                        </CardContent>
                        <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[calc(1.5rem-4px)] z-20 pointer-events-none">
                             <Button asChild className="pointer-events-auto w-full rounded-full bg-vibrant-pink text-white font-bold shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 animate-pulse-balloon">
                                <Link href="#contact">Quero este na festa!</Link>
                            </Button>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
        {characters.length > 4 && (
          <div className="mt-16 text-center">
            <Button
              asChild
              size="lg"
              className="bg-vibrant-pink text-white rounded-full px-10 py-8 text-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 animate-pulse-balloon touch-manipulation"
            >
              <Link href="/personagens">✨ Ver Mais Personagens</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
