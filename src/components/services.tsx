'use client';

import React from "react";
import {
  Cake,
  Paintbrush,
  Gift,
  PersonStanding,
  Laugh,
  ToyBrick,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        icon: <Laugh className="h-8 w-8 text-secondary" />, 
        title: "Recreação",
        description: "Brincadeiras clássicas, gincanas e muita energia para não deixar ninguém parado! Nossa equipe de recreadores transforma qualquer espaço em um parque de diversões."
    },
    { 
        icon: <Paintbrush className="h-8 w-8 text-accent" />, 
        title: "Pintura Facial",
        description: "Transformamos as crianças em seus heróis e animais favoritos com tintas antialérgicas e muito brilho! Uma recordação colorida que encanta a todos."
    },
    { 
        icon: <Gift className="h-8 w-8 text-vibrant-pink" />, 
        title: "Esculturas de Balão",
        description: "Arte com balões que ganham formas de espadas, bichinhos e flores. Um presente divertido para cada convidado levar para casa!"
    },
    { 
        icon: <Cake className="h-8 w-8 text-primary" />, 
        title: "Animação de Parabéns",
        description: "O momento mais especial da festa com uma entrada triunfal do personagem para cantar parabéns, tirar fotos inesquecíveis e animar a todos."
    },
    { 
        icon: <PersonStanding className="h-8 w-8 text-secondary" />, 
        title: "Pernas de Pau",
        description: "Leve sua festa para as alturas com nossos artistas em pernas de pau, trazendo um toque de circo e fantasia que impressiona adultos e crianças."
    },
    { 
        icon: <ToyBrick className="h-8 w-8 text-accent" />, 
        title: "Espaço Kids",
        description: "Um cantinho seguro e cheio de diversão para os pequenos, com monitores e atividades especiais. Ideal para eventos como casamentos e formaturas."
    }
];


export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-32 lg:py-40 bg-accent/10 relative">
      <Wave />
      <div className="container mx-auto px-5 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px white' }}>
                <span className="text-secondary inline-block -rotate-2">Nossos</span>{' '}
                <span className="text-accent inline-block rotate-1">Serviços</span>{' '}
                <span className="text-primary inline-block">Mágicos</span>
            </h2>
            <p className="max-w-[900px] text-base text-foreground/80 md:text-lg leading-relaxed">
              Tudo para transformar sua festa em um evento inesquecível, com a qualidade e o carinho da Comando da Alegria.
            </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {mainServices.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full text-center items-center rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-secondary/10 bg-white/60 backdrop-blur-sm">
                    <CardHeader className="items-center p-6">
                        <div className="bg-white/50 rounded-full p-4 mb-2 border">
                           {service.icon}
                        </div>
                       <CardTitle className="text-xl font-headline text-secondary">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0 px-6 pb-6">
                       <p className="text-base text-foreground/80 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex left-2 sm:-left-12" />
          <CarouselNext className="flex right-2 sm:-right-12" />
        </Carousel>

      </div>
    </section>
  );
}
