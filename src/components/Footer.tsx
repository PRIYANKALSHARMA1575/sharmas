import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sharma's Paying Guest</h3>
            <p className="text-background/80">
              Comfortable and secure accommodation in the heart of Pattom, Trivandrum
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>Facilities</li>
              <li>Location</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:7339264132" className="hover:text-background transition-colors">
                  +91 73392 64132
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:slsarma2000@yahoo.co.in" className="hover:text-background transition-colors break-all">
                  slsarma2000@yahoo.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} Sharma's Paying Guest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
