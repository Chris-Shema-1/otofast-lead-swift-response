import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { StorySection } from "@/components/StorySection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { LeadForm } from "@/components/LeadForm";
import { Chatbot } from "@/components/Chatbot";

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
      
      <Chatbot webhookUrl="https://n8n-b19k.onrender.com/webhook-test/59d29044-16f2-44e3-82e8-ec2925dfab61" />
      
      {/* Vapi Voice Assistant Widget */}
      <vapi-widget 
        assistant-id="e3c582b5-2a47-4a3b-bab1-c776e3a21fd7" 
        public-key="931e00fb-a51d-42bf-baef-76cad74ec255"
      ></vapi-widget>
    </div>
  );
};

export default Index;
