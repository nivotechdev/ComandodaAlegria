import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Sparkles, Facebook } from 'lucide-react';
import LogoText from './logo-text';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.523.074-.797.372-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
)

const CloudDivider = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-white">
            <path d="M1200 120L0 120 0 89.16C168.89 40.24 374.31 8.29 565.42 58.74 710.13 97.12 856.41 91.31 1003.82 58.74 1092.74 40.24 1173.85 64.12 1200 89.16z" />
        </svg>
    </div>
)

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-primary/30 to-secondary/30 text-foreground w-full pt-32 relative overflow-hidden">
      <CloudDivider />
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-12 items-start justify-center text-center md:text-left relative z-10 pb-16">
        
        {/* Stars decoration */}
        <Sparkles className="absolute top-2/3 right-1/4 h-5 w-5 text-vibrant-pink/50 opacity-80 animate-twinkle" style={{animationDelay: '1s'}} />
        <Sparkles className="absolute bottom-10 right-10 h-8 w-8 text-white opacity-90 animate-twinkle" style={{animationDelay: '0.5s'}} />
        <Sparkles className="absolute bottom-1/4 left-1/4 h-4 w-4 text-accent/50 opacity-60 animate-twinkle" style={{animationDelay: '1.5s'}} />
        <Sparkles className="absolute top-1/2 left-[10%] h-6 w-6 text-primary/50 opacity-70 animate-twinkle" style={{animationDelay: '2s'}} />
        <Sparkles className="absolute bottom-1/3 right-[15%] h-5 w-5 text-secondary/50 opacity-60 animate-twinkle" style={{animationDelay: '2.5s'}} />

        <div className="flex flex-col items-center md:items-start gap-4">
             <Link href="/" className="flex flex-shrink-0 items-center gap-3">
                <Image
                    src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/comando%20da%20alegria%204k.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvY29tYW5kbyBkYSBhbGVncmlhIDRrLnBuZyIsImlhdCI6MTc3MTg3MTcyNSwiZXhwIjoxMjI3MzM1OTcyNX0.oKK1I_TIo5VZN1I8kagg3Q5hyi83aAbwnZRG4ZV_2Ig"
                    alt="Comando da Alegria Logo"
                    width={48}
                    height={48}
                    className="drop-shadow-lg"
                />
                <LogoText className="text-3xl" />
            </Link>
            <p className="font-medium text-foreground/80 max-w-xs">
                Criando memórias que duram para sempre.
            </p>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-headline text-2xl font-bold text-foreground">Mapa da Diversão</h3>
            <ul className="space-y-2">
                <li><Link href="#" className="font-semibold text-foreground/80 hover:text-accent transition-colors">Início</Link></li>
                <li><Link href="#characters" className="font-semibold text-foreground/80 hover:text-accent transition-colors">Personagens</Link></li>
                <li><Link href="#services" className="font-semibold text-foreground/80 hover:text-accent transition-colors">Serviços</Link></li>
            </ul>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-headline text-2xl font-bold text-foreground">Redes Encantadas</h3>
            <div className="flex items-center space-x-4">
                <Link href="#" className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-[#E4405F] transition-transform hover:scale-110 shadow-lg border-2 border-[#E4405F]/50">
                    <Instagram className="h-8 w-8" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-[#25D366] transition-transform hover:scale-110 shadow-lg border-2 border-[#25D366]/50">
                    <WhatsAppIcon className="h-9 w-9 p-0.5" />
                    <span className="sr-only">WhatsApp</span>
                </Link>
                <Link href="#" className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-[#1877F2] transition-transform hover:scale-110 shadow-lg border-2 border-[#1877F2]/50">
                    <Facebook className="h-8 w-8" />
                    <span className="sr-only">Facebook</span>
                </Link>
            </div>
        </div>
        
      </div>
       <div className="bg-accent text-accent-foreground text-center py-3 font-semibold text-sm">
           © {new Date().getFullYear()} Comando da Alegria • Levando magia onde você estiver!
       </div>
    </footer>
  );
}
