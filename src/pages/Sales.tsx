import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/smartfit/Navbar";
import MobileNav from "@/components/smartfit/MobileNav";
import Footer from "@/components/smartfit/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingCart, ArrowLeft, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import mensImg from "@/assets/cat-mens.jpg";
import womensImg from "@/assets/cat-womens.jpg";
import accImg from "@/assets/cat-accessories.jpg";

const Sales = () => {
  const { addToCart, toggleFavorite, favorites } = useCart();
  const navigate = useNavigate();

  const saleItems = useMemo(() => {
    const items = [
      ...Array.from({ length: 4 }, (_, i) => ({ id: i + 300, name: `Sale Suit ${i + 1}`, basePrice: 450 + i * 10, image: mensImg, cat: "Men" })),
      ...Array.from({ length: 4 }, (_, i) => ({ id: i + 310, name: `Promo Gown ${i + 1}`, basePrice: 500 + i * 15, image: womensImg, cat: "Women" })),
      ...Array.from({ length: 4 }, (_, i) => ({ id: i + 320, name: `Discount Accessory ${i + 1}`, basePrice: 200 + i * 5, image: accImg, cat: "Acc" })),
    ];

    return items.map(item => ({
      ...item,
      oldPrice: `R ${item.basePrice.toFixed(2)}`,
      price: `R ${(item.basePrice * 0.7).toFixed(2)}`, // 30% Discount
      discount: "30% OFF"
    }));
  }, []);

  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="flex items-center gap-4 mb-10">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
          <h1 className="font-display text-5xl font-bold flex items-center gap-4">
            Flash <em className="italic text-primary">Sale</em> <Tag className="text-primary h-8 w-8" />
          </h1>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {saleItems.map((product) => (
            <Card key={product.id} className="relative overflow-hidden border-none shadow-none group bg-secondary/10">
              <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">
                {product.discount}
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-primary font-bold">{product.price}</p>
                  <p className="text-xs text-muted-foreground line-through">{product.oldPrice}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button onClick={() => addToCart(product)} className="flex-1 gap-2">
                  <ShoppingCart className="h-4 w-4" /> Add
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

export default Sales;