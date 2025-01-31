import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Bot, Code, Database, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Particles */}
      <div className="min-h-screen relative flex flex-col items-center justify-center">
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
        <div className="relative z-10 text-center px-4 pt-8">
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
            <p className="text-gray-300 leading-relaxed">
              Passionate about creating innovative solutions at the intersection of technology and design. 
              Specializing in building scalable applications with modern technologies.
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

          {/* THE FUTURE MAKER'S TOOLKIT Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-8">THE FUTURE MAKER'S TOOLKIT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div 
                onClick={() => navigate('/ai-integration')}
                className="bg-gradient-to-r from-indigo-950 to-purple-950 p-6 rounded-xl border border-indigo-800 hover:border-indigo-600 transition-all cursor-pointer"
              >
                <Bot className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold text-indigo-300 mb-2">AI Integration</h3>
                <p className="text-gray-400 text-sm">Seamlessly integrate AI capabilities into existing systems</p>
              </div>
              
              <div 
                onClick={() => navigate('/product-strategy')}
                className="bg-gradient-to-r from-indigo-950 to-purple-950 p-6 rounded-xl border border-indigo-800 hover:border-indigo-600 transition-all cursor-pointer"
              >
                <Code className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold text-indigo-300 mb-2">Next-Gen Product Strategy</h3>
                <p className="text-gray-400 text-sm">Building with cutting-edge frameworks and tools</p>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-950 to-purple-950 p-6 rounded-xl border border-indigo-800 hover:border-indigo-600 transition-all">
                <Database className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold text-indigo-300 mb-2">Data Architecture</h3>
                <p className="text-gray-400 text-sm">Designing scalable and efficient data solutions</p>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-950 to-purple-950 p-6 rounded-xl border border-indigo-800 hover:border-indigo-600 transition-all">
                <Settings className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold text-indigo-300 mb-2">System Design</h3>
                <p className="text-gray-400 text-sm">Creating robust and scalable architectures</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      </div>

      {/* Footer Section */}
      <div className="relative z-10 py-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-indigo-400 font-semibold mb-2">Let's create something amazing...</p>
          <a 
            href="mailto:alqamaansari@gmail.com" 
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            alqamaansari@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;