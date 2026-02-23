import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function CharacterCatalog() {
  const characters = PlaceHolderImages.filter(img => img.id.startsWith("character-"));
  const borderColors = ["border-vibrant-pink", "border-primary", "border-accent", "border-secondary"];
  
  return (
    <section id="characters" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">
              Nosso Catálogo de Estrelas
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              De super-heróis a princesas, temos o personagem perfeito para encantar seus convidados.
            </p>
          </div>
        </div>
        <div className="pt-12">
            <Carousel 
                opts={{ align: "start", loop: true }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {characters.map((character, index) => (
                        <CarouselItem key={character.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                             <div className="p-1">
                                <Card className={`group overflow-hidden rounded-3xl border-4 bg-background transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:rotate-[-2deg] ${borderColors[index % borderColors.length]}`}>
                                <div className="relative">
                                    <Image
                                    src={character.imageUrl}
                                    alt={character.description}
                                    width={400}
                                    height={600}
                                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={character.imageHint}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                    <div className="absolute bottom-4 left-4 right-4 translate-y-8 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <Button asChild className="w-full rounded-full bg-accent font-bold text-accent-foreground">
                                        <Link href="#contact">Quero este na festa!</Link>
                                    </Button>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="text-lg font-bold text-foreground font-headline">
                                    {character.id.split('-').slice(1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                                    </h3>
                                </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
