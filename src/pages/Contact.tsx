import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICONS } from '@/lib/icons';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us – Enfolded Media";
    const el = document.querySelector('meta[name="description"]');
    if (el) {
      el.setAttribute('content', 'Get in touch with Enfolded Media for multilingual digital media services');
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#4A4FB5] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="text-5xl font-bold mb-4" variants={itemVariants}>
              Get in Touch
            </motion.h1>
            <motion.p className="text-xl opacity-90" variants={itemVariants}>
              Have a question about our services? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="flex-grow py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-12">
              <ContactForm />
            </div>

            {/* Additional Contact Methods */}
            <motion.div 
              className="mt-16 grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div className="text-center" variants={cardVariants}>
                <div className="w-12 h-12 bg-[#2C3192]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={ICONS.phone} className="text-[#C12735] text-xl" />
                  </div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:07836319635" className="hover:text-red-500 transition-colors">
                    07836 319 635
                  </a>
                </p>
              </motion.div>

              <motion.div className="text-center" variants={cardVariants}>
                <div className="w-12 h-12 bg-[#2C3192]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={ICONS.email} className="text-[#C12735] text-xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@enfoldedmedia.com" className="hover:text-red-500 transition-colors">
                    info@enfoldedmedia.com
                  </a>
                </p>
              </motion.div>

              <motion.div className="text-center" variants={cardVariants}>
                <div className="w-12 h-12 bg-[#2C3192]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={ICONS.comments} className="text-[#C12735] text-xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Connect instantly</p>
                <div className="inline-block">
                  <img
                    src="https://cdn.enfoldedmedia.com/enfolded-images/enfqr.png"
                    alt="WhatsApp QR Code"
                    className="w-24 h-24 rounded-md"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
