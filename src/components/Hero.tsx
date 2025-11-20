import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-room.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16">
      <div className="absolute inset-0 bg-hero-gradient z-0" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Sharmas Paying Guest
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
            & Short-Term Rentals — Pattom
          </p>
          <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-2xl mx-auto">
            Affordable 2-sharing & private rooms with all essential amenities, located in a safe and well-connected area in Pattom, opposite St. Mary's School
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-card-hover transition-all"
              onClick={() => window.location.href = 'tel:7339264132'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10"
              onClick={() => window.location.href = '#contact'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">₹5,500+</div>
              <div className="text-muted-foreground">Starting From</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">2 Sharing</div>
              <div className="text-muted-foreground">Per Room</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">WiFi</div>
              <div className="text-muted-foreground">High Speed</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Water & Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
