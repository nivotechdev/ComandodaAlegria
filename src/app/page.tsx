import CharacterCatalog from "@/components/character-catalog";
import CoverageArea from "@/components/coverage-area";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ServiceHighlights from "@/components/service-highlights";
import WhatsAppFab from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CharacterCatalog />
        <ServiceHighlights />
        <CoverageArea />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
