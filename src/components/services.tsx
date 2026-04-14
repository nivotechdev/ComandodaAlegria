'use client';

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

const services = [
    {
        imageUrl: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop",
        imageHint: "Crianças se divertindo em uma festa com recreadores.",
        title: "Recreação Cheia de Energia",
        description: "Nossa equipe lidera gincanas vibrantes, brincadeiras clássicas e atividades que mantêm todas as crianças engajadas, rindo e se divertindo do início ao fim."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1596495760884-db73a35f29d2?q=80&w=800&auto=format&fit=crop",
        imageHint: "Criança com o rosto pintado de super-herói.",
        title: "Pintura Facial Mágica",
        description: "Transformamos os pequenos em seus personagens dos sonhos! Usamos apenas tintas hipoalergênicas e seguras para a pele, criando desde super-heróis até fadas encantadas."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1519325995573-d1604a11a84f?q=80&w=800&auto=format=fit=crop",
        imageHint: "Espada de balão colorida em uma festa infantil.",
        title: "Esculturas Incríveis de Balão",
        description: "Nossos artistas transformam balões coloridos em espadas, animais, flores e o que mais a imaginação permitir, presenteando cada criança com uma lembrança especial."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1600369213198-ac5c772b2583?q=80&w=800&auto=format=fit=crop",
        imageHint: "Personagem animado comemorando o aniversário com uma criança.",
        title: "Animação de Parabéns",
        description: "O ponto alto da festa! Seu personagem favorito faz uma entrada triunfal para cantar 'Parabéns', tirar fotos e criar um momento inesquecível para o aniversariante."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1590779799864-324271383b4c?q=80&w=800&auto=format=fit=crop",
        imageHint: "Artista em pernas de pau interagindo com convidados.",
        title: "Pernas de Pau Gigantes",
        description: "Nossos artistas em pernas de pau trazem uma dose de encanto e grandiosidade, interagindo com os convidados e criando um espetáculo visual que eleva o nível da sua festa."
    }
];

const ServiceFeature = ({ service, reverse = false }) => {
    return (
        <div className={cn("grid md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16", { "md:[&>*:first-child]:order-last": reverse })}> 
            {/* Image Block */}
            <div>
                <div className="relative group">
                     <div className={cn(
                        "absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500",
                        { "from-secondary/20 to-primary/20": reverse }
                    )}></div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src={service.imageUrl}
                            alt={service.imageHint}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
                <p className="mt-4 text-center text-md italic text-foreground/70">
                    {service.imageHint}
                </p>
            </div>

            {/* Content Block */}
            <div className="flex flex-col justify-center">
                <h3 className="font-headline text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed h-36">
                    {service.description}
                </p>
                <div className="mt-6 flex items-center gap-3 text-secondary font-semibold">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Diversão garantida</span>
                </div>
            </div>
        </div>
    );
};


export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-100 to-pink-100">
      <div className="container mx-auto px-5">
        
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                Magia Onde Você Estiver!
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Oferecemos um leque de atividades encantadoras para complementar a presença do seu personagem favorito e tornar sua festa um sucesso absoluto.
            </p>
        </div>
        
        <div className="grid items-start gap-20 md:gap-28">
            {services.map((service, index) => (
                <ServiceFeature 
                    key={index} 
                    service={service} 
                    reverse={index % 2 !== 0} 
                />
            ))}
        </div>
      </div>
    </section>
  );
}
