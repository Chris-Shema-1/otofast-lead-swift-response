import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Users, MessageCircle, TrendingUp } from "lucide-react";

interface StorySectionProps {
  onGetStarted: () => void;
}

export const StorySection = ({ onGetStarted }: StorySectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Here's What's Really Happening to Your Business
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's do some simple math that will shock you...
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <Card className="bg-turquoise-50 border-turquoise-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calculator className="h-6 w-6 text-turquoise-600" />
                    <h3 className="text-xl font-semibold">Your Current Situation</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You close 3 clients per month</li>
                    <li>• Each client = $2,000 profit (after expenses)</li>
                    <li>• Monthly income: $6,000</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <MessageCircle className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-semibold">What You're Losing</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 100+ leads in your DMs/emails</li>
                    <li>• Going cold because you're too busy</li>
                    <li>• Each lost lead = potential $2,000</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-br from-turquoise-500 to-turquoise-600 text-white p-8 rounded-2xl">
                <Users className="h-12 w-12 mb-4 mx-auto lg:mx-0" />
                <h3 className="text-2xl font-bold mb-4">What If We Could Rescue Just 5 of Those Leads?</h3>
                <div className="text-3xl font-bold mb-2">+$10,000</div>
                <p className="text-turquoise-100 mb-6">Additional monthly revenue from just 5 more closed deals</p>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-sm">8 total clients × $2,000 = <strong>$16,000/month</strong></p>
                  <p className="text-turquoise-100 text-xs mt-1">That's $192,000 per year!</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                This is exactly what we handle for you — without you lifting a finger
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                All those people trying to contact you? We take care of them and only deliver the ones 
                who are ready and willing to spend money. Isn't earning an additional 5 clients on top 
                of your current 3 worth it?
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={onGetStarted}
                className="bg-white text-primary hover:bg-primary-foreground/90"
              >
                Yes, I Want More Qualified Leads
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};