'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const characters = [
  {
    name: "Homem-Aranha",
    imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    textColor: "text-red-700",
  },
  {
    name: "Elsa",
    imageUrl: "https://images.unsplash.com/photo-1596495760884-db73a35f29d2?q=80&w=800&auto=format&fit=crop", // Placeholder, ideal seria uma imagem da Elsa
    bgColor: "bg-blue-300/10",
    borderColor: "border-blue-400/20",
    textColor: "text-blue-600",
  },
  {
    name: "Mickey Mouse",
    imageUrl: "https://images.unsplash.com/photo-1590779799864-324271383b4c?q=80&w=800&auto=format&fit=crop", // Placeholder
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-500/20",
    textColor: "text-yellow-700",
  },
  {
    name: "Batman",
    imageUrl: "https://images.unsplash.com/photo-1531259683007-01607b626355?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-gray-800/10",
    borderColor: "border-gray-700/20",
    textColor: "text-gray-800",
  },
   {
    name: "Patrulha Canina",
    imageUrl: "https://images.unsplash.com/photo-1600369213198-ac5c772b2583?q=80&w=800&auto=format&fit=crop", // Placeholder
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    textColor: "text-sky-700",
  },
  {
    name: "Buzz Lightyear",
    imageUrl: "https://images.unsplash.com/photo-1519325995573-d1604a11a84f?q=80&w=800&auto=format&fit=crop", // Placeholder
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-700",
  }
];

const CharacterCard = ({ character }) => (
  <Card className={cn("overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg", character.bgColor, character.borderColor)}>
    <CardContent className="p-0">
      <div className="aspect-h-4 aspect-w-3 relative">
        <Image 
          src={character.imageUrl} 
          alt={character.name} 
          fill 
          className="object-cover" 
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className={cn("font-bold text-lg text-center", character.textColor)}>{character.name}</h3>
      </div>
    </CardContent>
  </Card>
);

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-20 md:py-32 bg-gradient-to-b from-pink-100 to-gray-50">
      <div className="container mx-auto px-5">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-primary">Conheça</span> Nossa Galeria de <span className="text-accent">Estrelas!</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            Temos um universo de personagens prontos para levar a magia até você. Veja alguns dos nossos heróis e heroínas mais amados!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {characters.map((character) => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
}
