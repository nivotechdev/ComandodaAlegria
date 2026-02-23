import { Award, Clock, PartyPopper } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Wave = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-secondary/10">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
    </div>
)

const features = [
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Pontualidade Britânica",
    description: "Chegamos sempre no horário para garantir que a magia comece na hora certa, sem estresse para você."
  },
  {
    icon: <Award className="h-10 w-10 text-secondary" />,
    title: "Fantasias de Luxo",
    description: "Nossos trajes são de alta costura, fiéis aos personagens e impressionam pela riqueza de detalhes."
  },
  {
    icon: <PartyPopper className="h-10 w-10 text-accent" />,
    title: "Equipe Treinada e Animada",
    description: "Profissionais carismáticos e preparados para entreter, garantindo a segurança e diversão de todos."
  },
]

export default function ServiceHighlights() {
  return (
    <section id="services" className="w-full py-20 md:py-32 lg:py-40 bg-secondary/10 relative">
      <Wave />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '3px 3px 0px white' }}>
                <span className="text-secondary inline-block rotate-2">Por que</span>{' '}
                <span className="text-vibrant-pink inline-block -rotate-2">somos a</span>{' '}
                <span className="text-primary inline-block rotate-1">escolha certa?</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos mais do que entretenimento, entregamos uma experiência mágica e inesquecível.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className="flex flex-col items-center text-center p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary animate-bounce-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="p-0">
                <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                    {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-4 text-base">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
