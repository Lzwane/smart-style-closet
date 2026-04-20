import heroImg from "@/assets/hero-fashion.jpg";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pb-16 pt-12 md:grid-cols-12 md:px-10 md:pb-24 md:pt-20">
        {/* Left editorial column */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            <span>Issue №01</span>
            <span className="h-px w-10 bg-foreground/40" />
            <span>Spring / Autumn 2026</span>
          </div>

          <h1 className="mt-10 font-display text-[14vw] font-bold leading-[0.88] tracking-[-0.04em] md:mt-16 md:text-[8.5vw] lg:text-[7.2rem] animate-fade-up">
            Dress
            <br />
            for the
            <br />
            <span className="italic text-muted-foreground">moment.</span>
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2">
            <p className="max-w-md text-base leading-relaxed text-foreground/80">
              SmartFit Closet is a student-led rental wardrobe.
              Affordable formal wear for interviews, graduations,
              and the days that matter — without the price tag,
              and without the waste.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#categories"
                className="group inline-flex items-center justify-between rounded-sm bg-foreground px-6 py-4 text-sm font-medium tracking-wide text-background transition-all hover:-translate-y-0.5"
              >
                Browse the closet
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#auth"
                className="group inline-flex items-center justify-between border border-foreground px-6 py-4 text-sm font-medium tracking-wide transition-colors hover:bg-foreground hover:text-background"
              >
                Become a member
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right image column */}
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-card">
            <img
              src={heroImg}
              alt="Editorial portrait of a confident student in a tailored suit"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs uppercase tracking-[0.2em] text-background mix-blend-difference">
              <span>Look 01 — Tailored Suit</span>
              <span>R250 / 3 days</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 divide-x divide-border border-t border-border pt-6 text-center">
            <Stat value="500+" label="Outfits" />
            <Stat value="2nd" label="Enactus UJ" />
            <Stat value="0kg" label="Wasted" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="px-2">
    <div className="font-display text-2xl font-bold">{value}</div>
    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
  </div>
);

export default Hero;