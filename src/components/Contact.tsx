import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CallbackForm from "@/components/CallbackForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to book your stay? Contact us for availability and pricing details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover:shadow-card-hover transition-all duration-300">
            <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Phone</h3>
            <a 
              href="tel:7339264132" 
              className="text-lg text-primary hover:underline font-medium"
            >
              +91 73392 64132
            </a>
          </Card>

          <Card className="p-8 text-center hover:shadow-card-hover transition-all duration-300">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Email</h3>
            <a 
              href="mailto:slsarma2000@yahoo.co.in" 
              className="text-lg text-primary hover:underline break-all font-medium"
            >
              slsarma2000@yahoo.co.in
            </a>
          </Card>

          <Card className="p-8 text-center hover:shadow-card-hover transition-all duration-300">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Location</h3>
            <p className="text-lg text-muted-foreground">
              Opposite St. Mary's School
              <br />
              Pattom, Trivandrum
            </p>
          </Card>
        </div>

        <div className="mt-12 mb-12">
          <CallbackForm />
        </div>

        <div className="text-center">
          <Card className="p-8 max-w-3xl mx-auto bg-muted/30">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Book Your Stay?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Contact us for availability, advance payment details, and immediate booking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = 'tel:7339264132'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Details
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => window.location.href = 'mailto:slsarma2000@yahoo.co.in'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Inquiry
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
