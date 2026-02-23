import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CharacterCatalog() {
  const characters = PlaceHolderImages.filter(img => img.id.startsWith("character-"));
  
  return (
    <section id="characters" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">
              Nosso Catálogo de Personagens
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              De super-heróis a princesas, temos o personagem perfeito para encantar seus convidados.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters.map((character) => (
            <Card key={character.id} className="group overflow-hidden rounded-3xl border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2">
              <div className="relative">
                <Image
                  src={character.imageUrl}
                  alt={character.description}
                  width={400}
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={character.imageHint}
                />
                <Badge className="absolute top-4 right-4 bg-vibrant-pink text-white border-transparent">Premium</Badge>
              </div>
              <CardContent className="p-4 bg-card">
                <h3 className="text-lg font-bold text-foreground">
                  {character.id.split('-').slice(1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
