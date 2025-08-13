import { Card, CardContent } from "@/components/ui/card";
import { Clock, MessageSquareX, TrendingDown, DollarSign } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Too Slow to Respond",
      description: "Leads expect instant replies. Every minute you wait, they're reaching out to your competitors."
    },
    {
      icon: MessageSquareX,
      title: "Missed Opportunities",
      description: "You have 100+ leads dying in your DMs and emails while you're busy with existing clients."
    },
    {
      icon: TrendingDown,
      title: "Leads Go Cold",
      description: "Without immediate follow-up, hot leads turn into cold prospects that never convert."
    },
    {
      icon: DollarSign,
      title: "Money Left on Table",
      description: "Each lost lead could be worth $2,000+ in commission. How much are you losing monthly?"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              The Problem Every Real Estate Agent Faces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You're great at closing deals, but leads slip through the cracks because you can't respond to everyone instantly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-white border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <problem.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};