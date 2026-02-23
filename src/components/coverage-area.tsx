import { MapPin } from "lucide-react";

export default function CoverageArea() {
  return (
    <section id="coverage" className="w-full py-12 md:py-24 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="bg-secondary/10 rounded-full p-4">
                <MapPin className="h-12 w-12 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">
              Levamos a diversão onde você estiver!
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Atendemos em residências, salões de festas, condomínios e eventos corporativos. A magia não tem fronteiras!
            </p>
        </div>
      </div>
    </section>
  );
}
