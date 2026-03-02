'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MoveDown } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative w-full h-[100svh] overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{
          backgroundImage: `url('https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/fundo%20comando.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvZnVuZG8gY29tYW5kby5wbmciLCJpYXQiOjE3NzI0OTE3NDcsImV4cCI6NDg5NDU1NTc0N30.Oqxd1q3rfMAVA4v94FMYPXHvpOQFZt7SIOpt_njvQdY')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-0" />
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center text-center gap-8 px-5">
        <div className="animate-fade-in-down flex flex-col items-center" style={{animationDelay: '0.2s'}}>
            <h1 className="sr-only">Comando da Alegria</h1>
            <Image
                src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/3422ba6e-664b-4a8a-a483-64cb728c37ea.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvMzQyMmJhNmUtNjY0Yi00YThhLWE0ODMtNjRjYjcyOGMzN2VhLnBuZyIsImlhdCI6MTc3MjQ5MTY3NSwiZXhwIjo0ODk0NTU1Njc1fQ.m-ZQXOoOP-JunPpl0C56sjNWfLIf47jEhP1UR9aQGBM"
                alt="Comando da Alegria Logo"
                width={600}
                height={600}
                className="h-auto w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl"
                priority
            />
            <p className="mx-auto mt-6 max-w-xl text-base text-white md:text-xl font-medium leading-relaxed drop-shadow-md">
                Personagens vivos e recreação para transformar sua festa em um evento inesquecível.
            </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button asChild size="lg" className="bg-vibrant-pink text-white hover:bg-vibrant-pink/90 rounded-full px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-105 animate-pulse-balloon w-full sm:w-auto">
                <Link href="#contact">RESERVAR DATA</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/50 bg-white/20 backdrop-blur-sm text-white font-bold hover:bg-white/30 rounded-full px-8 py-7 text-lg transition-all w-full sm:w-auto">
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
