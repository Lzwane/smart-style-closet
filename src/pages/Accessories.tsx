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

const Accessories = () => {
  const { addToCart, toggleFavorite, favorites } = useCart();
  const navigate = useNavigate();

  // Stable list of 8 unique pieces for both men and women
  const products = useMemo(() => [
    { id: "a1", name: "Premium Silk Tie & Pocket Square (Men)", price: "R 150.00", image: "https://www.thetiehub.com/wp-content/uploads/2024/11/TTH-COMSET-519-1.webp" },
    { id: "a2", name: "Classic Silver Luxury Watch (Men)", price: "R 250.00", image: "https://thediamondbox.co.za/cdn/shop/files/men-s-watch-bigotti-bg-1-10425-1_46076.jpg?v=1727600739&width=485" },
    { id: "a3", name: "Sparkling Crystal Drop Earrings (Women)", price: "R 180.00", image: "https://down-ph.img.susercontent.com/file/sg-11134201-820m8-mntqqxyq8utkac" },
    { id: "a4", name: "Elegant Pearl Necklace Set (Women)", price: "R 220.00", image: "http://iyalsilvers.com/cdn/shop/files/1-Elegant-Stone-Pearl-Layered-Necklace-Set.jpg?v=1759992933" },
    { id: "a5", name: "Polished Silver Cufflinks Set (Men)", price: "R 120.00", image: "https://www.bigw.com.au/medias/sys_master/images/images/hbd/h03/49275949023262.jpg" },
    { id: "a6", name: "Premium Leather Dress Belt (Men)", price: "R 140.00", image: "https://m.media-amazon.com/images/I/61cdd1ghFiL._AC_UY1000_.jpg" },
    { id: "a7", name: "Glittering Evening Clutch Bag (Women)", price: "R 200.00", image: "https://img.fruugo.com/product/4/66/1662022664_0340_0340.jpg" },
    { id: "a8", name: "Elegant Satin Wrap Shawl (Women)", price: "R 160.00", image: "https://img.fruugo.com/product/3/04/208717043_max.jpg" }
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
            Accessories <em className="italic text-muted-foreground">Rentals</em>
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

export default Accessories;