import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import RoomsPricing from "@/components/RoomsPricing";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Facilities />
      <RoomsPricing />
      <Location />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
