"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, MapPin, Gift, Menu, Instagram, Facebook, Sparkles, Heart } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.523.074-.797.372-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pt-2",
        scrolled ? "opacity-100" : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      <div className="container px-5">
        <nav className={cn("flex w-full items-center justify-between rounded-full bg-background/90 px-4 h-16 backdrop-blur-lg transition-all duration-300", scrolled ? 'shadow-lg border border-primary/20' : 'shadow-none')}>
          
          <Link href="/" className="flex flex-shrink-0 items-center">
            <Image
              src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/Design%20sem%20nome%20(14).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvRGVzaWduIHNlbSBub21lICgxNCkucG5nIiwiaWF0IjoxNzc0Mzc0MjUzLCJleHAiOjM1MDQwMDE3NzA4NzAyNTN9._-zK2NVcZ4QtD_GnecAq_HMAP8lODMEPCZGILo8vsXo"
              alt="Comando da Alegria Logo"
              width={160}
              height={44}
              className="h-14 w-auto object-contain drop-shadow-lg"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/personagens" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground/70 transition-colors hover:text-primary">
              <Users className="h-5 w-5" /> Personagens
            </Link>
            <Link href="/#services" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground/70 transition-colors hover:text-primary">
              <Gift className="h-5 w-5" /> Serviços
            </Link>
             <Link href="/#coverage" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground/70 transition-colors hover:text-primary">
              <MapPin className="h-5 w-5" /> Área
            </Link>
            <Link href="/#about-us" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground/70 transition-colors hover:text-primary">
              <Heart className="h-5 w-5" /> Sobre Nós
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:flex rounded-full bg-accent font-bold text-accent-foreground shadow-md transition-transform hover:scale-105 hover:bg-accent/90">
                <Link href="#contact">Orçamento!</Link>
            </Button>
            <div className="flex items-center gap-1 md:hidden">
              <Button asChild size="sm" className="rounded-full bg-accent font-bold text-accent-foreground">
                  <Link href="#contact">Orçamento</Link>
              </Button>
              {isMounted && (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Abrir menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[80vw] bg-gradient-to-br from-primary/30 to-secondary/30 p-0 border-l-2 border-vibrant-pink/50">
                    <div className="relative flex h-full flex-col overflow-hidden">
                        
                        {/* Stars decoration */}
                        <Sparkles className="absolute top-1/3 right-1/4 h-5 w-5 text-white/50 opacity-80 animate-twinkle" style={{animationDelay: '1s'}} />
                        <Sparkles className="absolute bottom-10 right-10 h-8 w-8 text-white/90 opacity-90 animate-twinkle" style={{animationDelay: '0.5s'}} />
                        <Sparkles className="absolute bottom-1/4 left-1/4 h-4 w-4 text-white/60 opacity-60 animate-twinkle" style={{animationDelay: '1.5s'}} />
                        <Sparkles className="absolute top-1/2 left-[10%] h-6 w-6 text-primary/50 opacity-70 animate-twinkle" style={{animationDelay: '2s'}} />
                        <Sparkles className="absolute bottom-1/3 right-[15%] h-5 w-5 text-white/70 opacity-60 animate-twinkle" style={{animationDelay: '2.5s'}} />

                        <div className="flex items-center justify-center p-4 border-b border-white/20">
                            <Link href="/">
                                <Image
                                    src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/Design%20sem%20nome%20(14).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvRGVzaWduIHNlbSBub21lICgxNCkucG5nIiwiaWF0IjoxNzc0Mzc0MjUzLCJleHAiOjM1MDQwMDE3NzA4NzAyNTN9._-zK2NVcZ4QtD_GnecAq_HMAP8lODMEPCZGILo8vsXo"
                                    alt="Comando da Alegria Logo"
                                    width={70}
                                    height={70}
                                    className="drop-shadow-lg"
                                />
                            </Link>
                        </div>
                      <nav className="flex flex-grow flex-col items-center gap-8 text-center font-headline text-xl font-medium mt-8">
                        <Link href="/personagens" className="text-white drop-shadow-md transition-all duration-300 hover:scale-110">Personagens</Link>
                        <Link href="/#services" className="text-white drop-shadow-md transition-all duration-300 hover:scale-110">Serviços</Link>
                        <Link href="/#coverage" className="text-white drop-shadow-md transition-all duration-300 hover:scale-110">Área de Atendimento</Link>
                        <Link href="/#about-us" className="text-white drop-shadow-md transition-all duration-300 hover:scale-110">Sobre Nós</Link>
                        
                        <div className="pt-8">
                             <Button asChild className="bg-vibrant-pink text-white hover:bg-vibrant-pink/90 rounded-full px-8 text-base font-bold shadow-lg transition-all animate-pulse-balloon hover:animate-none hover:scale-105 h-[50px] min-w-[240px]">
                                <Link href="#contact">Orçamento!</Link>
                            </Button>
                        </div>
                      </nav>

                      <div className="mt-auto border-t border-white/20 p-6">
                        <p className="mb-4 text-center font-headline text-base text-white/80">Acompanhe nossa alegria:</p>
                        <div className="flex items-center justify-center space-x-4">
                           <Link href="#" className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-[#E4405F] transition-transform hover:scale-110 shadow-lg border-2 border-[#E4405F]/50">
                                <Instagram className="h-8 w-8" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-[#25D366] transition-transform hover:scale-110 shadow-lg border-2 border-[#25D366]/50">
                                <WhatsAppIcon className="h-9 w-9 p-0.5" />
                                <span className="sr-only">WhatsApp</span>
                            </Link>
                            <Link href="#" className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-[#1877F2] transition-transform hover:scale-110 shadow-lg border-2 border-[#1877F2]/50">
                                <Facebook className="h-8 w-8" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              )}
            </div>
          </div>

        </nav>
      </div>
    </header>
  );
}
