import { useNavigate } from "react-router-dom";
import Navbar from "@/components/smartfit/Navbar";
import MobileNav from "@/components/smartfit/MobileNav";
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
    const message = `Hello, I would like to book a rental for the following from SmartFit Closet:%0A%0A${items}%0A%0AI understand that standard cleaning and maintenance are fully handled by SmartFit Closet.`;
    window.open(`https://wa.me/${prudenceNumber}?text=${message}`, "_blank");
  };

  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return isNaN(price) ? acc : acc + price;
  }, 0);

  return (
    <main className="min-h-screen bg-background pb-24 md:pb-0">
      <Navbar />
      <div className="mx-auto max-w-[1000px] px-6 py-10 md:py-20">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-display text-4xl font-bold tracking-tight">My <em className="italic">Closet</em></h1>
          <Button variant="outline" onClick={() => navigate(-1)} className="gap-2 rounded-full px-6">
            <ArrowLeft className="w-4 h-4" /> Add More Items
          </Button>
        </div>

        <div className="grid gap-16">
          {/* Rental Basket Section */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 font-syne uppercase tracking-tighter">
              <ShoppingBag className="w-5 h-5 text-primary" /> Rental Basket ({cart.length})
            </h2>
            {cart.length === 0 ? (
              <div className="border-2 border-dashed rounded-3xl p-12 text-center">
                <p className="text-muted-foreground font-jakarta">Your rental basket is empty.</p>
                <Button variant="link" onClick={() => navigate("/mens-apparel")} className="mt-2 text-primary font-bold">Explore Collection</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, idx) => (
                  <Card key={`cart-${idx}`} className="border-none bg-secondary/10 overflow-hidden rounded-2xl">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-16 h-20 object-contain rounded-xl shadow-sm bg-white/55" />
                        <div>
                          <p className="font-bold text-sm md:text-base">{item.name}</p>
                          <p className="text-primary font-bold text-sm">{item.price} <span className="text-[10px] text-muted-foreground font-normal">/ 2-5 days rental</span></p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(idx)} className="text-destructive hover:bg-destructive/10 rounded-full">
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                <div className="pt-8 border-t flex flex-col items-end gap-3">
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-1">Cleaning and maintenance are handled by SmartFit Closet</p>
                    <p className="text-3xl font-bold font-syne">Rental Total: R {totalPrice.toFixed(2)}</p>
                  </div>
                  <Button onClick={handleCheckout} size="lg" className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white gap-3 px-12 h-16 text-lg font-bold rounded-2xl shadow-xl shadow-green-500/20">
                    <MessageCircle className="w-6 h-6" /> Book via WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </section>

          {/* Wishlist Section */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 font-syne uppercase tracking-tighter">
              <Heart className="w-5 h-5 text-primary" /> Saved for Later ({favorites.length})
            </h2>
            {favorites.length === 0 ? (
                <p className="text-sm text-muted-foreground italic">No saved items yet.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {favorites.map((item) => (
                  <div key={`fav-${item.id}`} className="group relative bg-secondary/10 p-3 rounded-2xl border border-transparent hover:border-primary/20 transition-all">
                    <button 
                      onClick={() => toggleFavorite(item)}
                      className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-md p-2 rounded-full shadow-lg hover:text-destructive transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <div className="aspect-[3/4] overflow-hidden rounded-xl bg-white/50 flex items-center justify-center mb-3">
                      <img src={item.image} alt={item.name} className="object-contain w-full h-full" />
                    </div>
                    <div className="px-1">
                      <p className="text-[12px] font-bold truncate">{item.name}</p>
                      <p className="text-[11px] text-primary font-bold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
      <MobileNav />
    </main>
  );
};

export default Closet;