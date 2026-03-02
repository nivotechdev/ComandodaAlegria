'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveDown } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative w-full h-[100svh] overflow-hidden flex items-center justify-center will-change-transform bg-cover bg-center"
      style={{ backgroundImage: `url('https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/fundo%20comando.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvZnVuZG8gY29tYW5kby5wbmciLCJpYXQiOjE3NzI0OTE3NDcsImV4cCI6NDg5NDU1NTc0N30.Oqxd1q3rfMAVA4v94FMYPXHvpOQFZt7SIOpt_njvQdY')` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center text-center gap-8 px-5">
        <div className="animate-fade-in-down" style={{animationDelay: '0.2s'}}>
            <h1 className="font-headline text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}>
                <span className="text-primary inline-block -rotate-2">A Magia</span>{' '}
                <span className="text-secondary inline-block">da</span>{' '}
                <span className="text-accent inline-block rotate-1">Festa</span>{' '}
                <span className="text-vibrant-pink inline-block -rotate-1">Chegou!</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base text-white/90 md:text-lg font-normal leading-relaxed drop-shadow-md">
            Transformamos sua casa no cenário dos sonhos com nossos personagens vivos e recreação completa. Onde tem Comando da Alegria, tem diversão garantida!
            </p>
        </div>
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button asChild size="lg" className="bg-vibrant-pink text-white hover:bg-vibrant-pink/90 rounded-full px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-105 animate-pulse-balloon w-full sm:w-auto">
              <Link href="#contact">RESERVAR DATA</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-white/80 bg-white/20 backdrop-blur-sm text-white font-bold hover:bg-white/30 rounded-full px-8 py-7 text-lg transition-all w-full sm:w-auto">
              <Link href="#characters">VER PERSONAGENS</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce z-20">
          <MoveDown className="h-8 w-8" />
      </div>

    </section>
  );
}
