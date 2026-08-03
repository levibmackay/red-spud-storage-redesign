import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import Proximity from "./components/Proximity";
import Features from "./components/Features";
import Promo from "./components/Promo";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import SectionSeam from "./components/SectionSeam";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-oat">
        <Header />
        <main>
          <Hero />
          <SectionSeam variant="oat-to-ink" />
          <Trust />
          <SectionSeam variant="ink-to-oat" />
          <Pricing />
          <SectionSeam variant="oat-to-ink" />
          <Proximity />
          <SectionSeam variant="ink-to-oat" />
          <Features />
          <SectionSeam variant="oat-to-ink" />
          <Promo />
          <SectionSeam variant="ink-to-oat" />
          <Faq />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
