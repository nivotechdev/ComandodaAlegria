import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CharacterCatalog() {
  const characters = PlaceHolderImages.filter(img => img.id.startsWith("character-"));
  const borderColors = ["border-vibrant-pink", "border-primary", "border-accent", "border-secondary"];
  
  return (
    <section id="characters" className="w-full py-12 md:py-24 lg:py-32 bg-background -mt-px">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground -rotate-2" style={{textShadow: '2px 2px 0px hsl(var(--primary)/0.5), -2px -2px 0px hsl(var(--accent)/0.5)'}}>
              Nosso Catálogo de Estrelas
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              De super-heróis a princesas, temos o personagem perfeito para encantar seus convidados.
            </p>
          </div>
        </div>
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20">
            {characters.map((character, index) => (
                <div key={character.id} className="group animate-bounce-in [animation-fill-mode:backwards]" style={{ animationDelay: `${index * 100}ms` }}>
                    <Card className={`overflow-visible relative rounded-3xl border-4 bg-background shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:rotate-[-3deg] ${borderColors[index % borderColors.length]}`}>
                        <div className="relative aspect-[3/4] rounded-t-[calc(1.5rem-4px)]">
                            <Image
                                src={character.imageUrl}
                                alt={character.description}
                                width={400}
                                height={600}
                                className="w-full h-full object-cover object-top rounded-t-[calc(1.5rem-4px)] transition-transform duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-6 group-hover:z-10 relative"
                                data-ai-hint={character.imageHint}
                            />
                        </div>
                        <CardContent className="p-4 text-center bg-background rounded-b-[calc(1.5rem-4px)] relative z-0">
                            <h3 className="text-lg font-bold text-foreground font-headline">
                            {character.id.split('-').slice(1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                            </h3>
                        </CardContent>
                        <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[calc(1.5rem-4px)] z-20 pointer-events-none">
                             <Button asChild className="pointer-events-auto w-full rounded-full bg-accent font-bold text-accent-foreground transform translate-y-4 shadow-lg transition-all duration-300 group-hover:translate-y-0">
                                <Link href="#contact">Quero este na festa!</Link>
                            </Button>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
