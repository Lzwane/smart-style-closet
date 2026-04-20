import { useState } from "react";
import { MessageCircle, Package } from "lucide-react";

const WHATSAPP = "27761525879"; // founder contact from proposal

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = orderId.trim().slice(0, 40);
    const message = trimmed
      ? `Hi SmartFit! I'd like to track my order #${trimmed}.`
      : "Hi SmartFit! I'd like to track my order.";
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="track" className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            §05 — Service
          </div>
          <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-6xl">
            Track
            <br />
            <em className="italic text-muted-foreground">my order.</em>
          </h2>
          <p className="mt-6 max-w-md text-foreground/80">
            Enter your order number — we'll open WhatsApp and pre-fill the message so our team can reply instantly.
          </p>
        </div>

        <form onSubmit={handleTrack} className="flex flex-col justify-center">
          <label htmlFor="orderId" className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Order number
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              maxLength={40}
              placeholder="e.g. SF-00284"
              className="flex-1 border-b border-foreground bg-transparent py-3 font-display text-2xl tracking-tight outline-none placeholder:text-muted-foreground/60 focus:border-accent"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-6 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <Package className="h-4 w-4" /> Track
            </button>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
          >
            <MessageCircle className="h-4 w-4" /> Or chat with us on WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
};

export default TrackOrder;