import Link from 'next/link';
import { Instagram, Facebook, Youtube, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background/80 w-full py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-background">
                Comando da Alegria © {new Date().getFullYear()}
            </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-background/80 hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-background/80 hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-background/80 hover:text-primary transition-colors">
            <Youtube className="h-6 w-6" />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
