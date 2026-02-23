import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFab from "@/components/whatsapp-fab";

const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 128 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M103.521 8.45522C94.0427 -1.02305 79.805 -2.79055 68.3073 4.2982C62.9083 1.25445 56.6343 0 50.1378 0C32.1483 0 17.2625 12.3551 12.0153 28.5147C5.07406 29.8351 0 35.8335 0 42.9231C0 50.8124 6.32688 57.1393 14.2163 57.1393H24.3837C22.6853 53.6496 21.8622 49.7702 21.8622 45.7275C21.8622 32.8344 32.2275 22.4691 45.1205 22.4691C49.1912 22.4691 53.0031 23.5186 56.2946 25.4054C59.9882 17.0708 68.4239 11.4278 78.2618 11.4278C87.3513 11.4278 95.3418 16.4862 99.4125 24.3559C109.845 23.3649 118.599 31.8006 118.599 42.3385C118.599 44.8966 118.015 47.3378 116.965 49.5234H120.339C124.582 49.5234 128 52.9413 128 57.1841C128 61.4268 124.582 64.8447 120.339 64.8447H112.5C112.5 73.3418 105.592 80 97.0945 80C90.3705 80 84.6961 75.5259 82.5 70H50C48.0536 75.5259 42.3791 80 35.6552 80C27.1577 80 20.25 73.3418 20.25 64.8447H14.2163C6.32688 64.8447 0 58.5178 0 50.6285C0 43.5389 5.07406 37.5405 12.0153 36.2104C15.7088 16.5913 32.7329 2.85697 52.3802 2.85697C57.6274 2.85697 62.6493 3.90642 67.2039 5.8517C78.4191 -3.37525 94.4883 -1.54928 104.92 9.85493L103.521 8.45522Z" fill="white"/>
    </svg>
);


export default function AllCharactersPage() {
  const characters = PlaceHolderImages.filter(img => img.id.startsWith("character-"));
  const borderColors = ["border-vibrant-pink", "border-primary", "border-accent", "border-secondary"];

  return (
    <div className="flex min-h-screen flex-col text-foreground bg-gradient-to-br from-primary/20 via-vibrant-pink/20 to-secondary/20 relative">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%20width=%2732%27%20height=%2732%27%20fill=%27none%27%20stroke-width=%272%27%20stroke=%27white%27%3E%3Cpath%20d=%27M16%202%20V30%20M2%2016%20H30%27/%3E%3C/svg%3E')] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <Header />
        <main className="flex-grow relative z-10 py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative mb-12">
                     <Button asChild variant="ghost" className="absolute top-0 left-0 h-auto p-0 hover:bg-transparent transition-transform hover:-translate-y-1">
                        <Link href="/" className="flex items-center gap-2 text-foreground/80 font-bold">
                            <CloudIcon className="w-24 h-16 drop-shadow-lg" />
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                <ArrowLeft className="h-4 w-4" />
                                Voltar
                            </span>
                        </Link>
                    </Button>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-4 text-center mt-24">
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px white' }}>
                        <span className="text-primary inline-block -rotate-2">Conheça</span>{' '}
                        <span className="text-secondary inline-block rotate-1">Todos os</span>{' '}
                        <span className="text-accent inline-block">Nossos</span>{' '}
                        <span className="text-vibrant-pink inline-block -rotate-1">Amiguinhos!</span>
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed font-medium">
                        Aqui a magia ganha vida! Explore nosso catálogo completo e encontre o personagem perfeito para fazer a alegria da sua festa.
                    </p>
                </div>
                
                <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
                    {characters.map((character, index) => (
                        <div key={character.id} className="group animate-bounce-in [animation-fill-mode:backwards]" style={{ animationDelay: `${index * 100}ms` }}>
                            <Card className={`overflow-visible relative rounded-3xl border-4 bg-background shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-4 group-hover:-rotate-[4deg] ${borderColors[index % borderColors.length]}`}>
                                <div className="relative aspect-[3/4] rounded-t-[calc(1.5rem-4px)]">
                                    <Image
                                        src={character.imageUrl}
                                        alt={character.description}
                                        width={400}
                                        height={600}
                                        className="w-full h-full object-cover object-top rounded-t-[calc(1.5rem-4px)] transition-transform duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-8 relative z-10"
                                        data-ai-hint={character.imageHint}
                                        loading="lazy"
                                    />
                                </div>
                                <CardContent className="p-4 text-center bg-background rounded-b-[calc(1.5rem-4px)] relative z-0">
                                    <h3 className="text-lg font-bold text-foreground font-headline">
                                    {character.id.split('-').slice(1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                                    </h3>
                                </CardContent>
                                <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[calc(1.5rem-4px)] z-20 pointer-events-none">
                                    <Button asChild className="pointer-events-auto w-full rounded-full bg-vibrant-pink text-white font-bold shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 animate-pulse-balloon">
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
