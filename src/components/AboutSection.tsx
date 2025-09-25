import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Calendar, Award } from "lucide-react";

const stats = [
  { icon: Calendar, number: "20+", label: "Years Experience" },
  { icon: Users, number: "500+", label: "Happy Clients" },
  { icon: CheckCircle, number: "1000+", label: "Projects Completed" },
  { icon: Award, number: "15+", label: "Industry Awards" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-construction-dark mb-6">
              Building Excellence Since 2004
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At BuildCorp, we've been transforming visions into reality for over two decades. 
              Our commitment to quality, safety, and client satisfaction has made us a trusted 
              name in the construction industry.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From small residential projects to large commercial developments, we bring the same 
              level of professionalism and attention to detail to every job. Our experienced team 
              of professionals ensures that your project is completed on time, within budget, and 
              to the highest standards.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4 border-0 shadow-md">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center">
                      <stat.icon className="w-8 h-8 text-primary mb-2" />
                      <div className="text-2xl font-bold text-construction-dark">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-construction-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-construction-dark mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver exceptional construction services that exceed our clients' expectations 
                while maintaining the highest standards of safety, quality, and integrity.
              </p>
            </div>
            
            <div className="bg-secondary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-construction-dark mb-4">Why Choose Us</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Licensed and insured professionals
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Transparent pricing and timelines
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Quality materials and workmanship
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  24/7 customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;