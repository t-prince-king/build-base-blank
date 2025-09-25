import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">BuildCorp</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted construction partner for over 20 years. We build dreams into reality 
              with quality, integrity, and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Residential Construction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial Construction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Industrial Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Renovation & Remodeling</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 BuildCorp. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;