import { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";

const WHATSAPP = "27761525879";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const safeName = name.trim().slice(0, 100);
    const safeMsg = message.trim().slice(0, 1000);
    if (!safeMsg) return;
    const intro = safeName ? `Hi, I'm ${safeName}. ` : "Hi SmartFit! ";
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(intro + safeMsg)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-5">
          <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            §06 — Get in touch
          </div>
          <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-6xl">
            Let's
            <br />
            <em className="italic text-muted-foreground">talk.</em>
          </h2>
          <p className="mt-6 max-w-md text-foreground/80">
            Customer support, partnership proposals, or styling questions — we reply fast on WhatsApp.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
              <MessageCircle className="h-4 w-4" /> +27 76 152 5879 (WhatsApp)
            </a>
            <a href="mailto:prudencengwana32@gmail.com" className="flex items-center gap-3 hover:underline">
              <Mail className="h-4 w-4" /> prudencengwana32@gmail.com
            </a>
            <a href="tel:+27761525879" className="flex items-center gap-3 hover:underline">
              <Phone className="h-4 w-4" /> +27 76 152 5879
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-7 grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="cname" className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Your name
            </label>
            <input
              id="cname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              className="mt-2 w-full border-b border-foreground bg-transparent py-3 text-lg outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="cmsg" className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Message
            </label>
            <textarea
              id="cmsg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              rows={5}
              className="mt-2 w-full resize-none border-b border-foreground bg-transparent py-3 text-lg outline-none focus:border-accent"
              placeholder="Tell us how we can help..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-sm bg-foreground px-6 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;