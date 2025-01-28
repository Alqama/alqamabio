import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { WaitingListSignupModal } from "@/components/WaitingListSignupModal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const handlePromptClick = (promptType: string) => {
    setSelectedPrompt(promptType);
  };

  const closeModal = () => {
    setSelectedPrompt(null);
  };

  const toolkitItems = [
    {
      title: "AI Product Strategy",
      description: "Get AI-powered insights for your product strategy and roadmap planning",
      promptType: "prompt1"
    },
    {
      title: "Market Analysis",
      description: "Analyze market trends and competition with AI assistance",
      promptType: "prompt2"
    },
    {
      title: "User Research",
      description: "Generate user research insights and personas automatically",
      promptType: "prompt3"
    },
    {
      title: "Feature Prioritization",
      description: "Optimize your feature backlog with AI recommendations",
      promptType: "prompt4"
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section with Particles */}
      <div className="h-screen relative flex flex-col items-center justify-center">
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
        
        {/* Profile Content */}
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-indigo-500 overflow-hidden">
              <img
                src="/lovable-uploads/f949c44d-1809-4db2-b135-24fc096b51cf.png"
                alt="Profile"
                className="w-full h-full object-cover object-center scale-125"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-2">
              Mohd Alqama Ansari
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Product Manager & AI Enthusiast
            </p>
          </div>

          {/* Bio Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              Passionate about creating innovative solutions at the intersection of technology and design. 
              Specializing in building scalable applications with modern technologies.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              With over a decade of experience building successful B2B2C platforms and digital products, I help companies bridge the gap between vision and execution.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My expertise lies in rapid prototyping, product strategy, and helping teams achieve product-market fit quickly and effectively. I've led product initiatives for companies like Mosambee, ZenoHealth, and Flyrobe, consistently delivering solutions that transform business objectives into engaging digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com/Alqama" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-indigo-500 hover:bg-indigo-950">
                <Github className="h-5 w-5 text-indigo-500" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/mohd-alqama-ansari-79634241/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-indigo-500 hover:bg-indigo-950">
                <Linkedin className="h-5 w-5 text-indigo-500" />
              </Button>
            </a>
            <a href="mailto:alqamaansari@gmail.com">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-indigo-500 hover:bg-indigo-950">
                <Mail className="h-5 w-5 text-indigo-500" />
              </Button>
            </a>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {["Problem Solver", "Empathy", "Strategic Thinking", "Communication"].map((skill) => (
              <div
                key={skill}
                className="bg-gradient-to-r from-indigo-950 to-purple-950 p-4 rounded-lg border border-indigo-800"
              >
                <p className="text-indigo-400 font-medium text-sm">{skill}</p>
              </div>
            ))}
          </div>

          {/* Future Maker's Toolkit Section */}
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">THE FUTURE MAKER'S TOOLKIT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolkitItems.map((item) => (
                <Card key={item.promptType} className="bg-gradient-to-b from-indigo-950 to-purple-950 border-indigo-800">
                  <CardHeader>
                    <CardTitle className="text-white">{item.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => handlePromptClick(item.promptType)}
                      className="w-full bg-indigo-600 hover:bg-indigo-700"
                    >
                      Join Waiting List
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      </div>

      {/* Waiting List Signup Modal */}
      <WaitingListSignupModal
        isOpen={!!selectedPrompt}
        onClose={closeModal}
        promptType={selectedPrompt || ""}
      />
    </div>
  );
};

export default Index;