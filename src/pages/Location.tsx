import { Link } from "react-router-dom";
import {
  MapPin,
  School,
  Hospital,
  ShoppingBag,
  TreePine,
  Clock,
  Phone,
  ArrowRight,
  Navigation,
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const locationAdvantages = [
  {
    icon: Navigation,
    title: "Excellent Road Connectivity",
    description: "Well-connected to ORR, Medchal Road, and major highways",
  },
  {
    icon: School,
    title: "Close to Schools & Colleges",
    description: "Top educational institutions within 5km radius",
  },
  {
    icon: Hospital,
    title: "Near Hospitals",
    description: "Quick access to leading healthcare facilities",
  },
  {
    icon: ShoppingBag,
    title: "Shopping & Entertainment",
    description: "Malls, supermarkets, and restaurants nearby",
  },
  {
    icon: TreePine,
    title: "Peaceful Residential Zone",
    description: "Away from city chaos, yet well-connected",
  },
];

const nearbyPlaces = [
  { name: "Kompally Bus Station", distance: "1 km" },
  { name: "ORR (Outer Ring Road)", distance: "3 km" },
  { name: "Medchal Railway Station", distance: "5 km" },
  { name: "CMR Shopping Mall", distance: "2 km" },
  { name: "Apollo Hospital", distance: "4 km" },
  { name: "International Schools", distance: "2-5 km" },
];

const Location = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Location & Connectivity
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mt-4">
              Prime Location
            </h1>
            <p className="text-white/80 text-lg mt-6">
              Strategically located in Kompally for the best of both worlds
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation>
              <div className="space-y-6">
                <div>
                  <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                    Find Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display text-primary mt-2">
                    Visit Our Project
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary">Address</h4>
                      <p className="text-muted-foreground">
                        SY. No 119, 149A & 150, Kompally,
                        <br />
                        Hyderabad, Telangana 500100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary">
                        Office Hours
                      </h4>
                      <p className="text-muted-foreground">
                        Monday to Sunday: 8:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary">Contact</h4>
                      <a
                        href="tel:+918977636990"
                        className="text-accent hover:underline"
                      >
                        089776 36990
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=MNK+Heights+Kompally+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-amber-600"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.164648671758!2d78.47779127493834!3d17.535972483376696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8503e3185e3d%3A0xef5eb903bc690f77!2sMNK%20Heights%20-%202%20%26%203BHK%20Flats%20%40%20Kompally!5e1!3m2!1sen!2sin!4v1770355637778!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MNK Heights Location"
                  className="w-full"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Connectivity
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 text-primary">
                Location Advantages
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Everything you need is just minutes away
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationAdvantages.map((item, index) => (
              <ScrollAnimation key={item.title} delay={index * 100}>
                <div className="feature-card h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <div>
                  <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                    Proximity
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display text-primary mt-2">
                    What's Nearby
                  </h2>
                </div>

                <div className="space-y-3">
                  {nearbyPlaces.map((place) => (
                    <div
                      key={place.name}
                      className="flex items-center justify-between p-4 bg-muted rounded-xl"
                    >
                      <span className="font-medium text-foreground">
                        {place.name}
                      </span>
                      <span className="text-accent font-semibold">
                        {place.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-display mb-6">
                  Why Kompally?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-white/90">
                      Rapidly developing residential hub in Hyderabad
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-white/90">
                      Excellent appreciation potential
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-white/90">
                      Close to IT corridors and business districts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-white/90">
                      Pollution-free and green surroundings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-white/90">
                      Growing infrastructure and amenities
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-display text-accent-foreground mb-6">
              Visit Us Today
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Our sales office is located inside the project premises. Come and
              explore your future home.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-primary/90"
            >
              Book a Site Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
};

export default Location;
