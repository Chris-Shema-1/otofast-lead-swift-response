import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative bg-white text-foreground py-20 lg:py-32 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-turquoise-50 to-white"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-turquoise-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-turquoise-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8 lg:mb-6">
              <img 
                src="/lovable-uploads/0284cf26-0449-4769-af31-2bcb94290fa4.png" 
                alt="Otofast Logo" 
                className="h-16 w-auto mx-auto lg:mx-0 mb-6"
              />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              Never Let Another Lead Go <span className="text-primary">Cold</span> Again
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-muted-foreground">
              We make sure every new lead gets a personal reply in under 60 seconds — 24/7. 
              Turn your cold leads into closed deals automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center mb-8">
              <Button 
                size="lg"
                onClick={onGetStarted}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold button-glow hover:scale-105 transition-transform duration-300"
              >
                Get My Free Setup Now
              </Button>
            </div>
            
            <p className="text-muted-foreground text-sm mb-8">
              ✓ Free setup • ✓ 5+ qualified leads guaranteed in 30 days
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-2xl blur-2xl transform scale-105"></div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional real estate agent managing leads efficiently"
                className="rounded-2xl shadow-elevated w-full h-auto mb-6"
              />
              <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 glow-turquoise">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Guarantee</h3>
                <p className="text-lg text-muted-foreground">
                  We'll set up your system for free. If it doesn't get you at least 5 new qualified leads in 30 days, 
                  <strong className="text-primary"> you owe us nothing.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};