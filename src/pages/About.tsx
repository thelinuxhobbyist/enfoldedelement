import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Section: React.FC<{ title: string }> = ({ title, children }) => (
  <section className="py-8 border-b border-border">
    <h2 className="text-2xl font-bold mb-3">{title}</h2>
    <div className="prose prose-stone dark:prose-invert max-w-none">
      {children}
    </div>
  </section>
);

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">About Us</h1>
          <p className="text-lg text-foreground/80 max-w-3xl">Multilingual. Impactful. Designed for your audience.</p>
        </header>

        <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
          <div className="p-6 sm:p-10">
            <Section title="Who We Are">
              <p>We’re a team of multilingual designers, translators, and strategists passionate about inclusive communication. With roots across communities and cultures, we understand how to make your message resonate authentically — not just linguistically, but emotionally.</p>
              <p>Our work combines creative design, cultural awareness, and digital expertise to help organisations, brands, and services engage meaningfully with diverse audiences across the UK.</p>
            </Section>

            <Section title="What We Do">
              <p>We specialise in multilingual digital media — helping you connect with real people through language, culture, and design.</p>
              <ul>
                <li><strong>Brand Identity</strong> – Logos, colour palettes, and visuals that resonate across cultures.</li>
                <li><strong>Digital Presence</strong> – Websites, social media, and SEO built for multilingual engagement.</li>
                <li><strong>Translation & Localisation</strong> – Language services rooted in cultural insight.</li>
                <li><strong>Community Campaigns</strong> – Inclusive designs that empower connection and belonging.</li>
              </ul>
              <p>Whether you’re a business expanding your audience, a school promoting inclusion, or a community service ensuring accessibility — we help you speak to everyone, everywhere.</p>
            </Section>

            <Section title="Our Belief">
              <p>Diversity is Britain’s strength. With over 300 languages spoken nationwide, and 1 in 6 residents using a language other than English at home, communication that reflects this richness is more than good practice — it’s good business.</p>
              <p>By speaking your audience’s language — literally and culturally — your brand earns trust, loyalty, and deeper impact.</p>
            </Section>

            <Section title="Our Promise">
              <ul>
                <li><strong>Inclusive by Design.</strong> Every project values accessibility and cultural representation.</li>
                <li><strong>Authentically Multilingual.</strong> We combine linguistic expertise with cultural understanding.</li>
                <li><strong>Driven by Impact.</strong> We measure success by the connections we help you build.</li>
              </ul>
            </Section>

            <Section title="Let’s Create Together">
              <p>If you’re ready to reach new audiences and make your message matter in every language — we’re here to help.</p>
              <p>
                <strong>📞 07836 319 635</strong><br />
                <strong>✉ info@enfoldedmedia.com</strong>
              </p>
              <p><strong>💬 Connect instantly on WhatsApp</strong></p>
              <p className="mt-6 font-semibold">Enfolded Media<br />Multilingual. Impactful. Designed for your audience.</p>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
