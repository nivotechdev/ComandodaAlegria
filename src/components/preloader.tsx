'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This timer simulates the loading process.
    const timer = setTimeout(() => setLoading(false), 2500); 
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
        'fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-primary/20 via-vibrant-pink/20 to-secondary/20 transition-opacity duration-1000 ease-out',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!loading}
    >
      <div
        className={cn(
          'transform-gpu transition-all duration-1000 ease-out',
          loading ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        )}
      >
        <Image
          src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/comando%20da%20alegria%204k.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvY29tYW5kbyBkYSBhbGVncmlhIDRrLnBuZyIsImlhdCI6MTc3MjQxMzk5NCwiZXhwIjoxNTc3NDM5Nzk5NH0.bvQzmZhFicOs95Zh2TGQlT9I5OaZahNgth8r3YeXyaE"
          alt="Comando da Alegria Logo"
          width={500}
          height={500}
          className="animate-pulse-logo h-auto max-w-[70vw] drop-shadow-xl md:max-w-md"
          priority
        />
      </div>
    </div>
  );
}
