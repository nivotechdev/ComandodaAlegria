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
        <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {displayedCharacters.map((character, index) => (
                <div key={character.id} className="group">
                    <Card className={`overflow-hidden rounded-3xl border-2 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 flex flex-col h-full ${borderColors[index % borderColors.length]}`}>
                        <div className="relative aspect-[3/4] overflow-hidden">
                            <Image
                                src={character.imageUrl}
                                alt={character.description}
                                fill
                                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={character.imageHint}
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                                 <Button asChild className="pointer-events-auto rounded-full bg-vibrant-pink px-6 text-sm font-bold text-white shadow-lg transition-all duration-300 scale-90 group-hover:scale-100">
                                    <Link href="#contact">Quero este na festa!</Link>
                                </Button>
                            </div>
                        </div>
                        <CardContent className="p-4 text-center bg-background flex-grow flex items-center justify-center">
                            <h3 className="text-lg font-bold text-foreground font-headline">
                                {character.id.split('-').slice(1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                            </h3>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
        {characters.length > 4 && (
          <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-full border-vibrant-pink px-8 py-3 text-base font-medium tracking-wide text-vibrant-pink transition-colors duration-300 hover:scale-105 hover:bg-vibrant-pink hover:text-white"
            >
              <Link href="/personagens">Ver mais personagens</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
