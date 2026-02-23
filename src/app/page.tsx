import CharacterCatalog from "@/components/character-catalog";
import CoverageArea from "@/components/coverage-area";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FunWorkshops from "@/components/fun-workshops";
import ServiceHighlights from "@/components/service-highlights";
import WhatsAppFab from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-foreground bg-background">
      <Header />
      <main className="flex-grow relative z-0">
        <Hero />
        <CharacterCatalog />
        <FunWorkshops />
        <ServiceHighlights />
        <CoverageArea />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
