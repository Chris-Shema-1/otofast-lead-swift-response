import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-turquoise-500 to-turquoise-600 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/0284cf26-0449-4769-af31-2bcb94290fa4.png" 
              alt="Otofast Logo" 
              className="h-16 w-auto mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Never Let Another Lead Go <span className="text-turquoise-100">Cold</span> Again
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-turquoise-100 max-w-3xl mx-auto">
            We make sure every new lead gets a personal reply in under 60 seconds — 24/7. 
            Turn your cold leads into closed deals automatically.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={onGetStarted}
              className="bg-white text-turquoise-600 hover:bg-turquoise-50 px-8 py-4 text-lg font-semibold"
            >
              Get My Free Setup Now
            </Button>
            <p className="text-turquoise-100 text-sm">
              ✓ Free setup • ✓ 5+ qualified leads guaranteed in 30 days
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Guarantee</h3>
            <p className="text-lg text-turquoise-100">
              We'll set up your system for free. If it doesn't get you at least 5 new qualified leads in 30 days, 
              <strong className="text-white"> you owe us nothing.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};