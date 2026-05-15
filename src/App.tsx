import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "./context/CartContext"; // Ensure this is imported
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index.tsx";
import MensApparel from "./pages/MensApparel";
import WomensApparel from "./pages/WomensApparel";
import Accessories from "./pages/Accessories";
import Sales from "./pages/Sales";
import Closet from "./pages/Closet";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* The CartProvider must be OUTSIDE the Routes to persist state */}
    <CartProvider> 
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mens-apparel" element={<MensApparel />} />
            <Route path="/womens-apparel" element={<WomensApparel />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/closet" element={<Closet />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;