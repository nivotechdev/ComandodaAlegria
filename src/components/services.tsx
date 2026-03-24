'use client';

import React from "react";
import {
  Cake,
  Paintbrush,
  Gift,
  PersonStanding,
  Laugh,
  ToyBrick,
  Star,
  Sparkles,
  FlaskConical,
  Sprout,
  Brush,
  Cookie,
  HeartHandshake,
  Scissors,
  Music,
  Map,
  Users,
  Bed,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-accent/10">
            <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
    </div>
)

const coreServices = [
  {
    icon: <Laugh className="h-8 w-8 text-secondary" />,
    title: "Recreação Divertida",
    description: "Nossa equipe de recreadores comanda a diversão com gincanas, brincadeiras clássicas e atividades energizantes que garantem a alegria e a participação de todas as idades.",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    hoverBorderColor: "hover:border-secondary/50",
    titleColor: "text-secondary",
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-accent" />,
    title: "Pintura Facial Mágica",
    description: "Transformamos crianças em seus personagens favoritos com tintas seguras, antialérgicas e um toque de brilho. Uma arte que encanta e colore a festa.",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    hoverBorderColor: "hover:border-accent/50",
    titleColor: "text-accent",
  },
  {
    icon: <Gift className="h-8 w-8 text-vibrant-pink" />,
    title: "Esculturas de Balão",
    description: "Nossos artistas modelam balões em espadas, flores e animais, criando uma lembrança interativa e divertida que cada convidado leva para casa.",
    bgColor: "bg-vibrant-pink/10",
    borderColor: "border-vibrant-pink/20",
    hoverBorderColor: "hover:border-vibrant-pink/50",
    titleColor: "text-vibrant-pink",
  },
  {
    icon: <Cake className="h-8 w-8 text-primary" />,
    title: "Animação de Parabéns",
    description: "Tornamos o momento do parabéns o ponto alto da festa, com música, interação e a presença especial do personagem escolhido para uma celebração inesquecível.",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    hoverBorderColor: "hover:border-primary/50",
    titleColor: "text-primary",
  },
  {
    icon: <PersonStanding className="h-8 w-8 text-secondary" />,
    title: "Recepção com Pernas de Pau",
    description: "Surpreenda seus convidados desde a chegada com uma recepção grandiosa. Nossos artistas em pernas de pau garantem um visual impactante e fotos memoráveis.",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    hoverBorderColor: "hover:border-secondary/50",
    titleColor: "text-secondary",
  }
];

const specialServices = [
    { icon: <ToyBrick className="h-8 w-8" />, title: "Espaço Kids", description: "Para formaturas e casamentos.", color: "text-accent" },
    { icon: <Star className="h-8 w-8" />, title: "Cortejos Natalinos", color: "text-vibrant-pink" },
    { icon: <Sparkles className="h-8 w-8" />, title: "Encontro Encantado", color: "text-secondary" },
];


const workshops = [
    { icon: <FlaskConical size={20} className="text-primary" />, title: "Massinha de Modelar Nuvem" },
    { icon: <Sprout size={20} className="text-secondary" />, title: "Jardinagem" },
    { icon: <Brush size={20} className="text-accent" />, title: "Pintura em Gesso" },
    { icon: <Cookie size={20} className="text-vibrant-pink" />, title: "Decoração de Mini Donuts" },
    { icon: <HeartHandshake size={20} className="text-primary" />, title: "Spa Day" },
    { icon: <Scissors size={20} className="text-secondary" />, title: "Paper Squishy" },
    { icon: <Music size={20} className="text-accent" />, title: "Baladinha" },
    { icon: <Map size={20} className="text-vibrant-pink" />, title: "Caça ao Tesouro" },
    { icon: <Users size={20} className="text-primary" />, title: "Festa Futebol" },
    { icon: <Bed size={20} className="text-secondary" />, title: "Noite do Pijama" },
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-20">
            {coreServices.map((service, index) => (
                <Card 
                    key={service.title}
                    className={cn(
                        "flex w-full max-w-sm flex-col items-center text-center rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border",
                        service.bgColor,
                        service.borderColor,
                        service.hoverBorderColor
                    )}
                    style={{ animationDelay: `${index * 100}ms`, animationName: 'fade-in-up', animationFillMode: 'both' }}
                >
                    <CardHeader className="p-6 md:p-8 items-center">
                        <div className="bg-white/50 rounded-full p-4 mb-4 border-2 border-white">
                            {service.icon}
                        </div>
                        <CardTitle className={cn("text-2xl font-headline", service.titleColor)}>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8 pt-0 flex-grow">
                        <p className="text-base font-medium leading-relaxed text-foreground/80" style={{lineHeight: 1.8}}>
                            {service.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="text-center mb-16">
            <h3 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-foreground/80">
                E Nossos <span className="text-vibrant-pink">Serviços Especiais</span>
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20">
             {specialServices.map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 group">
                    <div className="relative mb-4 transition-transform duration-300 group-hover:scale-110">
                        <div className={cn("absolute -inset-2 rounded-full opacity-20 blur-md", service.color.replace('text-', 'bg-'))}></div>
                        <div className="relative bg-white/60 backdrop-blur-sm p-5 rounded-full border-2 border-white">
                            {React.cloneElement(service.icon, { className: cn("h-8 w-8 md:h-10 md:w-10", service.color) })}
                        </div>
                    </div>
                    <h3 className="font-headline text-lg md:text-xl font-bold text-foreground">{service.title}</h3>
                    {service.description && <p className="text-sm text-foreground/70 mt-1">{service.description}</p>}
                </div>
            ))}
        </div>


        <div className="max-w-4xl mx-auto">
            <Card className="w-full rounded-3xl shadow-xl border-2 border-primary/20 bg-white/50 backdrop-blur-md overflow-hidden">
                <CardHeader className="text-center p-6 md:p-8 bg-primary/10">
                    <div className="inline-block mx-auto mb-4 bg-white p-4 rounded-full border-2 border-primary/20">
                         <FlaskConical className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-headline text-primary">Experiências Lúdicas</CardTitle>
                    <p className="text-base text-foreground/80 md:text-lg leading-relaxed pt-2">Oficinas criativas e divertidas para todas as idades.</p>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                     <Accordion type="single" collapsible className="w-full">
                        {workshops.map((workshop, index) => (
                             <AccordionItem value={`item-${index}`} key={index} className="border-b-secondary/20">
                                <AccordionTrigger className="font-headline text-lg text-foreground/90 hover:no-underline hover:text-secondary transition-colors text-left">
                                   <div className="flex items-center gap-4">
                                     {workshop.icon}
                                     <span>{workshop.title}</span>
                                   </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 text-base text-foreground/70 pl-10">
                                    Uma atividade interativa onde a imaginação corre solta. Ideal para despertar a criatividade da criançada.
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}
