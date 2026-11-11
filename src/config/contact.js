// Single source of truth for WhatsApp enquiries — change the number here only.
export const WHATSAPP_NUMBER = '916354051487'; // country code + number, digits only
export const WHATSAPP_DISPLAY = '+91 63540 51487';

const DEFAULT_MESSAGE = "Hello Gomzi Lifesciences, I'd like to enquire about your ingredients / R&D formulation services.";

export function whatsappLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
