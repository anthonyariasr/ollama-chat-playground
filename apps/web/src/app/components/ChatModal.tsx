"use client";

import { useState } from "react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.reply);
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setResponse("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center z-50">
      <div className="bg-[var(--background)] text-[var(--foreground)] rounded-t-2xl md:rounded-xl p-6 w-full md:w-[400px] max-h-[90vh] shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-[var(--accent)] hover:text-red-500"
        >
          ✕
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-4">Ask AmberAI</h2>
        <p className="text-sm mb-4">
          How can we help you? Ask about availability, amenities, or booking info.
        </p>

        <textarea
          className="w-full h-24 p-2 border border-[var(--accent)] rounded-md resize-none"
          placeholder="Type your question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="mt-4 w-full bg-[var(--accent)] text-white font-bold py-2 rounded-md hover:bg-orange-400 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {response && (
          <div className="mt-4 p-3 border border-[var(--accent)] rounded text-sm bg-white text-[var(--foreground)] shadow-inner">
            <strong>AmberAI:</strong> {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatModal;
