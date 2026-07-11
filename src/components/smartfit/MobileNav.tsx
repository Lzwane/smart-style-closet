import { Home, Heart, ShoppingBag, Shirt } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const MobileNav = () => {
  const { cart, favorites } = useCart();
  const location = useLocation();

  // Custom helper to pinpoint if the exact section or page matches
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around py-3">
        {/* Home Link */}
        <Link 
          to="/" 
          className={`flex flex-col items-center gap-1 ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
        >
          <Home className="h-5 w-5" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>

        {/* Shop Link */}
        <Link 
          to="/mens-apparel" 
          className={`flex flex-col items-center gap-1 ${isActive("/mens-apparel") || isActive("/womens-apparel") || isActive("/accessories") ? "text-primary" : "text-muted-foreground"}`}
        >
          <Shirt className="h-5 w-5" />
          <span className="text-[10px] font-medium">Shop</span>
        </Link>

        {/* Closet Link (Active only if viewing closet page and NOT focused on the wishlist section) */}
        <Link 
          to="/closet" 
          className={`relative flex flex-col items-center gap-1 ${isActive("/closet") && !location.hash.includes("wishlist") ? "text-primary" : "text-muted-foreground"}`}
        >
          <ShoppingBag className="h-5 w-5" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] text-white font-bold">
              {cart.length}
            </span>
          )}
          <span className="text-[10px] font-medium">Closet</span>
        </Link>

        {/* Liked Link (Anchored to wishlist context, highlights independently) */}
        <Link 
          to="/closet#wishlist" 
          className={`relative flex flex-col items-center gap-1 ${isActive("/closet") && location.hash.includes("wishlist") ? "text-primary" : "text-muted-foreground"}`}
        >
          <Heart className="h-5 w-5" />
          {favorites.length > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[8px] text-white font-bold">
              {favorites.length}
            </span>
          )}
          <span className="text-[10px] font-medium">Liked</span>
        </Link>
      </div>
      
      {/* Safe area padding for iPhones with notches and modern devices */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
};

export default MobileNav;