import { useState } from "react";
import { Phone, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const CallbackForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !contact) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const mailtoLink = `mailto:slsarma2000@yahoo.co.in?subject=Callback Request from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AContact: ${encodeURIComponent(contact)}%0D%0A%0D%0APlease call me back regarding room availability.`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Request Sent!",
      description: "We'll get back to you soon.",
    });

    setName("");
    setContact("");
    setIsSubmitting(false);
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto bg-warm-gradient border-0">
      <div className="text-center mb-6">
        <Phone className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-primary-foreground">
          Request a Call Back
        </h3>
        <p className="text-primary-foreground/90">
          Share your details and we'll contact you shortly
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-10 bg-background/90"
            required
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="tel"
            placeholder="Your Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="pl-10 bg-background/90"
            required
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          disabled={isSubmitting}
        >
          <Mail className="mr-2 h-5 w-5" />
          {isSubmitting ? "Sending..." : "Send Request"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-primary-foreground/80">
          Or call us directly at{" "}
          <a 
            href="tel:7339264132" 
            className="font-semibold underline hover:text-primary-foreground"
          >
            +91 73392 64132
          </a>
        </p>
      </div>
    </Card>
  );
};

export default CallbackForm;
