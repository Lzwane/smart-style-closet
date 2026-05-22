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

const WomensApparel = () => {
  const { addToCart, toggleFavorite, favorites } = useCart();
  const navigate = useNavigate();

  const products = useMemo(() => [
    { id: "w1", name: "Classic Ruby Evening Gown", price: "R 650.00", image: "https://www.xdressy.com/uploads/product/1/7/17787/V-neck-sleeveless-ruby-red-satin-long-prom-dress-1.webp" },
    { id: "w2", name: "Emerald Satin Cocktail Dress", price: "R 500.00", image: "https://dressmezee.com/cdn/shop/files/IMG_6230.jpg?v=1776162247" },
    { id: "w3", name: "Elegant Black Velvet Mermaid Gown", price: "R 700.00", image: "https://s.alicdn.com/@sc04/kf/Hd6addea33d93460e890f8cb7becc3500w/Jancember-SFY47-Vintage-Black-Velvet-Mermaid-Evening-Party-Dresses-With-Belt.jpg_300x300.jpg" },
    { id: "w4", name: "Rose Gold Sequin Party Dress", price: "R 550.00", image: "https://1861.ca/cdn/shop/files/isolina-rosegold-ES-5.jpg?v=1700090348&width=1000" },
    { id: "w5", name: "Sophisticated Royal Blue Midi", price: "R 450.00", image: "http://littleboxindia.com/cdn/shop/files/Royal_Blue_Sleeveless_Midi_Dress_with_Side_Ruched_Detail.webp?v=1747826488" },
    { id: "w6", name: "Chic White Graduation Dress", price: "R 480.00", image: "https://i.pinimg.com/474x/6b/46/41/6b4641faf718a25fb69602ab9e83cf6d.jpg" },
    { id: "w7", name: "Floral Wrap Formal Maxi", price: "R 420.00", image: "https://assets.superbalistcdn.co.za/400x400/filters:quality(75):format(jpg)/4691497/original.jpg" },
    { id: "w8", name: "Tailored Blazer & Pants Suit", price: "R 520.00", image: "https://png.pngtree.com/png-clipart/20250123/original/pngtree-stylish-tailored-womens-blazer-and-pants-set-in-neutral-beige-png-image_20320586.png" }
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
            Women's <em className="italic text-muted-foreground">Rentals</em>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-none group bg-secondary/20 rounded-2xl">
              <div className="aspect-[3/4] overflow-hidden bg-white/50 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
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

export default WomensApparel;