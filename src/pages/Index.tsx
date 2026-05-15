import Navbar from "@/components/smartfit/Navbar";
import Hero from "@/components/smartfit/Hero";
import Marquee from "@/components/smartfit/Marquee";
import Categories from "@/components/smartfit/Categories";
import Donation from "@/components/smartfit/Donation"; 
import Testimonials from "@/components/smartfit/Testimonials";
import Gallery from "@/components/smartfit/Gallery";
import Contact from "@/components/smartfit/Contact";
import Footer from "@/components/smartfit/Footer";
import MobileNav from "@/components/smartfit/MobileNav";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <Donation /> 
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <MobileNav />
    </main>
  );
};

export default Index;