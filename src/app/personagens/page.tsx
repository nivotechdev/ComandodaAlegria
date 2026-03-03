import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFab from "@/components/whatsapp-fab";

export default function AllCharactersPage() {
  const characters = PlaceHolderImages.filter(img => img.id.startsWith("character-"));
  const borderColors = ["border-vibrant-pink", "border-primary", "border-accent", "border-secondary"];
  const categories = ["Todos", "Heróis", "Princesas", "Clássicos", "Desenhos"];

  return (
    <div className="flex min-h-screen flex-col text-foreground bg-background">
        <Header />
        <main className="flex-grow pt-24 pb-20 md:pt-32 md:pb-32">
            <div className="container mx-auto px-5">
                <div className="mb-8">
                    <Button asChild variant="outline" className="rounded-full font-bold transition-transform hover:scale-105 border-2 border-primary/50 bg-white/50 backdrop-blur-sm">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Voltar
                        </Link>
                    </Button>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px hsl(var(--background))' }}>
                        <span className="text-primary inline-block -rotate-2">Conheça</span>{' '}
                        <span className="text-secondary inline-block rotate-1">Nossa</span>{' '}
                        <span className="text-accent inline-block">Galeria</span>{' '}
                        <span className="text-vibrant-pink inline-block -rotate-1">de Estrelas!</span>
                    </h1>
                    <p className="max-w-[700px] text-base text-foreground/80 md:text-lg font-normal leading-relaxed">
                        Aqui a magia ganha vida! Explore nosso catálogo completo e encontre o personagem perfeito para fazer a alegria da sua festa.
                    </p>
                </div>
                
                <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
                    {categories.map((category, index) => (
                        <Button 
                            key={category} 
                            variant={index === 0 ? "default" : "outline"}
                            className="rounded-full font-semibold transition-all hover:shadow-md text-base px-5 py-2 h-auto"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {characters.map((character, index) => (
                        <div key={character.id} className="group">
                             <Card className={`overflow-hidden rounded-3xl border-2 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 flex flex-col h-full ${borderColors[index % borderColors.length]}`}>
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={character.imageUrl}
                                        alt={character.description}
                                        fill
                                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={character.imageHint}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                                         <Button asChild className="pointer-events-auto rounded-full bg-vibrant-pink px-4 sm:px-6 text-xs sm:text-sm font-bold text-white shadow-lg transition-all duration-300 scale-90 group-hover:scale-100 w-auto">
                                            <Link href="#contact">Levar para minha festa!</Link>
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
            </div>
        </main>
        <Footer />
        <WhatsAppFab />
    </div>
  );
}
