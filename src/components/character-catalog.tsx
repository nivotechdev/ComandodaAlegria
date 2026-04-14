'use client';

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

// Card component for the square gallery, as requested
const CharacterCard = ({ character }) => {
  if (!character) return null;

  return (
    <div className="group relative aspect-square w-full overflow-hidden rounded-[20px] shadow-[0_8px_15px_rgba(0,0,0,0.08)]">
      {/* 4px White "Polaroid" Border */}
      <div className="absolute inset-0 rounded-[20px] border-4 border-white z-10 pointer-events-none"></div>
      
      <Image
        src={character.imageUrl}
        alt={character.name}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      
      {/* Gradient Overlay to make the name stand out */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      
      {/* Character Name */}
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="font-bold text-lg text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          {character.name}
        </h3>
      </div>
    </div>
  );
};

export default function CharacterCatalog() {
  // Using professional images as requested
  const characters = [
    { id: "character-spider-man", name: "Homem-Aranha" },
    { id: "character-elsa", name: "Elsa" },
    { id: "character-mickey-mouse", name: "Mickey Mouse" },
    { id: "character-captain-america", name: "Capitão América" },
  ].map(char => {
      const imageData = PlaceHolderImages.find(img => img.id === char.id);
      return { ...char, ...imageData };
  });

  return (
    <section id="character-catalog" className="w-full bg-gradient-to-b from-blue-100 to-pink-100 py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900">
            Conheça Nossa Galeria de Estrelas!
          </h2>
          <p className="mt-4 text-lg leading-[1.6] text-foreground/70">
            Personagens encantadores que transformam qualquer festa em um evento inesquecível.
          </p>
        </div>

        {/* Modern Square Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 flex justify-center">
            <Link
              href="/personagens"
              className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/50"
            >
                Ver Todos os Personagens
                <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
        </div>
      </div>
    </section>
  );
}