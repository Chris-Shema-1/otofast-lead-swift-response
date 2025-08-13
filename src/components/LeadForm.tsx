import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    expectedResults: "",
    budget: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.expectedResults || !formData.budget) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 24 hours to set up your lead response system.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      expectedResults: "",
      budget: "",
    });
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Get Started Today</CardTitle>
        <CardDescription>
          Fill out this quick form and we'll set up your lead response system for free
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp Number (Optional)</Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="results">Expected Results *</Label>
            <Select
              value={formData.expectedResults}
              onValueChange={(value) => setFormData({ ...formData, expectedResults: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="What are you hoping to achieve?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="more-leads">Generate more qualified leads</SelectItem>
                <SelectItem value="faster-response">Respond to leads faster</SelectItem>
                <SelectItem value="more-conversions">Convert more leads to clients</SelectItem>
                <SelectItem value="save-time">Save time on lead management</SelectItem>
                <SelectItem value="scale-business">Scale my real estate business</SelectItem>
                <SelectItem value="all-above">All of the above</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Monthly Budget *</Label>
            <Select
              value={formData.budget}
              onValueChange={(value) => setFormData({ ...formData, budget: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-500">$0 - $500</SelectItem>
                <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                <SelectItem value="5000+">$5,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Get My Free Setup Now
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};