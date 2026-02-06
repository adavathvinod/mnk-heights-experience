import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Instagram, Clock } from "lucide-react";
import logo from "@/assets/mnk-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="MNK Constructions"
              className="h-16 w-auto object-contain bg-white rounded-lg p-2"
            />
            <p className="text-primary-foreground/80 leading-relaxed">
              Premium gated community offering modern living in a serene and
              well-connected location at Kompally, Hyderabad.
            </p>
            <a
              href="https://www.instagram.com/mnk_constructions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@mnk_constructions</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Project", path: "/about" },
                { name: "Amenities & Plans", path: "/amenities" },
                { name: "Location", path: "/location" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+918977636990"
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <span>089776 36990</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  SY. No 119, 149A & 150, Kompally,
                  <br />
                  Hyderabad, Telangana 500100
                </span>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  Mon - Sun: 8:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Project Highlights</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>✓ Premium 2 & 3 BHK Flats</li>
              <li>✓ Gated Community</li>
              <li>✓ Modern Amenities</li>
              <li>✓ Prime Location</li>
              <li>✓ On-site Sales Office</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} MNK Constructions (P) Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
