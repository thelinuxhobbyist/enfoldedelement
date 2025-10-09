import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { packages } from "@/data/packages";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PackageCard from "@/components/PackageCard";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";

const PackageDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const packageData = packages.find((pkg) => pkg.slug === slug);

  const handleCheckout = () => {
    // Store package data for later use
    localStorage.setItem('currentPackage', JSON.stringify(packageData));
    navigate(`/checkout/${slug}`);
  };

  if (!packageData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <Button asChild>
            <Link to="/packages">Back to Packages</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedPackages = packages
    .filter((pkg) => pkg.category === packageData.category && pkg.id !== packageData.id)
    .slice(0, 3);

  const handleBuyNow = () => {
    navigate(`/checkout/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back Button */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild>
            <Link to="/packages">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Packages
            </Link>
          </Button>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {packageData.category}
                </Badge>
                <h1 className="text-5xl font-bold mb-4">{packageData.name}</h1>
                <p className="text-xl text-muted-foreground">{packageData.description}</p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">What's Included</h2>
                  <div className="space-y-4">
                    {packageData.inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-4 mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-base">{inclusion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/30">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">Perfect For</h3>
                  <p className="text-muted-foreground">
                    This package is ideal for businesses looking to {packageData.shortDescription.toLowerCase()}.
                    Whether you're just starting out or looking to refresh your existing materials, we've got you covered.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Price & CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-2 border-primary/20 shadow-[var(--shadow-card)]">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Package Price</p>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          £{packageData.price}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        variant="hero" 
                        size="lg" 
                        className="w-full text-lg h-14"
                        onClick={handleBuyNow}
                      >
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Buy Now
                      </Button>
                      <Button variant="outline" size="lg" className="w-full" asChild>
                        <Link to="/packages">View More Packages</Link>
                      </Button>
                    </div>

                    <div className="pt-6 border-t border-border space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 mr-2 text-accent" />
                        Fast turnaround time
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 mr-2 text-accent" />
                        Professional quality
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 mr-2 text-accent" />
                        Revision rounds included
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 mr-2 text-accent" />
                        Source files provided
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages */}
      {relatedPackages.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Other Packages You Might Like</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Enfolded Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PackageDetail;
