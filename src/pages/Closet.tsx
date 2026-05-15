import { useNavigate } from "react-router-dom";
import Navbar from "@/components/smartfit/Navbar";
import MobileNav from "@/components/smartfit/MobileNav"; // Import Mobile Nav
import Footer from "@/components/smartfit/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { MessageCircle, Trash2, ArrowLeft, X, ShoppingBag, Heart } from "lucide-react";

const Closet = () => {
  const { cart, favorites, removeFromCart, toggleFavorite } = useCart();
  const navigate = useNavigate();
  
  const prudenceNumber = "27761525879"; 

  const handleCheckout = () => {
    const items = cart.map(i => `- ${i.name} (${i.price})`).join("%0A");
    const message = `Hello Prudence, I would like to rent the following from SmartFit Closet:%0A%0A${items}`;
    window.open(`https://wa.me/${prudenceNumber}?text=${message}`, "_blank");
  };

  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return acc + price;
  }, 0);

  return (
      <main className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <div className="mx-auto max-w-[1000px] px-6 py-10 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <h1 className="font-display text-4xl font-bold tracking-tight">My <em className="italic">Closet</em></h1>
          
          {/* UPDATED: navigate(-1) goes back to the actual previous category page */}
          <Button variant="outline" onClick={() => navigate(-1)} className="gap-2 w-fit">
            <ArrowLeft className="w-4 h-4" /> Add More Items
          </Button>
        </div>

        <div className="grid gap-16">
          {/* Cart Section */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" /> Items to Rent ({cart.length})
            </h2>
            {cart.length === 0 ? (
              <div className="border-2 border-dashed rounded-2xl p-10 text-center opacity-50">Your cart is empty.</div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, idx) => (
                  <Card key={`cart-${idx}`} className="border-none bg-secondary/10 overflow-hidden">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img src={item.image} className="w-16 h-20 object-cover rounded-lg shadow-sm" />
                        <div>
                          <p className="font-bold text-sm md:text-base">{item.name}</p>
                          <p className="text-primary font-bold">{item.price}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(idx)} className="text-destructive">
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                <div className="pt-6 border-t flex flex-col items-end gap-4">
                  <p className="text-2xl font-bold">Total: R {totalPrice.toFixed(2)}</p>
                  <Button onClick={handleCheckout} size="lg" className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 px-10 h-14 font-bold rounded-xl">
                    <MessageCircle className="w-5 h-5" /> Checkout via WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </section>

          {/* Wishlist Section */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" /> Wishlist ({favorites.length})
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {favorites.map((item) => (
                <div key={`fav-${item.id}`} className="group relative bg-secondary/10 p-3 rounded-2xl">
                  {/* Unlike/Remove Button */}
                  <button 
                    onClick={() => toggleFavorite(item)}
                    className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm hover:text-destructive transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  
                  <img src={item.image} className="aspect-[3/4] object-cover rounded-xl" />
                  <div className="mt-3">
                    <p className="text-[12px] font-bold truncate">{item.name}</p>
                    <p className="text-[11px] text-primary font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <MobileNav /> {/* Added Bottom Bar */}
    </main>
  );
};

export default Closet;