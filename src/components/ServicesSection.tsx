import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Home, Factory, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes, renovations, and residential projects built to your exact specifications with quality craftsmanship."
  },
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Office buildings, retail spaces, and commercial facilities designed for functionality and modern aesthetics."
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    description: "Manufacturing facilities, warehouses, and industrial complexes built to handle heavy-duty operations."
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our expert renovation services, from minor updates to complete overhauls."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-construction-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-construction-dark mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs and requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-construction-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;