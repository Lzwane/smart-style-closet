const quotes = [
  {
    quote:
      "I wore a SmartFit blazer to my first interview and got the job. I couldn't afford to buy one — this saved me.",
    name: "Lerato M.",
    role: "BCom Finance, UJ",
  },
  {
    quote:
      "Renting my matric dance dress for a fraction of the price felt smart and stylish. Loved the experience.",
    name: "Amahle K.",
    role: "Grade 12, Soweto",
  },
  {
    quote:
      "From booking to return, everything was seamless. The team even tailored the trousers for me — at no extra cost.",
    name: "Sibusiso T.",
    role: "BSc Engineering",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-xs font-medium uppercase tracking-[0.25em] text-background/60">
              §03 — Voices
            </div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-6xl">
              Worn by
              <br />
              <em className="italic text-background/60">students.</em>
            </h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 gap-px bg-background/15 md:grid-cols-3">
            {quotes.map((q, i) => (
              <figure key={i} className="bg-foreground p-7">
                <div className="font-display text-5xl leading-none text-background/30">"</div>
                <blockquote className="mt-3 text-base leading-relaxed">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-background/20 pt-4">
                  <div className="font-medium">{q.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-background/60">{q.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;