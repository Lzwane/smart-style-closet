import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/smartfit/Navbar";
import Footer from "@/components/smartfit/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import mensImg from "@/assets/cat-mens.jpg";
import MobileNav from "@/components/smartfit/MobileNav";

const MensApparel = () => {
  const { addToCart, toggleFavorite, favorites } = useCart();
  const navigate = useNavigate();

  // useMemo ensures these products (and their random prices) stay the same 
  // throughout the session unless the page is refreshed.
  const products = useMemo(() => Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    name: `Premium Suit Piece ${i + 1}`,
    price: `R ${(250 + (i * 5)).toFixed(2)}`, // Stable price logic
    image: mensImg,
  })), []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="flex items-center gap-4 mb-10">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
          <h1 className="font-display text-5xl font-bold">
            Men's <em className="italic text-muted-foreground">Apparel</em>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-none group bg-secondary/20">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button onClick={() => addToCart(product)} className="flex-1 gap-2">
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="outline" size="icon" onClick={() => toggleFavorite(product)} className={favorites.find(f => f.id === product.id) ? "text-red-500 border-red-500" : ""}>
                  <Heart className="h-4 w-4 fill-current" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
      <MobileNav />
    </main>
  );
};

export default MensApparel;