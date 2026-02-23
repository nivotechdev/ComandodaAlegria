import Link from 'next/link';
import { Instagram, Facebook, Youtube, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background/80 w-full pt-24 pb-8 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full text-background/10 overflow-hidden leading-none transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[150px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-between relative z-10">
        <div className="flex items-center gap-2 mb-6 md:mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="text-2xl font-semibold text-background font-headline">
                Comando da Alegria
            </span>
        </div>
         <p className="text-center text-background/70 max-w-lg mb-6">
            Pronto para a melhor festa de todas? Entre em contato e vamos criar memórias incríveis juntos!
        </p>
        <div className="flex items-center space-x-6 mb-8">
          <Link href="#" className="text-background/80 hover:text-primary transition-transform hover:scale-125">
            <Instagram className="h-8 w-8" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-background/80 hover:text-primary transition-transform hover:scale-125">
            <Facebook className="h-8 w-8" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-background/80 hover:text-primary transition-transform hover:scale-125">
            <Youtube className="h-8 w-8" />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
         <span className="text-sm text-background/50">
                © {new Date().getFullYear()} Comando da Alegria. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
