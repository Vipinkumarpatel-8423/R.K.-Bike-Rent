"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "918360055932";

  const message =
    "Hello R.K. Bike Rent! 👋\n\nI am interested in renting a bike. Please share the available bikes, rental prices and booking details.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">

      {/* Message Box */}
      {open && (
        <div className="absolute bottom-16 right-0 mb-3 w-[280px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">

          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-bold">
                R.K. Bike Rent
              </p>

              <p className="text-[11px] opacity-90">
                Chat with us on WhatsApp
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 transition hover:bg-white/20"
              aria-label="Close WhatsApp"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4">

            <div className="rounded-xl bg-slate-100 p-3 text-sm leading-6 text-slate-700">
              👋 Hello! How can we help you with your bike rental?
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#20bd5a]"
            >
              <MessageCircle size={18} />
              Start Chat
            </a>

          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition duration-300 hover:scale-110 hover:bg-[#20bd5a] sm:h-16 sm:w-16"
      >
        {open ? (
          <X size={28} />
        ) : (
          <FaWhatsapp size={30} />
        )}
      </button>

    </div>
  );
}