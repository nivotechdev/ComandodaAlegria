'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFab from "@/components/whatsapp-fab";

export default function AllCharactersPage() {
  const allCharacters = PlaceHolderImages.filter(img => img.id.startsWith("character-"));
  const categories = ["Todos", "Heróis", "Princesas", "Disney", "Coelho", "Papai Noel", "Outros"];

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredCharacters = selectedCategory === "Todos"
    ? allCharacters
    : allCharacters.filter(character => character.categories.includes(selectedCategory));

  return (
    <div className="flex min-h-screen flex-col text-foreground bg-background">
        <Header />
        <main className="flex-grow pt-24 pb-20 md:pt-32 md:pb-32">
            <div className="container mx-auto px-5">
                <div className="mb-8">
                    <Button asChild variant="outline" className="rounded-full font-bold transition-transform hover:scale-105 border-2 border-primary/50 bg-white/50 backdrop-blur-sm">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Voltar
                        </Link>
                    </Button>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px hsl(var(--background))' }}>
                        <span className="text-primary inline-block -rotate-2">Conheça</span>{' '}
                        <span className="text-secondary inline-block rotate-1">Nossa</span>{' '}
                        <span className="text-accent inline-block">Galeria</span>{' '}
                        <span className="text-vibrant-pink inline-block -rotate-1">de Estrelas!</span>
                    </h1>
                    <p className="max-w-[700px] text-base text-foreground/80 md:text-lg font-normal leading-relaxed">
                        Aqui a magia ganha vida! Explore nosso catálogo completo e encontre o personagem perfeito para fazer a alegria da sua festa.
                    </p>
                </div>
                
                <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
                    {categories.map((category) => (
                        <Button 
                            key={category} 
                            variant={selectedCategory === category ? "default" : "outline"}
                            className="rounded-full font-semibold transition-all hover:shadow-md text-base px-5 py-2 h-auto"
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Modern Square Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {filteredCharacters.map((character) => (
                         <div key={character.id} className="group relative aspect-square w-full overflow-hidden rounded-[20px] shadow-[0_8px_15px_rgba(0,0,0,0.08)]">
                            {/* 4px White "Polaroid" Border */}
                            <div className="absolute inset-0 rounded-[20px] border-4 border-white z-10 pointer-events-none"></div>
                            
                            <Image
                                src={character.imageUrl}
                                alt={character.description}
                                fill
                                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                loading="lazy"
                            />
                            
                            {/* Gradient Overlay for Caption */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            
                            {/* Character Name */}
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <h3 className="font-bold text-lg text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                    {character.id.split('-').slice(1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
        <Footer />
        <WhatsAppFab />
    </div>
  );
}
