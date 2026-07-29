import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import Proximity from "./components/Proximity";
import Features from "./components/Features";
import Promo from "./components/Promo";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-oat">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Pricing />
        <Proximity />
        <Features />
        <Promo />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
