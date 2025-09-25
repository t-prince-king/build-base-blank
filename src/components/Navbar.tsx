import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-construction-orange">BuildCorp</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors duration-200">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors duration-200">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Get Quote
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;