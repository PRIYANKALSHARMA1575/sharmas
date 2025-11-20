import { Check, Home, Users, Bed } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RoomsPricing = () => {
  const roomTypes = [
    {
      icon: Users,
      title: "2-Sharing Room",
      price: "₹5,500",
      period: "per month",
      features: [
        "2-Bedroom with attached bathroom",
        "Separate bed, cot & pillow",
        "High-speed WiFi included",
        "AC available",
        "Mini kitchen access",
      ],
      popular: true,
    },
    {
      icon: Bed,
      title: "Private Room",
      price: "Contact",
      period: "for pricing",
      features: [
        "1-Bedroom with attached bathroom",
        "Complete privacy",
        "All amenities included",
        "AC available",
        "Kitchen facilities",
      ],
      popular: false,
    },
  ];

  return (
    <section id="rooms-pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Rooms & Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect accommodation that suits your needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {roomTypes.map((room, index) => (
            <Card 
              key={index}
              className={`p-8 relative hover:shadow-card-hover transition-all duration-300 ${
                room.popular ? "border-primary border-2" : ""
              }`}
            >
              {room.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <room.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                  {room.title}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{room.price}</span>
                  <span className="text-muted-foreground ml-2">{room.period}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = 'tel:7339264132'}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>

        <Card className="p-8 max-w-3xl mx-auto bg-muted/50">
          <div className="text-center">
            <Home className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Rent & Advance Details
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="text-lg">Starting from ₹5,500 per month</p>
              <p>Advance payment based on room type</p>
              <p className="font-semibold text-foreground mt-4">
                Contact us to discuss advance requirements during booking
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RoomsPricing;
