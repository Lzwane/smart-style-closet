import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Truck, MapPin } from "lucide-react";

const Donation = () => {
  return (
    <section id="donate" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">Give Your Style a Second Life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-jakarta">
            Support fellow students by donating your gently used formal wear. Help someone look their best for their big day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Drop-off Option */}
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors bg-background">
            <CardContent className="pt-8 text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-syne font-bold mb-4">Drop-off Point</h3>
              <p className="text-muted-foreground mb-6 font-jakarta grow">
                Visit us at the <strong>UJ Soweto Campus</strong>. Our collection bins are located at the Student Center, available Monday to Friday, 09:00 - 16:00.
              </p>
              <Button variant="outline" className="w-full py-6 font-bold uppercase tracking-wider">
                View Map Location
              </Button>
            </CardContent>
          </Card>

          {/* Pickup Option */}
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors bg-background">
            <CardContent className="pt-8 text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-syne font-bold mb-4">Arrange a Pickup</h3>
              <p className="text-muted-foreground mb-6 font-jakarta grow">
                Can't make it to campus? We'll come to you. Schedule a free pickup from your residence or doorstep at a time that suits you.
              </p>
              <Button className="w-full py-6 font-bold uppercase tracking-wider">
                Schedule Pickup
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex w-16 h-16 bg-white/20 rounded-full items-center justify-center shrink-0">
              <Gift className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-2xl font-syne font-bold mb-2">What can I donate?</h4>
              <p className="opacity-90 font-jakarta">We accept suits, blazers, dresses, formal shoes, and accessories in good condition.</p>
            </div>
          </div>
          <Button variant="secondary" size="lg" className="whitespace-nowrap font-bold">
            Donation Guidelines
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Donation;