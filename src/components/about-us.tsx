'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart } from "lucide-react";

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-background">
            <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
    </div>
)

export default function AboutUs() {
  const aboutImage = PlaceHolderImages.find(img => img.id === "about-us-founders");

  return (
    <section id="about-us" className="w-full py-20 md:py-32 lg:py-40 bg-primary/10 relative">
        <Wave />
        <div className="container mx-auto px-5 relative">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px white' }}>
                        <span className="text-accent inline-block -rotate-2">Nossa</span>{' '}
                        <span className="text-secondary inline-block rotate-1">História</span>{' '}
                        <span className="text-vibrant-pink inline-block">de Alegria</span>
                    </h2>
                    <p className="mt-6 max-w-xl text-base text-foreground/80 md:text-lg font-normal leading-relaxed">
                        A Comando da Alegria nasceu do sonho de João e Vivi de espalhar felicidade e criar momentos inesquecíveis. Com uma paixão contagiante por festas e o desejo de levar magia para cada evento, unimos nossas forças para construir uma equipe que hoje é referência em entretenimento infantil.
                    </p>
                    <p className="mt-4 max-w-xl text-base text-foreground/80 md:text-lg font-normal leading-relaxed">
                        Cada sorriso que despertamos é o nosso maior combustível. Somos movidos pelo amor ao que fazemos e pela certeza de que a alegria é o melhor presente que podemos oferecer.
                    </p>
                    <div className="mt-8 flex items-center gap-4 bg-white/50 p-4 rounded-2xl border-2 border-dashed border-secondary/50">
                        <Heart className="h-10 w-10 text-vibrant-pink" />
                        <div>
                            <p className="font-bold text-lg text-secondary font-headline">João & Vivi</p>
                            <p className="font-medium text-foreground/70">Fundadores e Apaixonados por Sorrisos</p>
                        </div>
                    </div>
                </div>
                <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto md:max-w-none animate-bounce-in">
                    {aboutImage && (
                         <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={aboutImage.imageHint}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
}