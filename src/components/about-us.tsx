'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart, Users, PartyPopper, Rocket } from "lucide-react";

const timelineEvents = [
  {
    icon: Heart,
    color: "text-vibrant-pink",
    bgColor: "bg-vibrant-pink/10",
    title: "O Início de um Sonho",
    description: "A paixão por espalhar alegria nos uniu. João e Vivi deram o primeiro passo para criar a Comando da Alegria, com o desejo de levar magia a cada festa.",
  },
  {
    icon: Users,
    color: "text-accent",
    bgColor: "bg-accent/10",
    title: "Formando a Equipe dos Sonhos",
    description: "Nossa família cresceu! Reunimos um time de artistas talentosos e apaixonados, prontos para transformar qualquer evento em um momento inesquecível.",
  },
  {
    icon: PartyPopper,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    title: "Conquistando Sorrisos",
    description: "Hoje, somos referência em entretenimento infantil, com um portfólio de personagens e atividades que encantam crianças e adultos por todo o Brasil.",
  },
    {
    icon: Rocket,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    title: "Nossa Missão",
    description: "Continuar a colorir o mundo com momentos de pura felicidade, inovando sempre para levar a melhor experiência para a sua festa.",
  },
];

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[90px] fill-primary/10">
            <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
    </div>
)

export default function AboutUs() {
  const aboutImage = PlaceHolderImages.find(img => img.id === "about-us-founders");

  return (
    <section id="about-us" className="w-full py-20 md:py-32 lg:py-40 bg-primary/10 relative overflow-hidden">
        <Wave />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
        
        <div className="container mx-auto px-5 relative">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div>
                    <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:max-w-md group">
                        <div className="absolute -inset-2 bg-gradient-to-br from-accent/50 to-secondary/50 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse-balloon" style={{ animationDuration: '6s' }}></div>
                        {aboutImage && (
                            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src={aboutImage.imageUrl}
                                    alt={aboutImage.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={aboutImage.imageHint}
                                    sizes="(max-width: 768px) 90vw, 45vw"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center md:text-left" style={{ textShadow: '3px 3px 0px white' }}>
                        <span className="text-secondary inline-block -rotate-2">Nossa</span>{' '}
                        <span className="text-accent inline-block rotate-1">História</span>
                        <span className="text-vibrant-pink block mt-2 sm:mt-0 sm:inline-block">de Cores e Alegria</span>
                    </h2>
                    
                    <div className="mt-12 relative">
                        <div className="absolute left-4 top-4 h-full border-l-2 border-dashed border-gray-300"></div>
                        {timelineEvents.map((event, index) => (
                          <div key={index} className="relative mb-10 pl-12">
                            <div className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full ${event.bgColor} ring-8 ring-primary/10`}>
                                <event.icon className={`h-5 w-5 ${event.color}`} />
                            </div>
                            <h3 className="font-headline text-xl font-bold text-gray-800">{event.title}</h3>
                            <p className="mt-1 text-base text-gray-600 leading-relaxed">{event.description}</p>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
