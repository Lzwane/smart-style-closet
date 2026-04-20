import mens from "@/assets/cat-mens.jpg";
import womens from "@/assets/cat-womens.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import sale from "@/assets/cat-sale.jpg";
import { ArrowUpRight } from "lucide-react";

const cats = [
  { title: "Men's Apparel", count: "48 pieces", img: mens, tag: "01" },
  { title: "Women's Apparel", count: "62 pieces", img: womens, tag: "02" },
  { title: "Accessories", count: "30 pieces", img: accessories, tag: "03" },
  { title: "Sale & Discount", count: "12 pieces", img: sale, tag: "04" },
];

const Categories = () => {
  return (
    <section id="categories" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              §02 — The Closet
            </div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
              Explore <em className="font-display italic text-muted-foreground">categories.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Curated rentals for every occasion. From graduation gowns to interview suits — pick a piece, wear it, return it.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => (
            <a
              key={c.title}
              href="#"
              className="group relative block overflow-hidden bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">№ {c.tag}</div>
                  <div className="mt-1 font-display text-xl font-semibold">{c.title}</div>
                  <div className="text-xs text-muted-foreground">{c.count}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;