
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-20 left-10 w-6 h-6 text-purple-300/60 animate-pulse" />
          <Zap className="absolute top-32 right-20 w-8 h-8 text-green-300/60 animate-bounce" />
          <Globe className="absolute bottom-40 left-20 w-7 h-7 text-blue-300/60 animate-pulse" />
          <Sparkles className="absolute bottom-20 right-10 w-5 h-5 text-purple-300/60 animate-bounce" />
        </div>

        {/* Main content */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 mr-2 text-purple-300" />
            <span className="text-sm font-medium text-white/90">Powered by WebGL Shaders</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Experience the
            <span className="block bg-gradient-to-r from-purple-300 via-green-300 to-blue-300 bg-clip-text text-transparent">
              Digital Aurora
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in a mesmerizing canvas of light and color, where cutting-edge technology meets natural beauty.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            Explore the Magic
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
            Learn More
          </Button>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Zap className="w-8 h-8 text-green-300 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Real-time Rendering</h3>
            <p className="text-white/70">Experience smooth, GPU-accelerated animations at 60fps</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Sparkles className="w-8 h-8 text-purple-300 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Dynamic Colors</h3>
            <p className="text-white/70">Procedurally generated color gradients that evolve over time</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Globe className="w-8 h-8 text-blue-300 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Universal Design</h3>
            <p className="text-white/70">Responsive and optimized for all modern devices</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
