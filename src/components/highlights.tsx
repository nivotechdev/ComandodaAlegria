'use client';

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const highlights = [
    {
        imageUrl: "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/teste.jfif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvdGVzdGUuamZpZiIsImlhdCI6MTc3NjE5MTU2NiwiZXhwIjoxMDUyOTY1Njc5NTY2fQ.pEEb5t-rEsWC-ZCQwhFMP8HTvdKNDBClCoyB2UckoEo",
        imageHint: "Festa da Uva",
        title: "Presença na Festa da Uva!",
        description: "Marcamos presença na tradicional Festa da Uva, levando alegria e encantamento para todas as idades. Nossos personagens foram o centro das atenções, tirando fotos e interagindo com o público em um dos maiores eventos da região."
    }
];

const HighlightFeature = ({ highlight }) => {
    return (
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16">
            {/* Image Block */}
            <div className="relative group">
                 <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105">
                    <Image
                        src={highlight.imageUrl}
                        alt={highlight.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Content Block */}
            <div className="flex flex-col justify-center">
                <h3 className="font-headline text-3xl font-bold text-gray-900 mb-4">
                    {highlight.title}
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                    {highlight.description}
                </p>
                <div className="mt-6 flex items-center gap-3 text-amber-500 font-semibold">
                    <Star className="h-5 w-5" />
                    <span>Destaque de 2026</span>
                </div>
            </div>
        </div>
    );
};


export default function Highlights() {
  return (
    <section id="highlights" className="w-full py-20 md:py-32 bg-blue-100">
      <div className="container mx-auto px-5">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                Nossos Destaques
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Fique por dentro das nossas últimas novidades e eventos especiais. Aqui compartilhamos os momentos que nos enchem de orgulho!
            </p>
        </div>
        
        <div className="grid items-start gap-20 md:gap-28">
            {highlights.map((highlight, index) => (
                <HighlightFeature 
                    key={index} 
                    highlight={highlight} 
                />
            ))}
        </div>
      </div>
    </section>
  );
}
