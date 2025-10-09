import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Package, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Premium Design Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center">
              Modern Britain Speaks More Than English
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                And So Should Your Business
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
              Recognising language as a bridge to cultural connection, we design for impact and help you reach new audiences in a multicultural Britain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/packages">
                  Explore Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/packages">View All Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-12 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24hr</div>
                <div className="text-sm text-muted-foreground">Turnaround Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Enfolded Media?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional design solutions that help your business stand out
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Flexible Packages</h3>
              <p className="text-muted-foreground">
                Choose from a variety of design packages tailored to your specific needs and budget.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your designs delivered quickly without compromising on quality or creativity.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Every design is crafted with attention to detail and professional excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Browse our packages and find the perfect solution for your design needs.
            </p>
            <Button variant="secondary" size="lg" className="shadow-lg" asChild>
              <Link to="/packages">
                View All Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
