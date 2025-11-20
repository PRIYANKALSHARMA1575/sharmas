import { Bed, Wifi, Utensils, Wind, Droplet, Car, Shield, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const facilities = [
  {
    icon: Bed,
    title: "2-Bedroom Units",
    description: "Attached bathroom with separate bed, cot & pillow",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary internet access",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "AC rooms available for comfort",
  },
  {
    icon: Utensils,
    title: "Kitchen Facilities",
    description: "Mini kitchen with fridge, washing machine & gas (optional)",
  },
  {
    icon: Droplet,
    title: "24×7 Water Supply",
    description: "Continuous corporation water service",
  },
  {
    icon: Car,
    title: "2-Wheeler Parking",
    description: "Secure parking space available",
  },
  {
    icon: Shield,
    title: "Secure Locality",
    description: "Safe and well-maintained area",
  },
  {
    icon: Trash2,
    title: "Waste Management",
    description: "Corporation waste collection service",
  },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Facilities & Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and convenient stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {facilities.map((facility, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <facility.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                {facility.title}
              </h3>
              <p className="text-muted-foreground">
                {facility.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 max-w-2xl mx-auto bg-accent/10 border-accent">
            <Utensils className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              Optional Food Plan
            </h3>
            <p className="text-muted-foreground">
              Home-cooked meals available based on your preference and dietary requirements
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
