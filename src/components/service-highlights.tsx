import { Award, Clock, PartyPopper } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-sky-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">
              Por que somos a escolha certa?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos mais do que entretenimento, entregamos uma experiência mágica e inesquecível.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col items-center text-center p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                    {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
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
