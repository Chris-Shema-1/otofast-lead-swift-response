import { Button } from "@/components/ui/button";

interface NavigationProps {
  onGetStarted: () => void;
}

export const Navigation = ({ onGetStarted }: NavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0284cf26-0449-4769-af31-2bcb94290fa4.png" 
              alt="Otofast Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('problem')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Story
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <Button onClick={onGetStarted} size="sm">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button onClick={onGetStarted} size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};