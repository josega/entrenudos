const WHATSAPP_NUMBER = "573023332151";

export const getWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};