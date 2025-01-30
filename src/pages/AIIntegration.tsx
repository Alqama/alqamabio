import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const AIIntegration = () => {
  const [systemType, setSystemType] = useState<string>("");
  const [useCase, setUseCase] = useState("");
  const [techStack, setTechStack] = useState<string>("");
  const [integrationPlan, setIntegrationPlan] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a mock response - in a real application, this would come from an API
    const mockIntegrationSteps = [
      "1. Setup Development Environment",
      `2. Install necessary ${techStack} dependencies`,
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
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
            AI Integration Made Easy
          </h1>
          <p className="text-gray-400 text-lg">
            Enter your current system details, and we'll guide you with AI integration steps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                System Type
              </label>
              <Select onValueChange={setSystemType} required>
                <SelectTrigger className="w-full bg-transparent border-indigo-500">
                  <SelectValue placeholder="Select system type" />
                </SelectTrigger>
                <SelectContent>
                  {["CRM", "ERP", "Web App", "Mobile App", "Database", "IoT"].map((type) => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Describe your use case
              </label>
              <Textarea
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                placeholder="Describe how you want to integrate AI into your system..."
                className="min-h-[120px] bg-transparent border-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Current Tech Stack
              </label>
              <Select onValueChange={setTechStack} required>
                <SelectTrigger className="w-full bg-transparent border-indigo-500">
                  <SelectValue placeholder="Select tech stack" />
                </SelectTrigger>
                <SelectContent>
                  {["Python", "Java", "Node.js", "PHP", "Ruby", ".NET"].map((tech) => (
                    <SelectItem key={tech} value={tech.toLowerCase()}>
                      {tech}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90"
          >
            Get AI Integration Plan
          </Button>
        </form>

        {integrationPlan.length > 0 && (
          <div className="mt-8 p-6 rounded-lg border border-indigo-500 space-y-4">
            <h2 className="text-2xl font-semibold text-indigo-400">
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
      </div>
    </div>
  );
};

export default AIIntegration;