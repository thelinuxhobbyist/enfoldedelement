import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICONS } from '@/lib/icons';
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold"
              variants={itemVariants}
            >
              Web & Design Support for Local Businesses.
            </motion.h1>

            <motion.p
              className="hero-sub mt-2 text-lg md:text-xl font-semibold max-w-3xl mx-auto"
              variants={itemVariants}
            >
              No corporate jargon. No massive agency price tags. Just straightforward website updates, logos, and marketing for trades, restaurants, and solo traders.
            </motion.p>

            <motion.div 
              className="pt-6 flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariants}
            >
              <Button variant="white" size="lg" className="px-8 py-3 text-lg font-semibold rounded-md" asChild>
                <Link to="/packages">
                  View Packages
                </Link>
              </Button>

              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold rounded-md shadow-lg" asChild>
                <a href="#contact" className="px-8 py-3 text-lg font-semibold">Book a Free Consultation</a>
              </Button>
            </motion.div>
          </motion.div>
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
          <div className="text-center mb-16">
            <h2 className="section-title mb-4" style={{ color: 'white' }}>Simple Packages. Clear Pricing. No Hidden Fees.</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We know web design and marketing firms can feel intimidating. That’s why we don’t do complicated contracts or confusing jargon. We offer straightforward, fixed-price packages for everyday design and tech tasks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white text-gray-900 p-4 rounded-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-12 h-12 bg-[#2C3192]/10 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={ICONS.play} className="text-[#C12735] text-xl" />
              </div>
              <h3 className="font-bold text-xl mb-2">Culturally Resonant Brand Design</h3>
              <p className="text-base text-gray-600">
                Brand identity that builds trust with multicultural customers and increases conversions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white text-gray-900 p-4 rounded-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-12 h-12 bg-[#2C3192]/10 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={ICONS.pound} className="text-[#C12735] text-xl" />
              </div>
              <h3 className="font-bold text-xl mb-2">Multilingual Web & Digital Marketing</h3>
              <p className="text-base text-gray-600">
                Multilingual websites, SEO and campaigns that increase engagement, leads and revenue.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white text-gray-900 p-4 rounded-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-12 h-12 bg-[#2C3192]/10 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={ICONS.bolt} className="text-[#C12735] text-xl" />
              </div>
              <h3 className="font-bold text-xl mb-2">Culturally Aware Advertising Materials</h3>
              <p className="text-base text-gray-600">
                Designing advertising materials that are culturally appropriate and easy for diverse audiences to understand.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white text-gray-900 p-4 rounded-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-12 h-12 bg-[#2C3192]/10 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={ICONS.globe} className="text-[#C12735] text-xl" />
              </div>
              <h3 className="font-bold text-xl mb-2">Professional Translation with Cultural Impact</h3>
              <p className="text-base text-gray-600">
                Accurate translation and localisation to help your message make sense across different languages and cultures.
              </p>
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 text-lg font-semibold rounded-md shadow-lg">
              <a href="#contact">Book a Free Consultation</a>
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
                Tired of Dealing with Intimidating Agencies?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let’s keep it simple. Explore our straightforward packages or get in touch for a friendly, casual chat about how we can help your business look great online.
              </p>
              
              <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 mb-8">
                <Link to="/contact">Send us a Message</Link>
              </Button>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-600 text-center mb-8">Or reach us directly:</p>
              <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <span className="font-bold">07836 319 635</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✉</span>
                  </div>
                  <span className="font-bold">info@enfoldedmedia.com</span>
                </div>
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
