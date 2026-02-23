import { Button } from "@/components/ui/button";
import Link from "next/link";
import Blob from "@/components/blob";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-sky-50/50 pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40">
      <Blob className="absolute top-[-20%] left-[-20%] h-[50rem] w-[50rem] text-primary/10 opacity-50" />
      <Blob className="absolute bottom-[-30%] right-[-30%] h-[60rem] w-[60rem] text-secondary/10 opacity-50 -rotate-90" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Levamos a <span className="text-primary">Magia</span> até Você!
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Personagens vivos e recreação completa para transformar sua festa em um evento inesquecível.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="animate-pulse bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-lg font-bold shadow-lg hover:shadow-xl">
            <Link href="#contact">Quero um Orçamento Agora!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
