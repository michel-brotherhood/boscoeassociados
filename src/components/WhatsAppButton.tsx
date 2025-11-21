import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useMenu } from "@/contexts/MenuContext";

const WhatsAppButton = () => {
  const { isMenuOpen } = useMenu();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open("https://wa.me/5521993698629", "_blank");
  };

  if (isMenuOpen || !isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-scale-in"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
    </button>
  );
};

export default WhatsAppButton;
