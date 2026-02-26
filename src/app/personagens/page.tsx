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

  return (
    <div className="flex min-h-screen flex-col text-foreground bg-gradient-to-br from-primary/20 via-vibrant-pink/20 to-secondary/20 relative">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%20width=%2732%27%20height=%2732%27%20fill=%27none%27%20stroke-width=%272%27%20stroke=%27white%27%3E%3Cpath%20d=%27M16%202%20V30%20M2%2016%20H30%27/%3E%3C/svg%3E')] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <Header />
        <main className="flex-grow relative z-10 py-20 md:py-32">
            <div className="container mx-auto px-5">
                <div className="mb-12">
                    <Button asChild variant="outline" className="rounded-full font-bold transition-transform hover:scale-105 border-2 border-primary/50 bg-white/50 backdrop-blur-sm">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Voltar
                        </Link>
                    </Button>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px white' }}>
                        <span className="text-primary inline-block -rotate-2">Conheça</span>{' '}
                        <span className="text-secondary inline-block rotate-1">Todos os</span>{' '}
                        <span className="text-accent inline-block">Nossos</span>{' '}
                        <span className="text-vibrant-pink inline-block -rotate-1">Amiguinhos!</span>
                    </h1>
                    <p className="max-w-[700px] text-base text-foreground/80 md:text-lg font-normal leading-relaxed">
                        Aqui a magia ganha vida! Explore nosso catálogo completo e encontre o personagem perfeito para fazer a alegria da sua festa.
                    </p>
                </div>
                
                <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
                    {characters.map((character, index) => (
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
                                        loading="lazy"
                                    />
                                </div>
                                <CardContent className="p-4 text-center bg-background rounded-b-[calc(1.5rem-4px)] relative z-0 flex-grow flex items-center justify-center">
                                    <h3 className="text-lg font-bold text-foreground font-headline">
                                    {character.id.split('-').slice(1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                                    </h3>
                                </CardContent>
                                <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[calc(1.5rem-4px)] z-20 pointer-events-none">
                                    <Button asChild className="pointer-events-auto rounded-full bg-vibrant-pink px-6 text-sm font-bold text-white shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110">
                                        <Link href="#contact">Levar para minha festa!</Link>
                                    </Button>
                                </div>
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
