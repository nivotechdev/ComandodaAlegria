import CharacterCatalog from "@/components/character-catalog";
import CoverageArea from "@/components/coverage-area";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhatsAppFab from "@/components/whatsapp-fab";
import AboutUs from "@/components/about-us";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-foreground bg-background overflow-x-hidden">
      <Header />
      <main className="flex-grow relative z-0">
        <Hero />
        <AboutUs />
        <CharacterCatalog />
        <Services />
        <CoverageArea />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
