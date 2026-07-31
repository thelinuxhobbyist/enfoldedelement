import { Link } from "react-router-dom";
import { ArrowRight, Globe2, LayoutTemplate, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/IconBadge";

const packages = [
  {
    icon: LayoutTemplate,
    title: "Everyday Website Edits",
    description:
      "Fast website updates, text tweaks, and content adjustments. Ideal for quick wins.",
    cta: "View Package",
    to: "/packages",
  },
  {
    icon: Palette,
    title: "Brand & Logo Design",
    description:
      "Professional logos and brand essentials to launch or refresh your business.",
    cta: "View Package",
    to: "/packages",
  },
  {
    icon: Globe2,
    title: "Custom Growth Marketing",
    description:
      "Multilingual web, SEO, and ad campaigns built to grow your local customer base.",
    cta: "Get a Quote",
    to: "/contact",
  },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const PopularPackages = () => {
  return (
    <section
      className="bg-[#F7F8FC] py-20 md:py-24"
      aria-labelledby="popular-packages-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2
            id="popular-packages-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 md:text-[2rem]"
          >
            Our Most Popular Packages
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600 md:text-lg">
            Straightforward, fixed-price services to get your project started — no hourly rates, no surprises.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3 sm:gap-6">
          {packages.map((pkg) => (
            <motion.article
              key={pkg.title}
              className="group flex h-full flex-col rounded-2xl border border-gray-200/90 bg-white p-6 shadow-[0_1px_2px_rgba(44,49,146,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4A4FB5]/25 hover:shadow-[0_12px_28px_-14px_rgba(74,79,181,0.28)] md:p-7"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className="flex-grow">
                <IconBadge icon={pkg.icon} className="mb-5" />
                <h3 className="text-xl font-bold leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-[#4A4FB5]">
                  {pkg.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">
                  {pkg.description}
                </p>
              </div>

              <div className="mt-7 border-t border-gray-100 pt-5">
                <Button className="w-full" asChild>
                  <Link to={pkg.to}>
                    {pkg.cta}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
