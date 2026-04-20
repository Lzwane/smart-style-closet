import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Shop", href: "#categories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Track Order", href: "#track" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="flex items-baseline gap-1 font-display text-xl font-bold tracking-tight">
          SmartFit
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="text-muted-foreground">Closet</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#auth" className="text-sm font-medium underline-offset-4 hover:underline">
            Sign in
          </a>
          <a
            href="#auth"
            className="rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Sign up
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#auth"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;