import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PopularPackages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Our Most Popular Packages</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Straightforward, fixed-price services to get your project started — no hourly rates, no surprises.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="border rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-gray-900">Everyday Website Edits</div>
            <p className="text-sm text-gray-600 mt-3">Fast website updates, text tweaks, and content adjustments. Ideal for quick wins.</p>
            <div className="mt-6">
              <Button variant="outline" asChild>
                <Link to="/packages">View Package</Link>
              </Button>
            </div>
          </div>

          <div className="border rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-gray-900">Brand & Logo Design</div>
            <p className="text-sm text-gray-600 mt-3">Professional logos and brand essentials to launch or refresh your business.</p>
            <div className="mt-6">
              <Button variant="outline" asChild>
                <Link to="/packages">View Package</Link>
              </Button>
            </div>
          </div>

          <div className="border rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-gray-900">Custom Growth Marketing</div>
            <p className="text-sm text-gray-600 mt-3">Multilingual web, SEO, and ad campaigns built to grow your local customer base.</p>
            <div className="mt-6">
              <Button asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
