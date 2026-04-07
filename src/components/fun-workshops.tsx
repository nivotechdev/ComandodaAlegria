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
  Camera,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            <Card className="w-full rounded-3xl shadow-xl border-2 border-primary/50 bg-white/50 backdrop-blur-md overflow-hidden">
                <CardHeader className="text-center p-6 md:p-8 bg-secondary/10">
                    <div className="inline-block mx-auto mb-4 bg-white p-4 rounded-full border-2 border-secondary/20">
                         <FlaskConical className="h-10 w-10 text-secondary" />
                    </div>
                    <CardTitle className="text-3xl font-headline text-secondary">Experiências Lúdicas</CardTitle>
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
                <CardFooter className="p-6 md:p-8 pt-0 text-center flex justify-center">
                    <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 font-bold shadow-lg transition-all hover:scale-105 h-auto py-3">
                        <Link href="/oficinas">
                            <Camera className="mr-2 h-5 w-5" />
                            Ver Galeria de Fotos
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
