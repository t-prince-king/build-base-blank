import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: "123 Construction Ave, Builder City, BC 12345"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "(555) 123-4567"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@buildcorp.com"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-construction-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-construction-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your construction project? Contact us today for a free consultation and quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-construction-dark">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-construction-dark mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-construction-dark mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-construction-dark mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-construction-dark mb-2 block">
                    Phone
                  </label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-construction-dark mb-2 block">
                    Project Type
                  </label>
                  <Input placeholder="Residential, Commercial, Renovation..." />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-construction-dark mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-construction-dark mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-construction-dark mb-1">{info.title}</h4>
                          <p className="text-muted-foreground">{info.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <Card className="border-0 shadow-lg bg-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Emergency Services</h3>
                <p className="mb-4">
                  Need urgent construction assistance? We offer 24/7 emergency services 
                  for critical situations.
                </p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;