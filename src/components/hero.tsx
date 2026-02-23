import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sparkles, Star, ToyBrick } from "lucide-react";

const BalloonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13.5 22C13.5 22 15.5 20 15.5 17C15.5 14 14 11 12 11C10 11 8.5 14 8.5 17C8.5 20 10.5 22 10.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C8.68629 2 6 5.58172 6 10C6 14.4183 8.68629 18 12 18C15.3137 18 18 14.4183 18 10C18 5.58172 15.3137 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
)

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "character-elsa");

  return (
    <section className="relative w-full overflow-hidden bg-background pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40">
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-accent/10 to-secondary/10"></div>
      <div className="absolute inset-0 bg-primary/10"></div>
      
      {/* Floating Elements */}
      <Sparkles className="absolute top-[10%] left-[5%] h-8 w-8 text-accent opacity-70 animate-float" />
      <Star className="absolute top-[20%] right-[10%] h-6 w-6 text-vibrant-pink opacity-60 animate-float-alt" style={{animationDelay: '1s'}} />
      <BalloonIcon className="absolute bottom-[20%] left-[15%] h-10 w-10 text-secondary opacity-50 animate-float" style={{animationDelay: '2s'}} />
      <ToyBrick className="absolute bottom-[10%] right-[5%] h-8 w-8 text-primary opacity-60 animate-float-alt" style={{animationDelay: '3s'}} />


      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 lg:gap-20">
        <div className="text-center md:text-left animate-fade-in-up">
            <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" style={{ textShadow: '3px 3px 0px white, -3px -3px 0px white, 3px -3px 0px white, -3px 3px 0px white' }}>
                <span className="text-primary inline-block -rotate-2">A Magia</span>{' '}
                <span className="text-secondary inline-block">da</span>{' '}
                <span className="text-accent inline-block rotate-1">Festa</span>{' '}
                <span className="text-vibrant-pink inline-block -rotate-1">Chegou!</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-foreground/80 md:mx-0 md:text-xl font-medium">
            Transformamos sua casa no cenário dos sonhos com nossos personagens vivos e recreação completa. Onde tem Comando da Alegria, tem diversão garantida!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="bg-vibrant-pink text-white hover:bg-vibrant-pink/90 rounded-full px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-100 w-full sm:w-auto">
                  <Link href="#contact">RESERVAR DATA</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary bg-background/50 backdrop-blur-sm text-primary-foreground font-bold hover:bg-primary/10 hover:text-foreground rounded-full px-8 py-7 text-lg transition-all w-full sm:w-auto">
                  <Link href="#characters">VER PERSONAGENS</Link>
              </Button>
            </div>
        </div>
        <div className="relative flex h-full min-h-[300px] items-center justify-center">
            <div className="absolute inset-0 m-auto h-[80%] w-[80%] rounded-full bg-secondary/20 blur-3xl"></div>
            {heroImage && (
                 <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={600}
                    height={600}
                    className="relative z-10 animate-float object-contain"
                    style={{
                        animationDelay: '0.5s',
                        clipPath: 'polygon(41% 4%, 82% 9%, 98% 36%, 93% 66%, 74% 94%, 42% 99%, 13% 82%, 2% 43%)'
                    }}
                    data-ai-hint={heroImage.imageHint}
                    priority
                />
            )}
        </div>
      </div>
      <div className="absolute bottom-[-1px] left-0 w-full text-background overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[150px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
}
