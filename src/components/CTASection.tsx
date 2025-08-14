import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, TrendingUp, Users } from "lucide-react";

interface CTASectionProps {
  onGetStarted: () => void;
}

export const CTASection = ({ onGetStarted }: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Limited Time Offer
          </Badge>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Stop Losing Money to Cold Leads?
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            If this sounds like you, you're at the right place. We make sure these leads don't sleep on you.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 border-white/20 text-center card-hover">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 mx-auto mb-3 text-white" />
                <div className="text-2xl font-bold text-white">60 Sec</div>
                <div className="text-sm text-primary-foreground/80">Response Time</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center card-hover">
              <CardContent className="p-6">
                <Users className="h-8 w-8 mx-auto mb-3 text-white" />
                <div className="text-2xl font-bold text-white">5+ Leads</div>
                <div className="text-sm text-primary-foreground/80">Guaranteed Monthly</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center card-hover">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-white" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-primary-foreground/80">Always Active</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center card-hover">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 mx-auto mb-3 text-white" />
                <div className="text-2xl font-bold text-white">$0</div>
                <div className="text-sm text-primary-foreground/80">Setup Cost</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-elevated glow-turquoise">
            <h3 className="text-2xl font-bold mb-4">Remember Our Guarantee</h3>
            <p className="text-lg text-primary-foreground/90 mb-6">
              We'll set up your system for free. If it doesn't get you at least 5 new qualified leads in 30 days, 
              you owe us nothing. <strong>Zero risk, all reward.</strong>
            </p>
            
            <Button 
              size="lg" 
              variant="secondary"
              onClick={onGetStarted}
              className="bg-white text-primary hover:bg-primary-foreground/90 px-12 py-4 text-lg font-semibold button-glow hover:scale-105 transition-transform duration-300"
            >
              Claim My Free Setup Now
            </Button>
            
            <p className="text-sm text-primary-foreground/70 mt-4">
              ✓ No credit card required • ✓ Setup within 48 hours • ✓ Cancel anytime
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-primary-foreground/80">
              Join hundreds of real estate agents who never miss a lead again
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};