"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, MapPin, Gift } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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
        <nav className={cn("flex w-full items-center justify-between gap-4 rounded-full bg-background/90 px-4 h-16 backdrop-blur-lg transition-all duration-300 md:justify-around", scrolled ? 'shadow-lg border-b border-primary/30' : 'shadow-none')}>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/personagens" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground/70 transition-colors hover:text-primary">
              <Users className="h-5 w-5" /> Personagens
            </Link>
            <Link href="/#services" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground/70 transition-colors hover:text-primary">
              <Gift className="h-5 w-5" /> Serviços
            </Link>
          </div>
          
          <Link href="/" className="flex flex-shrink-0 items-center">
            <Image
              src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/Design%20sem%20nome%20(14).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvRGVzaWduIHNlbSBub21lICgxNCkucG5nIiwiaWF0IjoxNzcyNDkyODg4LCJleHAiOjQ4OTQ1NTY4ODh9.CEdsO1GsNNTUbhb4unjCYM9NC1YJ4_R9Yf5ZABMhvL8"
              alt="Comando da Alegria Logo"
              width={48}
              height={48}
              className="object-contain drop-shadow-lg"
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link href="/#coverage" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground/70 transition-colors hover:text-primary">
              <MapPin className="h-5 w-5" /> Área
            </Link>
            <Button asChild className="rounded-full bg-accent font-bold text-accent-foreground shadow-md transition-transform hover:scale-105 hover:bg-accent/90">
                <Link href="#contact">Orçamento!</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button asChild size="sm" className="rounded-full bg-accent font-bold text-accent-foreground">
                <Link href="#contact">Orçamento</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
