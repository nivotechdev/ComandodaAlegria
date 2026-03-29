'use client';

import React from "react";
import Image from "next/image";
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
        imageUrl: "https://picsum.photos/seed/recreacao/400/300",
        imageHint: "kids playing",
        title: "Recreação",
        description: "Brincadeiras clássicas, gincanas e muita energia para não deixar ninguém parado!"
    },
    {
        imageUrl: "https://picsum.photos/seed/pintura/400/300",
        imageHint: "face painting",
        title: "Pintura Facial",
        description: "Transformamos as crianças em seus heróis e animais favoritos com tintas antialérgicas."
    },
    {
        imageUrl: "https://picsum.photos/seed/balao/400/300",
        imageHint: "balloon animals",
        title: "Esculturas de Balão",
        description: "Arte com balões que ganham formas de espadas, bichinhos e flores."
    },
    {
        imageUrl: "https://picsum.photos/seed/parabens/400/300",
        imageHint: "birthday cake",
        title: "Animação de Parabéns",
        description: "O momento mais especial da festa com uma entrada triunfal do personagem para cantar parabéns."
    },
    {
        imageUrl: "https://picsum.photos/seed/pernas/400/300",
        imageHint: "stilt walker",
        title: "Pernas de Pau",
        description: "Leve sua festa para as alturas com nossos artistas em pernas de pau e um toque de circo."
    },
    {
        imageUrl: "https://picsum.photos/seed/kids/400/300",
        imageHint: "kids playground",
        title: "Espaço Kids",
        description: "Um cantinho seguro e cheio de diversão para os pequenos, com monitores e atividades."
    }
];

const ServiceCard = ({ service }: { service: typeof mainServices[0] }) => {
    return (
        <div className="group flex flex-col items-center text-center bg-white rounded-[32px] p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
            <div className="relative mb-6 h-24 w-24 rounded-full overflow-hidden">
                <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={service.imageHint}
                    sizes="96px"
                />
            </div>
            <h3 className="font-headline text-xl font-bold text-foreground">
                {service.title}
            </h3>
            <p className="mt-2 text-base text-foreground/70 leading-relaxed">
                {service.description}
            </p>
        </div>
    );
};


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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
            ))}
        </div>
      </div>
    </section>
  );
}
