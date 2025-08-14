import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, MessageSquare, Mail, Globe, Clock, CheckCircle } from "lucide-react";
import servicesImage from "@/assets/services-image.jpg";

export const ServicesSection = () => {
  const services = [
    {
      icon: Instagram,
      title: "Instagram & TikTok",
      description: "Monitor all DMs and comments, respond instantly to potential buyers",
      features: ["Auto-reply to DMs", "Comment monitoring", "Story engagement"]
    },
    {
      icon: MessageSquare,
      title: "Telegram & WhatsApp",
      description: "Never miss a message across all messaging platforms",
      features: ["24/7 monitoring", "Instant responses", "Lead qualification"]
    },
    {
      icon: Mail,
      title: "Email Management",
      description: "Professional email responses that sound like they came from you",
      features: ["Email templates", "Smart filtering", "Priority sorting"]
    },
    {
      icon: Globe,
      title: "Website Integration",
      description: "Capture and respond to website inquiries immediately",
      features: ["Live chat integration", "Form submissions", "Callback requests"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Instant Response",
      description: "We respond to every inquiry in under 60 seconds",
      icon: Clock
    },
    {
      step: "2",
      title: "Qualify the Lead",
      description: "Ask the right questions to determine if they're ready to buy",
      icon: CheckCircle
    },
    {
      step: "3",
      title: "Book Appointment",
      description: "Schedule qualified leads directly into your calendar",
      icon: MessageSquare
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Complete Solution</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              We Handle All Your Platforms at Once
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Instagram, TikTok, Telegram, Email, and Website — we monitor everything 
              so you never miss another qualified lead.
            </p>
            <div className="max-w-2xl mx-auto">
              <img 
                src={servicesImage} 
                alt="Customer service managing multiple platforms"
                className="rounded-xl shadow-elevated w-full h-auto"
              />
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-border card-hover shadow-[0_4px_12px_-4px_hsl(var(--turquoise-500)_/_0.15)]">
                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4 hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Process */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-elevated card-hover">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Our 3-Step Process
              </h3>
              <p className="text-lg text-muted-foreground">
                You focus on selling, we handle the follow-up
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 mx-auto mb-4 flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};