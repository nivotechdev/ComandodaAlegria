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
       <div className="absolute top-0 left-0 w-full text-background overflow-hidden leading-none transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[150px]">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.3-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current"></path>
        </svg>
      </div>
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
