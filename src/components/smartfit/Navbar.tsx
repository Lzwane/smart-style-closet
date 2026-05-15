import { Menu, Heart, ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for internal routing
import { useCart } from "@/context/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { label: "Shop", href: "/#categories" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Donation", href: "/#donate" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const { cart, favorites } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-baseline gap-1 font-display text-xl font-bold tracking-tight">
          SmartFit<span className="text-muted-foreground">Closet</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium outline-none cursor-pointer">
              My Closet 
              <span className="bg-primary text-white rounded-full px-1.5 py-0.5 text-[10px]">
                {cart.length + favorites.length}
              </span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Activity</DropdownMenuLabel>
              <DropdownMenuItem className="gap-2"><Heart className="h-4 w-4" /> Liked ({favorites.length})</DropdownMenuItem>
              <DropdownMenuItem className="gap-2"><ShoppingCart className="h-4 w-4" /> Cart ({cart.length})</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/closet" className="w-full justify-center font-bold text-primary">View Full Closet</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;