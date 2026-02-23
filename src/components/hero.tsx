import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Star, MoveDown } from "lucide-react";

export default function Hero() {

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center pt-20">
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-vibrant-pink/20 to-secondary/20"></div>
      
      {/* Floating Elements / Confetti and Stars */}
      <Sparkles className="absolute top-[10%] left-[5%] h-8 w-8 text-accent opacity-70 animate-float" />
      <Star className="absolute top-[15%] right-[10%] h-6 w-6 text-vibrant-pink opacity-80 animate-twinkle" style={{animationDelay: '0.5s'}} />
      <Sparkles className="absolute top-[50%] left-[20%] h-5 w-5 text-accent opacity-70 animate-twinkle" style={{animationDelay: '1.5s'}} />
      <Star className="absolute top-[80%] right-[15%] h-7 w-7 text-vibrant-pink opacity-60 animate-float" style={{animationDelay: '2.5s'}} />
      <Star className="absolute top-[40%] left-[40%] h-4 w-4 text-primary opacity-70 animate-twinkle" />
      <Sparkles className="absolute top-[70%] left-[10%] h-8 w-8 text-secondary opacity-60 animate-float-alt" style={{animationDelay: '1s'}} />


      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center text-center gap-8 px-4">
        <div className="animate-fade-in-down" style={{animationDelay: '0.2s'}}>
            <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" style={{ textShadow: '3px 3px 0px white, -3px -3px 0px white, 3px -3px 0px white, -3px 3px 0px white' }}>
                <span className="text-primary inline-block -rotate-2">A Magia</span>{' '}
                <span className="text-secondary inline-block">da</span>{' '}
                <span className="text-accent inline-block rotate-1">Festa</span>{' '}
                <span className="text-vibrant-pink inline-block -rotate-1">Chegou!</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-foreground/80 md:text-xl font-medium">
            Transformamos sua casa no cenário dos sonhos com nossos personagens vivos e recreação completa. Onde tem Comando da Alegria, tem diversão garantida!
            </p>
        </div>
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button asChild size="lg" className="bg-vibrant-pink text-white hover:bg-vibrant-pink/90 rounded-full px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-105 animate-pulse-balloon w-full sm:w-auto">
              <Link href="#contact">RESERVAR DATA</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-primary bg-background/50 backdrop-blur-sm text-primary-foreground font-bold hover:bg-primary/10 hover:text-foreground rounded-full px-8 py-7 text-lg transition-all w-full sm:w-auto">
              <Link href="#characters">VER PERSONAGENS</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/50 animate-bounce z-20">
          <MoveDown className="h-8 w-8" />
      </div>

    </section>
  );
}
