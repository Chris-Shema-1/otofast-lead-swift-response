import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { StorySection } from "@/components/StorySection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { LeadForm } from "@/components/LeadForm";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      const formElement = document.getElementById('lead-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onGetStarted={scrollToForm} />
      <HeroSection onGetStarted={scrollToForm} />
      <ProblemSection />
      <StorySection onGetStarted={scrollToForm} />
      <ServicesSection />
      <CTASection onGetStarted={scrollToForm} />
      
      {showForm && (
        <section id="lead-form" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <LeadForm />
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
