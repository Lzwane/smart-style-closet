import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  return (
    <section id="gallery" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              §04 — Gallery
            </div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
              Featured
              <br />
              <em className="italic text-muted-foreground">looks.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Real students, real moments. Tag <span className="text-foreground">@smartfitcloset</span> to be featured.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-5">
            <img src={g1} alt="Graduate portrait" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
            <img src={g2} alt="Two students in formal wear" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="grid grid-cols-2 gap-4">
              <img src={g4} alt="Curated rental rail" loading="lazy" className="aspect-square w-full object-cover" />
              <img src={g3} alt="Tailoring detail" loading="lazy" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;