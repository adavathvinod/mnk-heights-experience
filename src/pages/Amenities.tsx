import { Link } from "react-router-dom";
import {
  Shield,
  TreePine,
  Baby,
  Car,
  Zap,
  Building,
  Home,
  Maximize,
  Paintbrush,
  ArrowRight,
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import gardenView from "@/assets/garden-view.png";
import playArea from "@/assets/play-area.png";
import buildingExterior from "@/assets/building-exterior.png";

const amenities = [
  {
    icon: Shield,
    title: "Gated Community",
    description: "Secure living with 24/7 surveillance and controlled access",
  },
  {
    icon: TreePine,
    title: "Landscaped Gardens",
    description: "Beautifully designed green spaces for relaxation",
  },
  {
    icon: Baby,
    title: "Children's Play Area",
    description: "Safe and fun play zones for kids of all ages",
  },
  {
    icon: Car,
    title: "Parking Facility",
    description: "Dedicated covered parking for residents",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security personnel and CCTV",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply for common areas and lifts",
  },
  {
    icon: Building,
    title: "Lift Facility",
    description: "Modern high-speed elevators in all towers",
  },
];

const plans = [
  {
    title: "2 BHK Flats",
    features: [
      "Spacious living & dining area",
      "2 Bedrooms with attached bathrooms",
      "Modular kitchen space",
      "Balcony with scenic views",
      "Utility area",
    ],
    image: buildingExterior,
  },
  {
    title: "3 BHK Flats",
    features: [
      "Large living & dining area",
      "3 Bedrooms with attached bathrooms",
      "Premium modular kitchen",
      "Multiple balconies",
      "Servant room option",
      "Extra storage space",
    ],
    image: gardenView,
  },
];

const Amenities = () => {
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
              Amenities & Plans
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mt-4">
              World-Class Living
            </h1>
            <p className="text-white/80 text-lg mt-6">
              Experience premium amenities and thoughtfully designed floor plans
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Premium Amenities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 text-primary">
                Everything You Need
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Enjoy a lifestyle filled with comfort and convenience
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <ScrollAnimation key={amenity.title} delay={index * 50}>
                <div className="amenity-card h-full">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <amenity.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {amenity.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Gallery
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 text-primary">
                Explore Our Spaces
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimation>
              <div className="relative rounded-2xl overflow-hidden group h-[350px]">
                <img
                  src={gardenView}
                  alt="Landscaped Gardens"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-2xl font-semibold">
                      Landscaped Gardens
                    </h3>
                    <p className="text-white/80 mt-2">
                      Beautifully designed green spaces
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="relative rounded-2xl overflow-hidden group h-[350px]">
                <img
                  src={playArea}
                  alt="Children's Play Area"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-2xl font-semibold">
                      Children's Play Area
                    </h3>
                    <p className="text-white/80 mt-2">
                      Safe and colorful play zones
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Floor Plans
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 text-primary">
                Choose Your Perfect Home
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Spacious layouts designed for modern living
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <ScrollAnimation key={plan.title} delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border/50">
                  <div className="relative h-[250px]">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <Home className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <h3 className="text-white text-2xl font-display font-semibold">
                          {plan.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Maximize className="w-4 h-4" />
                        <span>Spacious Layouts</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Paintbrush className="w-4 h-4" />
                        <span>Modern Interiors</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
              Ready to See It in Person?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a site visit and experience the quality firsthand.
            </p>
            <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
              Book a Site Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
};

export default Amenities;
