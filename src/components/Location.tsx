import { MapPin, Hospital, Bus, ShoppingBag, School, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const nearbyPlaces = [
  {
    icon: School,
    name: "St. Mary's School, Pattom",
    distance: "Opposite",
  },
  {
    icon: Hospital,
    name: "Hospitals",
    distance: "Within 1 km",
  },
  {
    icon: Bus,
    name: "24×7 Transport",
    distance: "Bus/Auto services",
  },
  {
    icon: ShoppingBag,
    name: "McDonald's",
    distance: "On main highway",
  },
];

const Location = () => {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nearby Landmarks
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in Pattom, Thiruvananthapuram with easy access to essential services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {nearbyPlaces.map((place, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-card-hover transition-all duration-300"
            >
              <place.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                {place.name}
              </h3>
              <p className="text-sm text-muted-foreground">{place.distance}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 max-w-3xl mx-auto bg-primary/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Our Location
            </h3>
            <p className="text-lg text-foreground/80 mb-2">
              Pattom, Opp. St. Mary's School
            </p>
            <p className="text-lg text-foreground/80">
              Thiruvananthapuram, Kerala
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Bus className="h-5 w-5" />
                <span>Highway Access</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5" />
                <span>Secure Area</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Location;
