import { Crown, Clock, PartyPopper } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-secondary/10">
            <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
    </div>
)

const features = [
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Pontualidade Britânica",
    description: "Chegamos sempre no horário para garantir que a magia comece na hora certa, sem estresse para você."
  },
  {
    icon: <Crown className="h-7 w-7 text-secondary" />,
    title: "Fantasias de Luxo",
    description: "Nossos trajes são de alta costura, fiéis aos personagens e impressionam pela riqueza de detalhes."
  },
  {
    icon: <PartyPopper className="h-7 w-7 text-accent" />,
    title: "Equipe Treinada e Animada",
    description: "Profissionais carismáticos e preparados para entreter, garantindo a segurança e diversão de todos."
  },
]

export default function ServiceHighlights() {
  return (
    <section id="services" className="w-full py-20 md:py-32 lg:py-40 bg-secondary/10 relative">
      <Wave />
      <div className="container mx-auto px-5 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px white' }}>
                <span className="text-secondary inline-block rotate-2">Por que</span>{' '}
                <span className="text-vibrant-pink inline-block -rotate-2">somos a</span>{' '}
                <span className="text-primary inline-block rotate-1">escolha certa?</span>
            </h2>
            <p className="max-w-[900px] text-base text-muted-foreground md:text-lg leading-relaxed">
              Oferecemos mais do que entretenimento, entregamos uma experiência mágica e inesquecível.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className="flex h-full flex-col items-center text-center p-4 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary animate-bounce-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="p-0 items-center">
                <div className="bg-primary/10 rounded-full p-3 mb-3 inline-block">
                    {feature.icon}
                </div>
                <CardTitle className="text-lg font-bold font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-sm font-medium tracking-wide md:text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
