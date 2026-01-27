import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="font-heading text-lg font-bold text-primary-foreground">GS</span>
              </div>
              <span className="font-heading text-xl font-bold">Girls in STEM</span>
            </div>
            <p className="text-background/70 max-w-sm mb-6">
              Empowering young women to pursue their passion in science, technology, engineering, and mathematics.
            </p>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@girlsinstem.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <a href="#about" className="hover:text-background transition-colors">About Us</a>
              <a href="#programs" className="hover:text-background transition-colors">Programs</a>
              <a href="#impact" className="hover:text-background transition-colors">Our Impact</a>
              <a href="#involved" className="hover:text-background transition-colors">Get Involved</a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold mb-4">Programs</h4>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <a href="#" className="hover:text-background transition-colors">Code Camp</a>
              <a href="#" className="hover:text-background transition-colors">Robotics Lab</a>
              <a href="#" className="hover:text-background transition-colors">Science Explorers</a>
              <a href="#" className="hover:text-background transition-colors">Tech Leaders</a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} Girls in STEM. All rights reserved. 501(c)(3) Nonprofit Organization.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
