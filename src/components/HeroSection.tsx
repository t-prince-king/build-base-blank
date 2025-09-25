import { Button } from "@/components/ui/button";
import heroImage from "@/assets/construction-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-construction-dark/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Building Your
          <span className="block text-primary">Dreams</span>
          Into Reality
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional construction services with over 20 years of experience. 
          From residential to commercial projects, we deliver excellence on time and within budget.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Get Free Quote
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-construction-dark px-8 py-6 text-lg">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;