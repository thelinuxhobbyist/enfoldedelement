import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Globe2,
  Languages,
  LayoutGrid,
  Mail,
  Palette,
  Phone,
  Zap,
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

const Index = () => {
  useEffect(() => {
    document.title = "Enfolded Media – Multilingual Digital Media";
    const el = document.querySelector('meta[name="description"]');
    if (el) {
      el.setAttribute('content', 'Professional multilingual digital media services in the UK');
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#4A4FB5] text-white">
        <HeroBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10 w-full">
          <div className="w-full">
            <HeroHeadline />

            <motion.div
              className="hero-cta flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <Button variant="white" size="lg" asChild>
                <Link to="/packages">
                  <LayoutGrid />
                  View Packages
                </Link>
              </Button>

              <Button variant="default" size="lg" asChild>
                <a href="#contact">
                  <CalendarDays />
                  Book a Free Consultation
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Help Section (replaces 'Why Multilingual Matters') */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Who We Help</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Practical digital support for local businesses and solo traders—no jargon, no long contracts.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Restaurants & Cafes</h3>
              <p className="text-sm text-gray-600 mt-2">Menu updates, social graphics, and keeping your local customers informed.</p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Trades & Solo Traders</h3>
              <p className="text-sm text-gray-600 mt-2">Professional logos, business cards, and simple websites that build trust.</p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Play Centres & Local Venues</h3>
              <p className="text-sm text-gray-600 mt-2">Engaging flyers, booking page edits, and community marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages Section (kept after Who We Help) */}
      <PopularPackages />

      {/* Services Section */}
      <section className="py-20 bg-[#4A4FB5] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 w-full">
            <h2 className="section-title mb-4" style={{ color: 'white' }}>Simple Packages. Clear Pricing. No Hidden Fees.</h2>
            <p className="text-lg w-full">
              We know web design and marketing firms can feel intimidating. That’s why we don’t do complicated contracts or confusing jargon. We offer straightforward, fixed-price packages for everyday design and tech tasks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white text-gray-900 p-6 rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <IconBadge icon={Palette} className="mb-4" />
              <h3 className="font-bold text-xl mb-2">Culturally Resonant Brand Design</h3>
              <p className="text-base text-gray-600">
                Brand identity that builds trust with multicultural customers and increases conversions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white text-gray-900 p-6 rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <IconBadge icon={Globe2} className="mb-4" />
              <h3 className="font-bold text-xl mb-2">Multilingual Web & Digital Marketing</h3>
              <p className="text-base text-gray-600">
                Multilingual websites, SEO and campaigns that increase engagement, leads and revenue.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white text-gray-900 p-6 rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <IconBadge icon={Zap} className="mb-4" />
              <h3 className="font-bold text-xl mb-2">Culturally Aware Advertising Materials</h3>
              <p className="text-base text-gray-600">
                Designing advertising materials that are culturally appropriate and easy for diverse audiences to understand.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white text-gray-900 p-6 rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <IconBadge icon={Languages} className="mb-4" />
              <h3 className="font-bold text-xl mb-2">Professional Translation with Cultural Impact</h3>
              <p className="text-base text-gray-600">
                Accurate translation and localisation to help your message make sense across different languages and cultures.
              </p>
            </motion.div>
          </div>
          <div className="mt-12">
            <Button size="lg" asChild>
              <a href="#contact">
                Book a Free Consultation
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Local Businesses Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Why Local Businesses Choose Us</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Practical help that fits your day-to-day needs.</p>
          </div>

          <div className="max-w-3xl mx-auto text-center grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold">No Long Contracts</h3>
              <p className="text-sm text-gray-600 mt-2">Pay only for what you need, when you need it.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold">Jargon-Free Support</h3>
              <p className="text-sm text-gray-600 mt-2">We speak plain English, not confusing tech-talk.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold">Built for Your Budget</h3>
              <p className="text-sm text-gray-600 mt-2">Simple, fixed-price packages designed for independent owners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (hidden for now) */}
      <section className="py-20 bg-white hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Real impact, real results</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              <span className="font-semibold">Trusted by local businesses and organisations across the UK</span><br />
              Here’s what our clients say about working with Enfolded Media.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400 text-base">
                  ★★★★★
                </div>
              </div>
              <p className="text-base text-gray-600 mb-4">
                "The multilingual design helped our neighbourhood restaurant reach previously unreachable demographics. Our business has increased by 30% after working with them."
              </p>
              <div className="font-bold text-base">Sarah Chen</div>
              <div className="text-sm text-gray-500">Restaurant Owner</div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400 text-base">
                  ★★★★★
                </div>
              </div>
              <p className="text-base text-gray-600 mb-4">
                "Their translation services are exceptional for our community. They understand what works for our community."
              </p>
              <div className="font-bold text-base">Ahmed Hassan</div>
              <div className="text-sm text-gray-500">Community Center Director</div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400 text-base">
                  ★★★★★
                </div>
              </div>
              <p className="text-base text-gray-600 mb-4">
                "Professional, understanding, and exceptionally responsive. They got our message across in our organisation."
              </p>
              <div className="font-bold text-base">Maya Patel</div>
              <div className="text-sm text-gray-500">Charity UK Director</div>
            </motion.div>
          </div>
        </div>
      </section>

  {/* CTA Section */}
  <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-sm max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's bring your ideas to life.
              </p>
              
              <Button asChild size="lg" className="mb-8">
                <Link to="/contact">
                  <Mail />
                  Send us a Message
                </Link>
              </Button>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-600 text-center mb-8">Or reach us directly:</p>
              <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
                <a
                  href="tel:07836319635"
                  className="flex items-center justify-center gap-3 text-gray-900 hover:text-[hsl(var(--button-red))] transition-colors"
                >
                  <IconBadge icon={Phone} size="sm" />
                  <span className="font-semibold">07836 319 635</span>
                </a>
                <a
                  href="mailto:info@enfoldedmedia.com"
                  className="flex items-center justify-center gap-3 text-gray-900 hover:text-[hsl(var(--button-red))] transition-colors"
                >
                  <IconBadge icon={Mail} size="sm" />
                  <span className="font-semibold">info@enfoldedmedia.com</span>
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">Connect instantly on WhatsApp</p>
                <div className="inline-block rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.enfoldedmedia.com/enfolded-images/enfqr.png"
                    alt="WhatsApp QR Code"
                    className="w-32 h-32 rounded-md"
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
