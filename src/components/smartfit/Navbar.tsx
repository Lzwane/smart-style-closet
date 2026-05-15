import { Menu, Heart, ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { label: "Shop", href: "#categories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Donation", href: "#donate" }, // Replaced Track Order
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

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop User Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium outline-none">
              My Closet <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="gap-2">
                <Heart className="h-4 w-4" /> Favourites (0)
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <ShoppingCart className="h-4 w-4" /> My Cart (0)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="border-t border-border bg-background md:hidden animate-in slide-in-from-top">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium">
                {l.label}
              </a>
            ))}
            <div className="flex gap-4 py-3 border-t mt-2">
              <Heart className="h-6 w-6" />
              <ShoppingCart className="h-6 w-6" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;