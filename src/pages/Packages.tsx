import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    document.title = "Packages | Enfolded Media – Multilingual Digital Media";
    const el = document.querySelector('meta[name="description"]');
    if (el) {
      el.setAttribute('content', 'Professional multilingual digital media services in the UK');
    }
  }, []);
  // Category filtering removed; search only

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const designPackages = filteredPackages.filter((p) => p.category === "Design");
  const websitePackages = filteredPackages.filter((p) => p.category === "Website");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
  <section className="bg-secondary/30 py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Our Packages</h1>
            <p className="text-xl text-muted-foreground">
              We provide design services only — we do not offer printing or print fulfilment. Browse our Design and Website packages below.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 sm:gap-4 sm:flex-row">
            <div className="flex-grow">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search packages (e.g., logo, website)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                  aria-label="Search packages"
                />
              </div>
              {searchTerm.trim().length > 0 && (
                <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  {filteredPackages.length} package{filteredPackages.length === 1 ? '' : 's'} found
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPackages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No packages found matching your criteria.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {designPackages.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Design Packages</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {designPackages.map((pkg) => (
                      <PackageCard key={pkg.id} package={pkg} />
                    ))}
                  </div>
                </div>
              )}

              {websitePackages.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Website Packages</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {websitePackages.map((pkg) => (
                      <PackageCard key={pkg.id} package={pkg} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
