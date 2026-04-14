'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, PartyPopper, CheckCircle } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="contact" className="w-full bg-[#fce4ec] py-20 md:py-32">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="text-center md:text-left">
            <div className="mb-4 inline-flex items-center justify-center py-2 px-4 rounded-full bg-black/5 text-sm font-semibold text-gray-700">
              <Sparkles className="h-4 w-4 mr-2 text-pink-500" />
              <span>Sua Festa sem Estresse</span>
            </div>

            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Transforme a Festa em um Dia Mágico!
            </h2>
            
            <p className="mt-6 text-lg max-w-xl text-gray-700 leading-relaxed">
              Nossa equipe cuida de cada detalhe para que você possa aproveitar a festa tanto quanto as crianças. Foco total na diversão, zero preocupação para você!
            </p>

            <ul className="mt-8 space-y-4 text-left inline-block">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-semibold text-gray-800">Personagens e Recreadores Profissionais</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-semibold text-gray-800">Brincadeiras e Gincanas para Todas as Idades</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-semibold text-gray-800">Estrutura Completa para a Festa</span>
              </li>
            </ul>
            
            <div className="mt-10">
              <Link
                href="#contact-form" 
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-accent/90 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/50 sm:px-10 sm:py-5 sm:text-lg"
              >
                <PartyPopper className="mr-3 h-6 w-6" />
                Receber Orçamento Grátis
              </Link>
              <p className="mt-3 text-sm text-gray-600 font-semibold">Vagas limitadas. Garanta já a sua data!</p>
            </div>
          </div>

          <div className="flex items-center justify-center p-6">
             <Image
                src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop"
                alt="Crianças se divertindo em uma festa com recreadores."
                width={500}
                height={500}
                className="rounded-3xl object-cover aspect-square shadow-2xl transform transition-transform duration-500 hover:scale-105"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
