import { useState, useEffect } from "react";
import { Phone, Mail, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const bgImages = [
    "/gallery/ffkitchen.jpg",
    "/gallery/gfroom2bed.jpg",
    "/gallery/gfroombeg.jpg",
    "/gallery/hallffroom.jpg",
    "/gallery/hallfirstfloor.jpg",
    "/gallery/hallgroundfloor.jpg",
    "/gallery/houseimage.jpg",
    "/gallery/parking.jpg",
    "/gallery/room1gf.jpg",
    "/gallery/room2gf.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Auto slideshow (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % bgImages.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-700"
        style={{ backgroundImage: `url(${bgImages[index]})` }}
      />

      {/* Dark gradient overlay for clear text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30 z-[1]" />

      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white z-20"
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white z-20"
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </button>

      {/* Hero Content */}
      <div className="container relative z-[2] mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Sharmas Paying Guest
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            & Short-Term Rentals — Pattom
          </p>

          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Affordable 2-sharing & private rooms with essential amenities, located in a safe and well-connected area.
          </p>

          {/* Buttons */}
 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
  <Button
    size="lg"
    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
    onClick={() => (window.location.href = "tel:7339264132")}
  >
    <Phone className="mr-2 h-5 w-5" />
    Call Now
  </Button>

  <Button
    size="lg"
    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
    onClick={() => (window.location.href = "#contact")}
  >
    <Mail className="mr-2 h-5 w-5" />
    Contact Us
  </Button>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
