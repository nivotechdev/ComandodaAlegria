import Link from 'next/link';
import { Instagram, Sparkles } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.523.074-.797.372-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
)

const BalloonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13.5 22C13.5 22 15.5 20 15.5 17C15.5 14 14 11 12 11C10 11 8.5 14 8.5 17C8.5 20 10.5 22 10.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C8.68629 2 6 5.58172 6 10C6 14.4183 8.68629 18 12 18C15.3137 18 18 14.4183 18 10C18 5.58172 15.3137 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
)

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-primary-foreground w-full pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-12 items-start justify-center text-center md:text-left relative z-10 pb-16">
        
        <div className="flex flex-col items-center md:items-start gap-4">
             <Link href="/" className="flex flex-shrink-0 items-center gap-3">
                <Sparkles className="h-12 w-12 text-accent drop-shadow-lg" />
                <span className="font-headline text-3xl font-bold text-primary-foreground">
                Comando da Alegria
                </span>
            </Link>
            <p className="text-primary-foreground/80 max-w-xs">
                Transformando sua festa em um evento inesquecível com a magia que encanta.
            </p>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-headline text-2xl font-bold text-primary-foreground">Mapa da Diversão</h3>
            <ul className="space-y-2">
                <li><Link href="#characters" className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">Personagens</Link></li>
                <li><Link href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">Serviços</Link></li>
                <li><Link href="#coverage" className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">Área de Atendimento</Link></li>
                <li><Link href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">Fale Conosco</Link></li>
            </ul>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-headline text-2xl font-bold text-primary-foreground">Redes Encantadas</h3>
            <div className="flex items-center space-x-4">
                <Link href="#" className="h-16 w-16 bg-[#E4405F] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 shadow-lg">
                    <Instagram className="h-8 w-8" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="h-16 w-16 bg-[#25D366] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 shadow-lg">
                    <WhatsAppIcon className="h-9 w-9 p-0.5" />
                    <span className="sr-only">WhatsApp</span>
                </Link>
            </div>
             <div className="absolute right-4 bottom-4 flex gap-2 text-vibrant-pink animate-float">
                <BalloonIcon className="w-8 h-8 -rotate-12" />
                <BalloonIcon className="w-8 h-8 rotate-12 self-end" style={{animationDelay: '0.5s'}} />
            </div>
        </div>
      </div>
       <div className="bg-accent text-accent-foreground text-center py-4 font-semibold">
           Feito com amor e muita alegria! © {new Date().getFullYear()} Comando da Alegria.
       </div>
    </footer>
  );
}
