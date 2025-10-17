import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Package } from "@/types/package";
import { ArrowRight, Star } from "lucide-react";

interface PackageCardProps {
  package: Package;
  onClick?: () => void;
}

const PackageCard = ({ package: pkg, onClick }: PackageCardProps) => {
  return (
    <Card className="group h-full flex flex-col overflow-hidden border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="relative">
        {pkg.featured && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Featured
          </Badge>
        )}
        {pkg.category && (
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {pkg.category}
            </Badge>
          </div>
        )}
        <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
          {pkg.name}
        </CardTitle>
        <CardDescription className="text-base mt-2">{pkg.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-bold text-primary">
            {pkg.priceDisplay}
          </span>
        </div>
        {(() => {
          const features = pkg.packageFeatures && pkg.packageFeatures.length > 0
            ? pkg.packageFeatures
            : (pkg.detailFeatures || []);
          if (!features.length) return null;
          const remaining = Math.max(features.length - 2, 0);
          return (
            <ul className="space-y-2">
              {features.slice(0, 2).map((feat, index) => (
              <li key={index} className="flex items-start text-sm text-muted-foreground">
                <span className="text-accent mr-2 mt-0.5">✓</span>
                {feat}
              </li>
              ))}
              {remaining > 0 && (
                <li className="text-sm text-muted-foreground italic">
                  + {remaining} more {remaining === 1 ? 'feature' : 'features'}
                </li>
              )}
            </ul>
          );
        })()}
      </CardContent>
      <CardFooter>
        <Button 
          variant="default" 
          className="w-full group/button" 
          onClick={onClick}
          asChild={!onClick}
        >
          {onClick ? (
            <>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
            </>
          ) : (
            <Link to={`/packages/${pkg.slug}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
