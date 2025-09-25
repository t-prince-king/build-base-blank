import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import house1 from "@/assets/house-1.jpg";
import house2 from "@/assets/house-2.jpg";
import house3 from "@/assets/house-3.jpg";
import house4 from "@/assets/house-4.jpg";
import house5 from "@/assets/house-5.jpg";
import house6 from "@/assets/house-6.jpg";

const properties = [
  {
    id: 1,
    image: house1,
    title: "Modern Luxury Villa",
    price: "$850,000",
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    status: "For Sale",
    type: "Luxury"
  },
  {
    id: 2,
    image: house2,
    title: "Contemporary Family Home",
    price: "$650,000",
    location: "Austin, TX",
    beds: 5,
    baths: 4,
    sqft: "2,800",
    status: "For Sale",
    type: "Family"
  },
  {
    id: 3,
    image: house3,
    title: "Elegant Ranch Style",
    price: "$480,000",
    location: "Phoenix, AZ",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    status: "Sold",
    type: "Ranch"
  },
  {
    id: 4,
    image: house4,
    title: "Craftsman Style Home",
    price: "$720,000",
    location: "Portland, OR",
    beds: 4,
    baths: 3,
    sqft: "2,650",
    status: "For Sale",
    type: "Craftsman"
  },
  {
    id: 5,
    image: house5,
    title: "Modern Minimalist House",
    price: "$950,000",
    location: "Seattle, WA",
    beds: 3,
    baths: 2,
    sqft: "2,400",
    status: "For Sale",
    type: "Modern"
  },
  {
    id: 6,
    image: house6,
    title: "Traditional Colonial",
    price: "$580,000",
    location: "Atlanta, GA",
    beds: 4,
    baths: 3,
    sqft: "2,900",
    status: "For Sale",
    type: "Colonial"
  }
];

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-construction-dark mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of completed projects and available properties. 
            Quality craftsmanship in every home we build.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={property.status === "For Sale" ? "default" : "secondary"}
                    className={property.status === "For Sale" ? "bg-primary text-white" : "bg-construction-dark text-white"}
                  >
                    {property.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-construction-dark">
                    {property.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-construction-dark mb-2">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{property.price}</div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.sqft} sq ft</span>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;