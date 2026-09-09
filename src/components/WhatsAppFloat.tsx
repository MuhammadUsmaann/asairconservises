import { whatsappUrl } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="float-soft fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.1 3C9.3 3 3.8 8.5 3.8 15.3c0 2.2.6 4.3 1.7 6.1L3 29l7.8-2.4c1.7.9 3.7 1.4 5.7 1.4 6.8 0 12.3-5.5 12.3-12.3S22.9 3 16.1 3zm0 22.4c-1.8 0-3.5-.5-5-1.3l-.4-.2-4.6 1.4 1.4-4.5-.2-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.5 4.5-10 10-10s10 4.5 10 10-4.2 10.3-9.7 10.3zm5.6-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6 0-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
        />
      </svg>
    </a>
  );
}
