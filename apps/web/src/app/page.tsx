"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AmenitiesSection from "./components/AmenitiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToAction from "./components/CallToAction";
import ChatModal from "./components/ChatModal";

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="relative z-0">
        <HeroSection />
        <AmenitiesSection />
        <TestimonialsSection />
        <CallToAction />
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[var(--accent)] text-white px-4 py-3 rounded-full shadow-lg hover:bg-orange-400 transition"
      >
        💬 Chat
      </button>

      {/* Chat Modal */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
