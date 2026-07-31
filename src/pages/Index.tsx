import { Link } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  CalendarDays,
  FileText,
  Globe2,
  Handshake,
  Languages,
  LayoutGrid,
  LayoutTemplate,
  Mail,
  Megaphone,
  Palette,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/IconBadge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import HeroHeadline from "@/components/HeroHeadline";
import PopularPackages from "@/components/ui/PopularPackages";

const trustBadges = [
  { icon: Banknote, label: "Fixed Pricing" },
  { icon: Languages, label: "Multilingual Specialists" },
  { icon: ShieldCheck, label: "No Long Contracts" },
] as const;

const howWeCanHelp = [
  {
    icon: LayoutTemplate,
    title: "Website Design & Support",
    description:
      "Professional websites, updates and improvements to help businesses maintain a strong online presence.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Logos, brand assets and creative design support for businesses that need professional visuals.",
  },
  {
    icon: Megaphone,
    title: "Marketing Materials",
    description:
      "Flyers, social graphics, documents and promotional materials designed for your audience.",
  },
  {
    icon: Wrench,
    title: "Digital Support & Updates",
    description:
      "Quick edits, content changes and ongoing assistance whenever you need extra support.",
  },
  {
    icon: Languages,
    title: "Multilingual Marketing",
    description:
      "Translation, localisation and culturally aware content to help you connect with different audiences.",
  },
  {
    icon: Handshake,
    title: "White-Label Design Support",
    description:
      "Reliable behind-the-scenes design support for agencies and businesses needing extra capacity.",
  },
] as const;

const services = [
  {
    icon: Palette,
    title: "Culturally Resonant Brand Design",
    description:
      "Brand identity that builds trust with multicultural customers and increases conversions.",
  },
  {
    icon: Globe2,
    title: "Multilingual Web & Digital Marketing",
    description:
      "Multilingual websites, SEO and campaigns that increase engagement, leads and revenue.",
  },
  {
    icon: Megaphone,
    title: "Culturally Aware Advertising Materials",
    description:
      "Designing advertising materials that are culturally appropriate and easy for diverse audiences to understand.",
  },
  {
    icon: Languages,
    title: "Professional Translation with Cultural Impact",
    description:
      "Accurate translation and localisation to help your message make sense across different languages and cultures.",
  },
] as const;

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "No Long Contracts",
    description: "Pay only for what you need, when you need it.",
  },
  {
    icon: FileText,
    title: "Jargon-Free Support",
    description: "We speak plain English, not confusing tech-talk.",
  },
  {
    icon: Banknote,
    title: "Built for Your Budget",
    description: "Simple, fixed-price packages designed for independent owners.",
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

const cardClass =
  "flex h-full flex-col rounded-2xl border border-gray-200/90 bg-white px-6 py-8 shadow-[0_1px_2px_rgba(44,49,146,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4A4FB5]/25 hover:shadow-[0_12px_28px_-14px_rgba(74,79,181,0.28)]";

const Index = () => {
  useEffect(() => {
    document.title = "Enfolded Media – Multilingual Digital Media";
    const el = document.querySelector('meta[name="description"]');
    if (el) {
      el.setAttribute(
        "content",
        "Professional multilingual digital media services in the UK"
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#4A4FB5] text-white">
        <HeroBackground />
        <div className="container relative z-10 mx-auto w-full px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="w-full max-w-3xl">
            <HeroHeadline />

            <motion.div
              className="hero-cta flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <Button variant="white" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/packages">
                  <LayoutGrid aria-hidden="true" />
                  View Packages
                </Link>
              </Button>

              <Button variant="default" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#contact">
                  <CalendarDays aria-hidden="true" />
                  Book a Free Consultation
                </a>
              </Button>
            </motion.div>

            <motion.ul
              className="mt-8 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
              aria-label="Key benefits"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur-sm"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 opacity-95"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                  <span>{label}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section
        className="bg-white py-20 md:py-24"
        aria-labelledby="how-we-can-help-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="how-we-can-help-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 md:text-[2rem]"
            >
              How We Can Help
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600 md:text-lg">
              Supporting businesses, organisations and agencies with practical websites, branding, marketing and digital design support.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {howWeCanHelp.map((item) => (
              <motion.article
                key={item.title}
                className={`${cardClass} items-start text-left`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <IconBadge icon={item.icon} size="lg" className="mb-5" />
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 flex-grow text-[0.95rem] leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <PopularPackages />

      {/* Simple Packages */}
      <section
        className="bg-[#4A4FB5] py-20 text-white md:py-24"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2
              id="services-heading"
              className="text-3xl font-bold tracking-tight text-white md:text-[2rem]"
            >
              Simple Packages. Clear Pricing. No Hidden Fees.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
              Straightforward, fixed-price packages for everyday design and tech tasks—no complicated contracts or confusing jargon.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {services.map((service) => (
              <motion.article
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-white/55 bg-white p-6 text-gray-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(0,0,0,0.28)]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <IconBadge icon={service.icon} className="mb-5" />
                <h3 className="text-lg font-bold leading-snug tracking-tight text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10">
            <Button size="lg" asChild>
              <a href="#contact">
                Book a Free Consultation
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Local Businesses Choose Us */}
      <section
        className="bg-[#F7F8FC] py-20 md:py-24"
        aria-labelledby="why-choose-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="why-choose-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 md:text-[2rem]"
            >
              Why Choose Enfolded Media
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600 md:text-lg">
              Practical help that fits your day-to-day needs.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3 sm:gap-6">
            {whyChooseUs.map((item) => (
              <motion.article
                key={item.title}
                className={`${cardClass} items-center text-center`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <IconBadge icon={item.icon} size="lg" className="mb-5" />
                <h3 className="text-lg font-bold tracking-tight text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="bg-white py-20 md:py-24"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-[#4A4FB5]/15 bg-[#F7F8FC] p-8 text-center shadow-[0_1px_2px_rgba(44,49,146,0.04)] sm:p-12">
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 md:text-[2rem]"
            >
              Need Help With Your Next Digital Project?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
              Whether you need a website, branding, design updates or marketing support, we can help.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">
                  <Mail aria-hidden="true" />
                  Send Us a Message
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  <CalendarDays aria-hidden="true" />
                  Book a Free Consultation
                </Link>
              </Button>
            </div>

            <div className="mt-10 border-t border-gray-200/90 pt-8">
              <p className="mb-6 text-sm text-gray-600">Or reach us directly:</p>
              <div className="mb-8 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8">
                <a
                  href="tel:07836319635"
                  className="flex items-center gap-3 rounded-sm text-gray-900 transition-colors hover:text-[hsl(var(--button-red))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A4FB5] focus-visible:ring-offset-2"
                >
                  <IconBadge icon={Phone} size="sm" />
                  <span className="font-semibold">07836 319 635</span>
                </a>
                <a
                  href="mailto:info@enfoldedmedia.com"
                  className="flex items-center gap-3 rounded-sm text-gray-900 transition-colors hover:text-[hsl(var(--button-red))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A4FB5] focus-visible:ring-offset-2"
                >
                  <IconBadge icon={Mail} size="sm" />
                  <span className="font-semibold">info@enfoldedmedia.com</span>
                </a>
              </div>

              <div>
                <p className="mb-4 text-sm text-gray-600">Connect instantly on WhatsApp</p>
                <div className="inline-block overflow-hidden rounded-xl ring-1 ring-gray-200">
                  <img
                    src="https://cdn.enfoldedmedia.com/enfolded-images/enfqr.png"
                    alt="WhatsApp QR Code"
                    className="h-32 w-32 rounded-xl"
                    width={128}
                    height={128}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
