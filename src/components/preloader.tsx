'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This timer simulates the loading process.
    const timer = setTimeout(() => setLoading(false), 1800); 
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Prevent body scroll when preloader is visible
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-cover bg-center transition-opacity duration-1000 ease-out',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      style={{ backgroundImage: `url('https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/fundo%20comando.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvZnVuZG8gY29tYW5kby5wbmciLCJpYXQiOjE3NzI0OTE3NDcsImV4cCI6NDg5NDU1NTc0N30.Oqxd1q3rfMAVA4v94FMYPXHvpOQFZt7SIOpt_njvQdY')` }}
      aria-hidden={!loading}
    >
      <div
        className={cn(
          'flex flex-col items-center justify-center transform-gpu transition-all duration-1000 ease-out',
          loading ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        )}
      >
        <Image
          src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/3422ba6e-664b-4a8a-a483-64cb728c37ea.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvMzQyMmJhNmUtNjY0Yi00YThhLWE0ODMtNjRjYjcyOGMzN2VhLnBuZyIsImlhdCI6MTc3MjQ5MTY3NSwiZXhwIjo0ODk0NTU1Njc1fQ.m-ZQXOoOP-JunPpl0C56sjNWfLIf47jEhP1UR9aQGBM"
          alt="Comando da Alegria Logo"
          width={500}
          height={500}
          className="animate-pulse-logo h-auto max-w-[70vw] drop-shadow-xl md:max-w-md"
          priority
        />
        <p className="mt-8 text-2xl font-headline text-white drop-shadow-md">
          Preparando a diversão
          <span className="animate-dot-blink" style={{ animationDelay: '0s' }}>.</span>
          <span className="animate-dot-blink" style={{ animationDelay: '0.2s' }}>.</span>
          <span className="animate-dot-blink" style={{ animationDelay: '0.4s' }}>.</span>
        </p>
      </div>
    </div>
  );
}
