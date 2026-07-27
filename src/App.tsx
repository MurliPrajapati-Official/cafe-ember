import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeDivider } from './components/MarqueeDivider';
import { EditorialQuote } from './components/EditorialQuote';
import { TodaysCounter } from './components/TodaysCounter';
import { SignatureProducts } from './components/SignatureProducts';
import { Storytelling } from './components/Storytelling';
import { PastryWall } from './components/PastryWall';
import { Atmosphere } from './components/Atmosphere';
import { Menu } from './components/Menu';
import { MapLocation } from './components/MapLocation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full">
      <div className="noise-overlay" />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <MarqueeDivider />
        <EditorialQuote 
          quote="Would have given 6 stars. Felt welcomed like a local." 
          author="Ingrid L." 
          spacing="pt-24 pb-24"
        />
        <TodaysCounter />
        <EditorialQuote 
          quote="The best cardamom bun in Grünerløkka. Hands down." 
          author="Marcus V." 
          spacing="py-32"
          align="right"
          backgroundImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
          theme="dark"
        />
        <SignatureProducts />
        <Storytelling />
        <PastryWall />
        <EditorialQuote 
          quote="Came in for a cortado, stayed for three hours. The light through the window in the afternoon is something else." 
          author="Sofia M." 
          spacing="py-24"
          align="center"
        />
        <Atmosphere />
        <Menu />
        <MapLocation />
      </main>
      <Footer />
    </div>
  );
}
