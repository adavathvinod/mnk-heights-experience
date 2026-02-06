import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const phoneNumber = "918977636990";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in MNK Heights 2 & 3 BHK Flats at Kompally. Please share more details."
  );

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>

      {/* Mobile Call Button */}
      <a
        href="tel:+918977636990"
        className="call-btn-mobile"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6 text-accent-foreground" />
      </a>
    </>
  );
};

export default FloatingButtons;
