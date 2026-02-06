import { Link } from "react-router-dom";
import {
  Building2,
  Hammer,
  Users,
  Award,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import buildingExterior from "@/assets/building-exterior.png";
import clubhouse from "@/assets/clubhouse.png";

const highlights = [
  {
    icon: Building2,
    title: "Modern Architecture",
    description:
      "Contemporary design with aesthetic appeal and functional spaces",
  },
  {
    icon: Hammer,
    title: "Quality Construction",
    description:
      "Built with premium materials and superior craftsmanship",
  },
  {
    icon: Users,
    title: "Peaceful Community Living",
    description:
      "A harmonious neighborhood designed for families",
  },
  {
    icon: Award,
    title: "Trusted Developer",
    description:
      "MNK Constructions – A name you can trust for quality homes",
  },
  {
    icon: MapPin,
    title: "On-site Sales Office",
    description:
      "Visit us directly at the project premises for a guided tour",
  },
];

const keyFeatures = [
  "Vastu compliant design",
  "Earthquake resistant structure",
  "Premium quality fittings",
  "Spacious balconies",
  "Cross ventilation in all rooms",
  "Premium floor finishes",
  "Modular kitchen ready",
  "Branded bathroom fittings",
];

const About = () => {
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
              About The Project
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mt-4">
              MNK Heights
            </h1>
            <p className="text-white/80 text-lg mt-6">
              Premium 2 & 3 BHK Flats at Kompally, Hyderabad
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  Welcome to MNK Heights
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-primary">
                  Your Gateway to Premium Living
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    MNK Heights is a premium gated community project located in
                    Kompally, Hyderabad. We offer spacious 2 & 3 BHK flats
                    designed with modern amenities and world-class facilities.
                  </p>
                  <p>
                    Our sales office is located inside the project premises.
                    Visit us to explore your dream home in a serene, green, and
                    well-connected location.
                  </p>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {keyFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-amber-600 mt-6"
                >
                  Schedule a Visit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="relative">
                <img
                  src={buildingExterior}
                  alt="MNK Heights Building"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">5.0 Rating</p>
                      <p className="text-sm text-muted-foreground">
                        5 Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Project Highlights
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 text-primary">
                What Sets Us Apart
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <ScrollAnimation key={highlight.title} delay={index * 100}>
                <div className="feature-card h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative order-2 lg:order-1">
                <img
                  src={clubhouse}
                  alt="Club Elite at MNK Heights"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100} className="order-1 lg:order-2">
              <div className="space-y-6">
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  Our Vision
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-primary">
                  Building Dreams, Creating Communities
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At MNK Constructions, we believe in creating homes that stand
                  the test of time. Our commitment to quality, innovation, and
                  customer satisfaction drives everything we do.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  MNK Heights is more than just apartments – it's a community
                  designed for modern families who value quality living,
                  convenience, and a peaceful environment.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-3xl font-display font-bold text-accent">
                      2 & 3
                    </p>
                    <p className="text-sm text-muted-foreground">
                      BHK Options
                    </p>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <p className="text-3xl font-display font-bold text-accent">
                      24/7
                    </p>
                    <p className="text-sm text-muted-foreground">Security</p>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <p className="text-3xl font-display font-bold text-accent">
                      100%
                    </p>
                    <p className="text-sm text-muted-foreground">Vastu</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
