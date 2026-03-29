'use client';

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Cake,
  Paintbrush,
  Gift,
  PersonStanding,
  Laugh,
  ToyBrick,
  Sparkles,
  Star,
  PartyPopper,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-accent/10">
            <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
    </div>
)

const mainServices = [
    {
        icon: Laugh,
        title: "Recreação",
        description: "Brincadeiras clássicas, gincanas e muita energia para não deixar ninguém parado!"
    },
    {
        icon: Paintbrush,
        title: "Pintura Facial",
        description: "Transformamos as crianças em seus heróis e animais favoritos com tintas antialérgicas."
    },
    {
        icon: Gift,
        title: "Esculturas de Balão",
        description: "Arte com balões que ganham formas de espadas, bichinhos e flores."
    },
    {
        icon: Cake,
        title: "Animação de Parabéns",
        description: "O momento mais especial da festa com uma entrada triunfal do personagem para cantar parabéns."
    },
    {
        icon: PersonStanding,
        title: "Pernas de Pau",
        description: "Leve sua festa para as alturas com nossos artistas em pernas de pau e um toque de circo."
    },
    {
        icon: ToyBrick,
        title: "Espaço Kids",
        description: "Um cantinho seguro e cheio de diversão para os pequenos, com monitores e atividades."
    }
];

const servicesRow1 = mainServices.slice(0, 3);
const servicesRow2 = mainServices.slice(3, 6);

const benefitIcons = [Sparkles, Star, PartyPopper];
const borderColors = ["border-primary", "border-secondary", "border-accent", "border-vibrant-pink", "border-primary", "border-secondary"];

const ServiceCard = ({ service, index }: { service: typeof mainServices[0], index: number }) => {
    const ServiceIcon = service.icon;
    return (
        <div className="group flex h-full p-1">
            <div className={cn(
                "bg-card/80 backdrop-blur-sm text-card-foreground rounded-2xl w-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col overflow-hidden border-2",
                borderColors[index % borderColors.length]
            )}>
                <div className="p-3 flex-grow flex flex-col">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                        <div className="absolute inset-0 bg-primary/5 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                            <ServiceIcon className="w-8 h-8 text-primary opacity-60 transition-opacity duration-300 group-hover:opacity-100"/>
                        </div>
                    </div>

                    <h3 className="font-headline text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-primary text-center">
                        {service.title}
                    </h3>
                    <p className="text-muted-foreground font-light text-xs mt-1 flex-grow text-center">
                        {service.description}
                    </p>

                    <div className="pt-2 mt-auto flex justify-center">
                        <div className="flex items-center gap-1">
                            {benefitIcons.map((BenefitIcon, i) => (
                                <div key={i} className="group/benefit flex items-center justify-center h-5 w-5 rounded-full bg-primary/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10" style={{ transitionDelay: `${i * 50}ms` }}>
                                    <BenefitIcon size={10} className="transition-all duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-32 lg:py-40 bg-accent/10 relative">
      <Wave />
      <div className="container mx-auto px-5 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px white' }}>
                <span className="text-secondary inline-block -rotate-2">Nossos</span>{' '}
                <span className="text-accent inline-block rotate-1">Serviços</span>{' '}
                <span className="text-primary inline-block">Mágicos</span>
            </h2>
            <p className="max-w-[900px] text-base text-foreground/80 md:text-lg leading-relaxed">
              Tudo para transformar sua festa em um evento inesquecível, com a qualidade e o carinho da Comando da Alegria.
            </p>
        </div>
        
        <div className="space-y-8">
            <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent className="-ml-2">
                    {servicesRow1.map((service, index) => (
                        <CarouselItem key={index} className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3">
                           <ServiceCard service={service} index={index} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="flex md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 backdrop-blur-sm text-primary border-primary/20 hover:bg-white/80" />
                <CarouselNext className="flex md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 backdrop-blur-sm text-primary border-primary/20 hover:bg-white/80" />
            </Carousel>
            
            <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent className="-ml-2">
                    {servicesRow2.map((service, index) => (
                        <CarouselItem key={index} className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3">
                            <ServiceCard service={service} index={index + servicesRow1.length} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="flex md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 backdrop-blur-sm text-primary border-primary/20 hover:bg-white/80" />
                <CarouselNext className="flex md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 backdrop-blur-sm text-primary border-primary/20 hover:bg-white/80" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
