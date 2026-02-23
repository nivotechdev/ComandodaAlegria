import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "character-spider-man");

  return (
    <section className="relative w-full overflow-hidden bg-background pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
      
      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 lg:gap-20">
        <div className="text-center md:text-left">
            <h1 className="font-headline text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl" style={{textShadow: '2px 2px 0px hsl(var(--primary) / 0.3)'}}>
                Sua Festa <br/> com a <span className="text-primary animate-float inline-block">Magia</span> que Encanta!
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:mx-0 md:text-xl">
            Personagens vivos e recreação completa para transformar seu evento em um dia inesquecível.
            </p>
            <div className="mt-10">
            <Button asChild size="lg" className="animate-pulse-balloon bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-transform hover:scale-105">
                <Link href="#contact">Quero um Orçamento Mágico!</Link>
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
                        clipPath: 'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)'
                    }}
                    data-ai-hint={heroImage.imageHint}
                    priority
                />
            )}
        </div>
      </div>
      <div className="absolute bottom-[-1px] left-0 w-full text-card overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[150px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
}
