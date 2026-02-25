import { Paintbrush, Laugh, Gift } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-accent" />,
    title: "Pinturinha Facial",
    description: "Transformamos as crianças em seus heróis e animais favoritos com tintas antialérgicas e muito brilho! Uma recordação colorida que encanta a todos.",
  },
  {
    icon: <Gift className="h-8 w-8 text-vibrant-pink" />,
    title: "Escultura em Balões",
    description: "Arte com balões que ganham formas de espadas, bichinhos e flores. O presente perfeito para cada convidado levar para casa!",
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
            {workshops.map((workshop, index) => {
                const borderColors = ["border-secondary", "border-accent", "border-vibrant-pink"];
                const bgColors = ["bg-secondary/10", "bg-accent/10", "bg-vibrant-pink/10"];
                const shadowColors = ["hover:shadow-secondary/30", "hover:shadow-accent/30", "hover:shadow-vibrant-pink/30"];
                
                return (
                    <Card 
                        key={workshop.title}
                        className={cn(
                            "flex w-full max-w-sm flex-col items-center text-center p-6 md:p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 animate-bounce-in border-4 bg-card",
                            borderColors[index],
                            shadowColors[index]
                        )}
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardHeader className="p-0 items-center">
                        <div className={cn("rounded-full p-4 mb-4", bgColors[index])}>
                            {workshop.icon}
                        </div>
                        <CardTitle className="text-xl md:text-2xl font-bold font-headline">{workshop.title}</CardTitle>
                      </CardHeader>
                      <CardDescription className="mt-4 text-base font-medium leading-relaxed text-foreground/90">
                        {workshop.description}
                      </CardDescription>
                    </Card>
                );
            })}
        </div>
        <div className="mt-16 text-center">
            <p className="text-xl font-medium text-foreground/80 mb-4">Quer o pacote completo?</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-full px-8 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-105">
                <Link href="#contact">Consultar Combos</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
