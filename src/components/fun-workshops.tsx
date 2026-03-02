'use client';

import { Paintbrush, Laugh, Gift } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-accent/10">
            <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
    </div>
)

const workshops = [
  {
    icon: <Laugh className="h-8 w-8 text-secondary" />,
    title: "Recreação Animada",
    description: "Brincadeiras clássicas, gincanas e muita energia para não deixar ninguém parado! Nossa equipe de recreadores transforma qualquer espaço em um parque de diversões.",
    bgColor: "bg-secondary/10",
    shadowColor: "hover:shadow-secondary/20",
    titleColor: "text-secondary",
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-accent" />,
    title: "Pinturinha Facial",
    description: "Transformamos as crianças em seus heróis e animais favoritos com tintas antialérgicas e muito brilho! Uma recordação colorida que encanta a todos.",
    bgColor: "bg-accent/10",
    shadowColor: "hover:shadow-accent/20",
    titleColor: "text-accent",
  },
  {
    icon: <Gift className="h-8 w-8 text-vibrant-pink" />,
    title: "Escultura em Balões",
    description: "Arte com balões que ganham formas de espadas, bichinhos e flores. O presente perfeito para cada convidado levar para casa!",
    bgColor: "bg-vibrant-pink/10",
    shadowColor: "hover:shadow-vibrant-pink/20",
    titleColor: "text-vibrant-pink",
  },
]

export default function FunWorkshops() {
  return (
    <section id="workshops" className="w-full py-20 md:py-32 lg:py-40 bg-accent/10 relative">
      <Wave />
      <div className="container mx-auto px-5 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px white' }}>
                <span className="text-secondary inline-block -rotate-2">Muito Mais</span>{' '}
                <span className="text-accent inline-block rotate-1">que</span>{' '}
                <span className="text-primary inline-block">Personagens!</span>
            </h2>
            <p className="max-w-[900px] text-base text-foreground/80 md:text-lg leading-relaxed">
              Além dos seus heróis e princesas favoritos, oferecemos oficinas que completam a diversão.
            </p>
        </div>
        <div className="grid justify-items-center gap-8 md:grid-cols-3">
            {workshops.map((workshop, index) => (
                <Card 
                    key={workshop.title}
                    className={cn(
                        "flex w-full max-w-sm flex-col items-center text-center rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-white/50 animate-bounce-in",
                        workshop.bgColor,
                        workshop.shadowColor
                    )}
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    <CardHeader className="p-6 md:p-8 items-center">
                        <div className="bg-white/50 rounded-full p-4 mb-4">
                            {workshop.icon}
                        </div>
                        <CardTitle className={cn("text-2xl font-headline", workshop.titleColor)}>{workshop.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8 pt-0 flex-grow">
                        <p className="text-base font-medium leading-relaxed text-foreground/80" style={{lineHeight: 1.8}}>
                            {workshop.description}
                        </p>
                    </CardContent>
                    <CardFooter className="p-6 md:p-8 pt-0">
                        <Button variant="outline" size="sm" className="rounded-full font-semibold">Ver Fotos</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
        <div className="mt-16 text-center">
            <Button asChild className="bg-vibrant-pink text-white hover:bg-vibrant-pink/90 rounded-full px-8 text-base font-bold shadow-lg transition-all animate-pulse-balloon hover:animate-none hover:scale-105 h-[50px] min-w-[240px]">
                <Link href="#contact">Ver Pacotes e Combos</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
