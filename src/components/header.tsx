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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300",
        scrolled ? "pt-2" : "pt-4"
      )}
    >
      <div className="container px-4 md:px-6">
        <nav className={cn("flex w-full items-center justify-between gap-4 rounded-full bg-card/80 px-4 py-2 backdrop-blur-lg transition-all duration-300 md:justify-around", scrolled ? 'shadow-lg ring-1 ring-black/5' : 'shadow-none')}>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/personagens" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground/70 transition-colors hover:text-primary">
              <Users className="h-5 w-5" /> Personagens
            </Link>
            <Link href="/#services" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground/70 transition-colors hover:text-primary">
              <Gift className="h-5 w-5" /> Serviços
            </Link>
          </div>
          
          <Link href="/" className="flex flex-shrink-0 items-center gap-2">
            <Image
              src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/comando%20da%20alegria%204k.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvY29tYW5kbyBkYSBhbGVncmlhIDRrLnBuZyIsImlhdCI6MTc3MTg3MTcyNSwiZXhwIjoxMjI3MzM1OTcyNX0.oKK1I_TIo5VZN1I8kagg3Q5hyi83aAbwnZRG4ZV_2Ig"
              alt="Comando da Alegria Logo"
              width={40}
              height={40}
              className="drop-shadow-lg"
            />
            <span className="hidden font-headline text-2xl font-bold text-foreground sm:block">
              Comando da Alegria
            </span>
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
