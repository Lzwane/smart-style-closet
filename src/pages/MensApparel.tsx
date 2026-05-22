import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/smartfit/Navbar";
import Footer from "@/components/smartfit/Footer";
import RentalTerms from "@/components/smartfit/RentalTerms";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import MobileNav from "@/components/smartfit/MobileNav";

const MensApparel = () => {
  const { addToCart, toggleFavorite, favorites } = useCart();
  const navigate = useNavigate();

  const products = useMemo(() => [
    { id: "m1", name: "Midnight Navy Slim Suit", price: "R 450.00", image: "https://www.squires.co.uk/wp-content/uploads/2024/02/Dark_Navy_Slim_Wool_Stretch_Suit_Thumbnail-e1730899236656.jpeg" },
    { id: "m2", name: "Charcoal Three-Piece", price: "R 500.00", image: "https://m.media-amazon.com/images/I/71adoyGS3UL._AC_UY1000_.jpg" },
    { id: "m3", name: "Black Tie Dinner Tuxedo", price: "R 650.00", image: "https://atailoredsuit.com/wp-content/uploads/2014/12/Tuxedo101-e1423725400434.jpg" },
    { id: "m4", name: "Velvet Event Blazer", price: "R 350.00", image: "https://www.xposedlondon.com/cdn/shop/files/BLZ-DINNER-MAK-GREEN_1.jpg?v=1770819420" },
    { id: "m5", name: "Bespoke Grey Check Suit", price: "R 480.00", image: "https://uomoattire.com/cdn/shop/products/windowpancecheckmensgray3piecesuit7_1445x.jpg?v=1775055048" },
    { id: "m6", name: "Classic Black Formal Suit", price: "R 450.00", image: "https://png.pngtree.com/png-vector/20250609/ourmid/pngtree-black-men-suit-png-image_16505427.png" },
    { id: "m7", name: "Sky Blue Modern Suit", price: "R 420.00", image: "https://img01.ztat.net/article/spp-media-p1/f1a69bbcfffe3f32b632820e061db6ec/9b51e24f4d9d482f86c4e08f05a75127.jpg?imwidth=156&filter=packshot" },
    { id: "m8", name: "Cream Wedding Blazer", price: "R 380.00", image: "https://www.sainly.com/cdn/shop/files/Untitleddesign-2023-12-22T173035.834.png?v=1703246692" }
  ], []);

  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="flex items-center gap-4 mb-10">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <h1 className="font-display text-4xl font-bold md:text-5xl">
            Men's <em className="italic text-muted-foreground">Rentals</em>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-none group bg-secondary/20 rounded-2xl">
              <div className="aspect-[3/4] overflow-hidden bg-white/50 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-primary font-bold">{product.price} <span className="text-[10px] text-muted-foreground font-normal uppercase tracking-wider">/ 2-5 day rental</span></p>
              </CardContent>
              <CardFooter className="p-5 pt-0 flex gap-2">
                <Button onClick={() => addToCart(product)} className="flex-1 gap-2 font-bold uppercase text-xs tracking-widest">
                  <ShoppingBag className="h-4 w-4" /> Rent Piece
                </Button>
                <Button variant="outline" size="icon" onClick={() => toggleFavorite(product)} className={`rounded-full ${favorites.find(f => f.id === product.id) ? "text-red-500 border-red-500 bg-red-50" : ""}`}>
                  <Heart className={`h-4 w-4 ${favorites.find(f => f.id === product.id) ? "fill-current" : ""}`} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <RentalTerms />
      <Footer />
      <MobileNav />
    </main>
  );
};

export default MensApparel;