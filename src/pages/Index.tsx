import Navbar from "@/components/smartfit/Navbar";
import Hero from "@/components/smartfit/Hero";
import Marquee from "@/components/smartfit/Marquee";
import Categories from "@/components/smartfit/Categories";
// Import the new component
import Donation from "@/components/smartfit/Donation"; 
import Testimonials from "@/components/smartfit/Testimonials";
import Gallery from "@/components/smartfit/Gallery";
import TrackOrder from "@/components/smartfit/TrackOrder";
import Contact from "@/components/smartfit/Contact";
import AuthSection from "@/components/smartfit/AuthSection";
import Footer from "@/components/smartfit/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <Donation /> 
      <AuthSection />
      <Testimonials />
      <Gallery />
      <TrackOrder />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;