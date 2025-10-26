import Topbar from "../src/components/Topbar"
import Header from "../src/components/Header";
import Intro from "../src/components/Intro";
import HeroCarousel from "../src/components/HeroCarousel";
import Cards from "../src/components/Cards";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-bg to-[#eef3ff] text-[#0f1724] font-inter">
      <Topbar />
      <Header />
      <Intro />
      <HeroCarousel />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;