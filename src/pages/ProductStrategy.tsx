import { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  const form = useForm<FormData>({
    defaultValues: {
      framework: "",
      productDetails: "",
      problemStatement: "",
      industry: "",
      includeAI: false,
      includeMarketTrends: false,
    },
  });

  const onSubmit = async (data: FormData) => {
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="framework"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-300">Strategy Framework</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-indigo-800 text-gray-300">
                              <SelectValue placeholder="Select a framework" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-indigo-950 border-indigo-800">
                            <SelectItem value="lean">Lean Startup</SelectItem>
                            <SelectItem value="blue-ocean">Blue Ocean Strategy</SelectItem>
                            <SelectItem value="jtbd">Jobs-to-be-Done (JTBD)</SelectItem>
                            <SelectItem value="plg">Product-Led Growth (PLG)</SelectItem>
                            <SelectItem value="agile">Agile Product Development</SelectItem>
                            <SelectItem value="custom">Custom Strategy</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="productDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-300">Product Details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your product, its purpose, and key challenges."
                            className="bg-black/50 border-indigo-800 text-gray-300 min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="problemStatement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-300">Problem Statement</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What problem are you trying to solve?"
                            className="bg-black/50 border-indigo-800 text-gray-300 min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-300">Industry (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-indigo-800 text-gray-300">
                              <SelectValue placeholder="Select an industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-indigo-950 border-indigo-800">
                            <SelectItem value="saas">SaaS</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="fintech">FinTech</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="includeAI"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-indigo-800 data-[state=checked]:bg-indigo-600"
                            />
                          </FormControl>
                          <FormLabel className="text-gray-300">Include AI-driven insights</FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="includeMarketTrends"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-indigo-800 data-[state=checked]:bg-indigo-600"
                            />
                          </FormControl>
                          <FormLabel className="text-gray-300">Include market trends & competitive analysis</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                    disabled={isGenerating}
                  >
                    {isGenerating ? "Generating Strategy..." : "Generate Strategy"}
                  </Button>
                </form>
              </Form>

              {strategy && (
                <div className="mt-8 p-6 bg-black/50 rounded-lg border border-indigo-800 animate-fade-in">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-4">Generated Strategy</h3>
                  <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm">
                    {strategy}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductStrategy;