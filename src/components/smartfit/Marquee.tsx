const items = [
  "Rent · don't buy",
  "Sustainable wardrobe",
  "Student-led",
  "Tailored to fit",
  "Confidence on hire",
  "Made in Johannesburg",
];

const Marquee = () => {
  return (
    <div className="overflow-hidden border-b border-border bg-foreground py-6 text-background">
      <div className="flex animate-marquee gap-12 whitespace-nowrap font-display text-2xl font-medium uppercase tracking-tight md:text-4xl">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            {it}
            <span className="text-background/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;