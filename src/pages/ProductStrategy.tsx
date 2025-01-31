import { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StrategyForm } from "@/components/product-strategy/StrategyForm";
import { StrategyOutput } from "@/components/product-strategy/StrategyOutput";

interface FormData {
  framework: string;
  productDetails: string;
  problemStatement: string;
  industry: string;
  includeAI: boolean;
  includeMarketTrends: boolean;
}

const ProductStrategy = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (data: FormData) => {
    console.log("Form submitted with data:", data);
    setIsGenerating(true);
    
    // Simulate strategy generation
    setTimeout(() => {
      setStrategy(`
        Strategic Objectives:
        1. Define clear product vision and goals
        2. Establish market positioning strategy
        3. Develop user-centric features
        
        Market Positioning:
        - Target specific user segments
        - Differentiate through innovation
        - Build strong brand identity
        
        Innovation Approach:
        - Focus on user feedback
        - Implement agile development
        - Continuous feature improvement
        
        Go-To-Market Strategy:
        - Phase 1: MVP Launch
        - Phase 2: Market Expansion
        - Phase 3: Scale Operations
        
        Scaling Plan:
        - Optimize user acquisition
        - Enhance product features
        - Expand market presence
      `);
      
      setIsGenerating(false);
      toast({
        title: "Strategy Generated",
        description: "Your product strategy has been generated successfully!",
      });
    }, 2000);
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
              <CardTitle className="text-2xl text-indigo-300">Next-Gen Product Strategy</CardTitle>
              <CardDescription className="text-gray-400">
                Select a strategy framework, input your product details, and get a customized strategy instantly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StrategyForm onSubmit={handleSubmit} isGenerating={isGenerating} />
              <StrategyOutput strategy={strategy} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductStrategy;