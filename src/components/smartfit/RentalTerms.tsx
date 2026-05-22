import { Clock, Sparkles, ShieldCheck, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RentalTerms = () => (
  <section className="py-12 border-y bg-secondary/10">
    <div className="container mx-auto px-6">
      <h3 className="text-center font-display text-2xl font-bold mb-8 italic">Rental Guidelines</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-background border-none shadow-sm">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <Clock className="text-primary mb-3 h-6 w-6" />
            <p className="font-bold text-sm uppercase">2-5 Day Period</p>
            <p className="text-[11px] text-muted-foreground">Standard rentals for weekend events or graduations.</p>
          </CardContent>
        </Card>
        <Card className="bg-background border-none shadow-sm">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <Sparkles className="text-primary mb-3 h-6 w-6" />
            <p className="font-bold text-sm uppercase">Free Cleaning</p>
            <p className="text-[11px] text-muted-foreground">Maintenance and laundry are handled by us.</p>
          </CardContent>
        </Card>
        <Card className="bg-background border-none shadow-sm">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <ShieldCheck className="text-primary mb-3 h-6 w-6" />
            <p className="font-bold text-sm uppercase">Security Deposit</p>
            <p className="text-[11px] text-muted-foreground">A small refundable deposit is required per item.</p>
          </CardContent>
        </Card>
        <Card className="bg-background border-none shadow-sm">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <Info className="text-primary mb-3 h-6 w-6" />
            <p className="font-bold text-sm uppercase">Late Fees</p>
            <p className="text-[11px] text-muted-foreground">Daily charges apply for items not returned on time.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default RentalTerms;