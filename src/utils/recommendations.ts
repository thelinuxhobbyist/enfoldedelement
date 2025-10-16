import { Package, PackageWithId } from "@/types/package";

interface PackageScore {
  package: PackageWithId;
  score: number;
}

export const getRecommendedPackages = (
  currentPackage: PackageWithId,
  allPackages: PackageWithId[],
  limit: number = 3
): PackageWithId[] => {
  // Don't include the current package in recommendations
  const otherPackages = allPackages.filter(pkg => pkg.id !== currentPackage.id);
  
  const scoredPackages: PackageScore[] = otherPackages.map(pkg => {
    let score = 0;

    // Category match (weight if present)
    if (pkg.category && currentPackage.category && pkg.category === currentPackage.category) {
      score += 5;
    }

    // Price range match (medium weight)
    const priceDiff = Math.abs((pkg.priceNumeric ?? 0) - (currentPackage.priceNumeric ?? 0));
    const base = Math.max(currentPackage.priceNumeric ?? 1, 1);
    const priceScore = 3 * (1 - Math.min(priceDiff / base, 1));
    score += priceScore;

    // Text overlap between short descriptions (medium-low weight)
    const a = (pkg.shortDescription || '').toLowerCase();
    const b = (currentPackage.shortDescription || '').toLowerCase();
    const tokens = (s: string) => s.split(/\W+/).filter(w => w.length > 3);
    const aw = new Set(tokens(a));
    const bw = new Set(tokens(b));
    let overlap = 0;
    aw.forEach(w => { if (bw.has(w)) overlap++; });
    score += Math.min(overlap, 5) * 0.5;

    // Featured packages get a small boost
    if (pkg.featured) {
      score += 1;
    }

    // Optional audience hint if present
    if (pkg.perfectFor && currentPackage.perfectFor) {
      const pa = pkg.perfectFor.toLowerCase();
      const ca = currentPackage.perfectFor.toLowerCase();
      if (pa.includes(ca) || ca.includes(pa)) score += 2;
    }

    // Add a small random factor to break ties and add variety
    score += Math.random() * 0.5;

    return { package: pkg, score };
  });

  // Sort by score and return top N packages
  return scoredPackages
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.package);
};

export const getCategoryRecommendations = (
  category: string,
  allPackages: PackageWithId[],
  exclude: string[] = [],
  limit: number = 3
): PackageWithId[] => {
  const categoryPackages = allPackages.filter(pkg => 
    pkg.category === category && !exclude.includes(pkg.id)
  );

  // If we don't have enough packages in the same category, include featured packages
  if (categoryPackages.length < limit) {
    const featuredPackages = allPackages.filter(pkg =>
      pkg.featured && !exclude.includes(pkg.id) && pkg.category !== category
    );
    return [...categoryPackages, ...featuredPackages].slice(0, limit);
  }

  // Prioritize featured packages within the category
  return [...categoryPackages]
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    })
    .slice(0, limit);
};
