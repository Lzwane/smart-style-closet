import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Truck, MapPin } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Donation = () => {
  const UJ_SOWETO_COORDS = "-26.2505,27.9126"; // Coordinates for UJ Soweto

  const handleViewMap = () => {
    // Opens Google Maps showing distance from current location to UJ Soweto
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${UJ_SOWETO_COORDS}`, "_blank");
  };

  const handleSchedulePickup = () => {
    // Redirection to WhatsApp with a pre-filled message including location intent
    const message = encodeURIComponent("Hello! I'm donating clothes and would like to schedule a pickup from my location.");
    window.open(`https://wa.me/27761525879?text=${message}`, "_blank"); 
  };

  return (
    <section id="donate" className="py-24 bg-secondary/30 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Give Your Style a Second Life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Support fellow students by donating your gently used formal wear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 text-center flex flex-col h-full">
              <MapPin className="text-primary w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Drop-off Point</h3>
              <p className="text-muted-foreground mb-6 grow">
                Visit us at the <strong>UJ Soweto Campus</strong>. Available Mon-Fri, 09:00 - 16:00.
              </p>
              <Button onClick={handleViewMap} variant="outline" className="w-full">
                View Distance on Maps
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 text-center flex flex-col h-full">
              <Truck className="text-primary w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Arrange a Pickup</h3>
              <p className="text-muted-foreground mb-6 grow">
                We'll come to you! Schedule a free pickup from your current location via WhatsApp.
              </p>
              <Button onClick={handleSchedulePickup} className="w-full">
                Schedule on WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <Gift className="w-10 h-10 shrink-0" />
            <div>
              <h4 className="text-xl font-bold">What can I donate?</h4>
              <p className="opacity-90">Suits, blazers, dresses, and formal accessories.</p>
            </div>
          </div>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="secondary" size="lg" className="font-bold">
                Donation Guidelines
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Donation Guidelines</AlertDialogTitle>
                <AlertDialogDescription className="space-y-4">
                  <p>1. Items must be gently used, clean, and without significant damage.</p>
                  <p>2. We prioritize formal wear (suits, dresses, blazers) for student interviews and events.</p>
                  <p>3. Please ensure all pockets are emptied before donating.</p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Got it</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
};

export default Donation;