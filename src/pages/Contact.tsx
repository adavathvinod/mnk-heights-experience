import { useState, FormEvent } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Send,
  CheckCircle,
  MessageCircle,
  Instagram,
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hello! I'm interested in MNK Heights.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterested in: ${formData.interest}\nMessage: ${formData.message}`
    );
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/918977636990?text=${whatsappMessage}`, "_blank");
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: "",
      });
    }, 3000);
  };

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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mt-4">
              Contact & Booking
            </h1>
            <p className="text-white/80 text-lg mt-6">
              Ready to find your dream home? Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollAnimation>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-border/50">
                <h2 className="text-2xl md:text-3xl font-display text-primary mb-6">
                  Book a Site Visit
                </h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      Your enquiry has been sent. We'll contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="form-input"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Interested In *
                      </label>
                      <select
                        id="interest"
                        required
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({ ...formData, interest: e.target.value })
                        }
                        className="form-input"
                      >
                        <option value="">Select an option</option>
                        <option value="2 BHK">2 BHK Flat</option>
                        <option value="3 BHK">3 BHK Flat</option>
                        <option value="Both">Both Options</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="form-input resize-none"
                        placeholder="Any specific requirements?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-4 rounded-lg transition-all duration-300 hover:bg-amber-600"
                    >
                      <Send className="w-5 h-5" />
                      Book Site Visit
                    </button>
                  </form>
                )}
              </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation delay={100}>
              <div className="space-y-6">
                <div>
                  <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                    Contact Details
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display text-primary mt-2">
                    Get in Touch
                  </h2>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:+918977636990"
                    className="flex items-start gap-4 p-4 bg-muted rounded-xl hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Call Us
                      </h4>
                      <p className="text-accent text-lg">089776 36990</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Sales Office Location
                      </h4>
                      <p className="text-muted-foreground">
                        Located inside project premises
                        <br />
                        SY. No 119, 149A & 150, Kompally,
                        <br />
                        Hyderabad, Telangana 500100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Office Hours
                      </h4>
                      <p className="text-muted-foreground">
                        Monday to Sunday
                        <br />
                        8:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/918977636990"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1da851] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                    <a
                      href="https://www.instagram.com/mnk_constructions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-4 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </div>
                </div>

                {/* Trust Section */}
                <div className="bg-primary rounded-2xl p-6 text-white mt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-gold fill-gold"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">5.0 Rating</span>
                    <span className="text-white/60">(5 Reviews)</span>
                  </div>
                  <blockquote className="text-white/90 italic text-lg">
                    "Super fantastic mind-blowing unbelievable"
                  </blockquote>
                  <p className="text-accent mt-2 font-semibold">
                    — Sreekanth Roy
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.164648671758!2d78.47779127493834!3d17.535972483376696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8503e3185e3d%3A0xef5eb903bc690f77!2sMNK%20Heights%20-%202%20%26%203BHK%20Flats%20%40%20Kompally!5e1!3m2!1sen!2sin!4v1770355637778!5m2!1sen!2sin"
                width="100%"
                height="400"
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
      </section>
    </main>
  );
};

export default Contact;
