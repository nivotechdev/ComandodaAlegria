'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFab from "@/components/whatsapp-fab";

const workshopDetails: {[key: string]: {title: string, description: string}} = {
    'workshop-massinha': { title: "Massinha de Modelar Nuvem", description: "Uma oficina fofinha onde as crianças criam suas próprias massinhas de modelar super macias e coloridas." },
    'workshop-jardinagem': { title: "Jardinagem", description: "Pequenos jardineiros em ação! As crianças aprendem a plantar e cuidar de suas próprias plantinhas." },
    'workshop-pintura-gesso': { title: "Pintura em Gesso", description: "Arte e criatividade se unem para dar vida a lindas peças de gesso com muitas cores e brilho." },
    'workshop-mini-donuts': { title: "Decoração de Mini Donuts", description: "Uma deliciosa oficina onde a criançada pode confeitar e personalizar seus próprios mini donuts." },
    'workshop-spa-day': { title: "Spa Day", description: "Um dia de relaxamento e diversão com máscaras faciais, massagem e muito glamour para os pequenos." },
    'workshop-paper-squishy': { title: "Paper Squishy", description: "A febre do momento! As crianças criam seus próprios squishies de papel, personalizando do seu jeito." },
    'workshop-baladinha': { title: "Baladinha", description: "Luzes, música e muita dança! Uma mini balada com os maiores sucessos para a criançada se divertir." },
    'workshop-caca-tesouro': { title: "Caça ao Tesouro", description: "Uma aventura emocionante com mapas e pistas para encontrar um tesouro escondido e cheio de surpresas." },
    'workshop-festa-futebol': { title: "Festa Futebol", description: "Para os apaixonados por futebol, uma festa com gincanas, jogos e muita bola no pé." },
    'workshop-noite-pijama': { title: "Noite do Pijama", description: "Cabanas, histórias e muita diversão em uma noite mágica com os amigos." },
    'workshop-cortejos-natalinos': { title: "Cortejos Natalinos", description: "A magia do Natal com personagens encantados, músicas e um clima de pura alegria contagiante." },
    'workshop-encontro-encantado': { title: "Encontro Encantado", description: "Um momento mágico onde as crianças podem conhecer e interagir com seus personagens favoritos." },
};

export default function WorkshopsPage() {
  const allWorkshops = PlaceHolderImages.filter(img => img.categories.includes("Oficinas"));

  return (
    <div className="flex min-h-screen flex-col text-foreground bg-background">
        <Header />
        <main className="flex-grow pt-24 pb-20 md:pt-32 md:pb-32 bg-secondary/5">
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
                        <span className="text-secondary inline-block -rotate-2">Galerias</span>{' '}
                        <span className="text-accent inline-block rotate-1">de</span>{' '}
                        <span className="text-primary inline-block">Oficinas</span>{' '}
                        <span className="text-vibrant-pink inline-block -rotate-1">Mágicas!</span>
                    </h1>
                    <p className="max-w-[700px] text-base text-foreground/80 md:text-lg font-normal leading-relaxed">
                        Explore os momentos de pura diversão e criatividade de nossas oficinas. Cada foto conta uma história de alegria!
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allWorkshops.map((workshop) => (
                        <div key={workshop.id} className="group">
                             <Card className="overflow-hidden rounded-[30px] bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col h-full border-2 border-transparent hover:border-secondary">
                                <div className="p-3">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                                        <Image
                                            src={workshop.imageUrl}
                                            alt={workshop.description}
                                            fill
                                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                            data-ai-hint={workshop.imageHint}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-100 transition-opacity duration-300 group-hover:opacity-90 pointer-events-none" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-2xl font-bold text-white font-headline drop-shadow-md">
                                                {workshopDetails[workshop.id]?.title || workshop.id.split('-').slice(1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="text-left px-4 pb-4 pt-1 flex-grow flex flex-col justify-center">
                                    <p className="text-sm text-foreground/70 leading-relaxed">
                                        {workshopDetails[workshop.id]?.description}
                                    </p>
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
