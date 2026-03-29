'use client';

import React from "react";
import {
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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-secondary/10">
            <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
    </div>
)

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
    { icon: <Star size={20} className="text-vibrant-pink" />, title: "Cortejos Natalinos" },
    { icon: <Sparkles size={20} className="text-secondary" />, title: "Encontro Encantado" },
];

export default function FunWorkshops() {
  return (
    <section id="workshops" className="w-full py-20 md:py-32 lg:py-40 bg-secondary/10 relative">
      <Wave />
      <div className="container mx-auto px-5 relative">
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
                             <AccordionItem value={`item-${index}`} key={index} className="border-b-primary/20">
                                <AccordionTrigger className="font-headline text-lg text-foreground/90 hover:no-underline hover:text-primary transition-colors text-left">
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
