import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

interface FormData {
  framework: string;
  productDetails: string;
  problemStatement: string;
  industry: string;
  includeAI: boolean;
  includeMarketTrends: boolean;
}

interface StrategyFormProps {
  onSubmit: (data: FormData) => void;
  isGenerating: boolean;
}

export const StrategyForm = ({ onSubmit, isGenerating }: StrategyFormProps) => {
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

  return (
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
  );
};