import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/5515999999999", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
    </button>
  );
};

export default WhatsAppButton;
