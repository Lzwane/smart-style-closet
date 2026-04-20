const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-display text-3xl font-bold tracking-tight">SmartFit Closet</div>
          <p className="mt-4 max-w-sm text-sm text-background/70">
            A student-led social enterprise from Enactus UJ. Affordable, sustainable formal wear — one outfit at a time.
          </p>
        </div>
        <FooterCol title="Shop" links={["Men", "Women", "Accessories", "Sale"]} />
        <FooterCol title="Service" links={["Track Order", "Sizing", "Returns", "FAQ"]} />
        <FooterCol title="About" links={["Our Story", "Sustainability", "Partners", "Press"]} />
      </div>
      <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-background/20 pt-6 text-xs uppercase tracking-[0.2em] text-background/60 md:flex-row md:items-center">
        <span>© 2026 SmartFit Closet · Johannesburg</span>
        <span>Dress for the moment.</span>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: string[] }) => (
  <div className="md:col-span-2">
    <div className="font-display text-xs uppercase tracking-[0.25em] text-background/60">{title}</div>
    <ul className="mt-4 space-y-2 text-sm">
      {links.map((l) => (
        <li key={l}><a href="#" className="hover:underline">{l}</a></li>
      ))}
    </ul>
  </div>
);

export default Footer;