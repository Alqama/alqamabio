import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIIntegration = () => {
  const [systemType, setSystemType] = useState<string>("");
  const [useCase, setUseCase] = useState("");
  const [techStacks, setTechStacks] = useState<string[]>([]);
  const [integrationPlan, setIntegrationPlan] = useState<string[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleTechStackChange = (value: string) => {
    setTechStacks(prev => {
      if (prev.includes(value)) {
        return prev.filter(stack => stack !== value);
      }
      return [...prev, value];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a mock response - in a real application, this would come from an API
    const mockIntegrationSteps = [
      "1. Setup Development Environment",
      `2. Install necessary ${techStacks.join(", ")} dependencies`,
      "3. Create API endpoints for AI integration",
      "4. Implement authentication and security measures",
      "5. Test integration with sample data",
      "6. Deploy and monitor performance"
    ];

    setIntegrationPlan(mockIntegrationSteps);
    
    toast({
      title: "Integration Plan Generated",
      description: "Your custom AI integration plan is ready!",
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="min-h-screen relative flex flex-col items-center justify-start">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#4F46E5"
            speed={0.5}
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-4 pt-8">
          <Button
            variant="ghost"
            className="mb-6 text-indigo-400 hover:text-indigo-300"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <Card className="bg-gradient-to-r from-indigo-950 to-purple-950 border-indigo-800">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-300">AI Integration Made Easy</CardTitle>
              <CardDescription className="text-gray-400">
                Enter your current system details, and we'll guide you with AI integration steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-indigo-300 mb-2">
                      System Type
                    </label>
                    <Select onValueChange={setSystemType} required>
                      <SelectTrigger className="bg-black/50 border-indigo-800 text-gray-300">
                        <SelectValue placeholder="Select system type" />
                      </SelectTrigger>
                      <SelectContent className="bg-indigo-950 border-indigo-800">
                        {["CRM", "ERP", "Web App", "Mobile App", "Database", "IoT"].map((type) => (
                          <SelectItem 
                            key={type} 
                            value={type.toLowerCase()}
                            className="text-white hover:bg-indigo-900"
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-indigo-300 mb-2">
                      Describe your use case
                    </label>
                    <Textarea
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                      placeholder="Describe how you want to integrate AI into your system..."
                      className="min-h-[120px] bg-black/50 border-indigo-800 text-gray-300 placeholder:text-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-indigo-300 mb-2">
                      Current Tech Stack (Multiple Selection)
                    </label>
                    <div className="space-y-2 border border-indigo-800 rounded-md p-3 bg-black/50">
                      {["Python", "Java", "Node.js", "PHP", "Ruby", ".NET"].map((tech) => (
                        <div key={tech} className="flex items-center">
                          <input
                            type="checkbox"
                            id={tech}
                            checked={techStacks.includes(tech.toLowerCase())}
                            onChange={() => handleTechStackChange(tech.toLowerCase())}
                            className="mr-2 accent-indigo-500"
                          />
                          <label htmlFor={tech} className="text-gray-300 cursor-pointer hover:text-indigo-300">
                            {tech}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Get AI Integration Plan
                </Button>
              </form>

              {integrationPlan.length > 0 && (
                <div className="mt-8 p-6 bg-black/50 rounded-lg border border-indigo-800 animate-fade-in">
                  <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
                    Your Integration Plan
                  </h2>
                  <ul className="space-y-3">
                    {integrationPlan.map((step, index) => (
                      <li key={index} className="text-gray-300">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIIntegration;