import { Link } from "react-router-dom";
import {
  Shield,
  Home as HomeIcon,
  Sparkles,
  MapPin,
  TreePine,
  ArrowRight,
  Phone,
  Star,
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import buildingExterior from "@/assets/building-exterior.png";
import gardenView from "@/assets/garden-view.png";
import clubhouse from "@/assets/clubhouse.png";

const features = [
  {
    icon: Shield,
    title: "Premium Gated Community",
    description: "24/7 security with controlled access for complete peace of mind",
  },
  {
    icon: HomeIcon,
    title: "Spacious 2 & 3 BHK Flats",
    description: "Well-designed layouts with ample natural light and ventilation",
  },
  {
    icon: Sparkles,
    title: "Modern Amenities",
    description: "World-class facilities for a comfortable lifestyle",
  },
  {
    icon: MapPin,
    title: "Excellent Connectivity",
    description: "Close to schools, hospitals, and major IT hubs",
  },
  {
    icon: TreePine,
    title: "Peaceful Green Environment",
    description: "Landscaped gardens and open spaces for serene living",
  },
];

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative z-10 container mx-auto text-center text-white px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 text-sm animate-fade-in">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span>Premium Residential Project at Kompally</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              MNK Heights
              <span className="block text-accent mt-2">
                2 & 3 BHK Flats
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              A premium gated community offering modern living in a serene and
              well-connected location at Kompally, Hyderabad.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/contact" className="btn-hero-primary flex items-center gap-2">
                Book a Site Visit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+918977636990" className="btn-hero-secondary flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 text-primary">
                Experience Premium Living
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Discover the perfect blend of comfort, convenience, and elegance
                at MNK Heights.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.title} delay={index * 100}>
                <div className="feature-card h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Project Gallery
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 text-primary">
                A Glimpse of Your Future Home
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollAnimation className="md:col-span-2 lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden group h-[300px] md:h-[400px]">
                <img
                  src={buildingExterior}
                  alt="MNK Heights Building Exterior"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">
                    Premium Apartments
                  </h3>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="relative rounded-2xl overflow-hidden group h-[300px] md:h-[400px]">
                <img
                  src={gardenView}
                  alt="Landscaped Gardens"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">
                    Landscaped Gardens
                  </h3>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="relative rounded-2xl overflow-hidden group h-[300px]">
                <img
                  src={clubhouse}
                  alt="Club Elite"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">
                    Club Elite
                  </h3>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <ScrollAnimation>
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Visit our on-site sales office or schedule a site visit today.
                Our team is ready to help you find the perfect home.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-hero-primary">
                  Book a Site Visit
                </Link>
                <Link to="/amenities" className="btn-hero-secondary">
                  Explore Amenities
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
};

export default Home;
