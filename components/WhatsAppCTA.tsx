'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/1234567890?text=I'm%20interested%20in%20a%20Maldives%20eSIM"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap group-hover:ml-2 font-medium">
        Chat with us
      </span>
    </a>
  );
}
