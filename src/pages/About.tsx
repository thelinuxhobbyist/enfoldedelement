import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <section className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 min-w-[260px]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Modern Britain speaks more than English — and so should your business.
            </h1>
            <p className="text-base sm:text-lg text-foreground/80 mb-3">
              At <strong>Enfolded Media</strong> we recognise <em>language as a bridge to cultural affinity</em> — designing for impact and helping you reach new audiences in a multicultural Britain.
            </p>
            <p className="text-foreground/80 mb-5">
              We create multilingual digital media that connects people, builds trust, and celebrates the diversity that defines modern Britain.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/packages" className="inline-block rounded-md bg-[#0b72ff] text-white px-4 py-2 font-semibold">
                View Packages
              </Link>
              <a href="#contact" className="inline-block rounded-md border border-[#0b72ff] text-[#0b72ff] px-4 py-2 font-semibold">
                Contact Us
              </a>
            </div>
          </div>

          <aside className="w-full max-w-sm lg:max-w-xs">
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/30 dark:bg-blue-950/20">
              <p className="m-0 text-sm font-bold text-foreground">Why multilingual matters</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-foreground/80 space-y-1">
                <li><strong>1 in 6</strong> UK residents speak a language other than English at home</li>
                <li><strong>300+</strong> languages are spoken across the UK today</li>
                <li><strong>£78bn</strong> yearly revenue from ethnic minority businesses</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Who we are & Services */}
        <section className="grid sm:grid-cols-2 gap-6 mt-9">
          <article aria-labelledby="who-heading" className="bg-card rounded-lg border border-border p-6">
            <h2 id="who-heading" className="text-xl font-semibold mb-2">Who we are</h2>
            <p className="text-foreground/80">
              We’re a multicultural team of designers, translators and digital strategists passionate about inclusive communication. We blend creative design with cultural insight so your message lands — visually and emotionally.
            </p>
          </article>

          <article aria-labelledby="services-heading" className="bg-card rounded-lg border border-border p-6">
            <h2 id="services-heading" className="text-xl font-semibold mb-2">What we do</h2>
            <ul className="list-disc pl-5 space-y-1 text-foreground/80">
              <li><strong>Brand Identity</strong> — logos, palettes and guidelines that resonate across cultures.</li>
              <li><strong>Digital Presence</strong> — websites, social and SEO built for multilingual audiences.</li>
              <li><strong>Translation & Localisation</strong> — professional translation with cultural insight.</li>
              <li><strong>Community Campaigns</strong> — accessible print and digital campaigns for local impact.</li>
            </ul>
            <p className="mt-3">
              <Link to="/packages" className="text-[#0b72ff] font-semibold hover:underline">Explore services →</Link>
            </p>
          </article>
        </section>

        {/* Promise & Impact */}
        <section className="mt-9 flex flex-col md:flex-row gap-5 items-stretch">
          <div className="flex-1 bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold mb-2">Our promise</h3>
            <ul className="list-disc pl-5 space-y-1 text-foreground/80">
              <li><strong>Inclusive by design.</strong> Accessibility and representation in every project.</li>
              <li><strong>Authentically multilingual.</strong> Translation combined with cultural intelligence.</li>
              <li><strong>Driven by impact.</strong> Measurable growth and stronger community ties.</li>
            </ul>
          </div>
          <div className="flex-1 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/30 dark:bg-emerald-950/20">
            <h3 className="text-lg font-semibold mb-2">Built for communities that matter</h3>
            <p className="text-foreground/80">
              We support local businesses, schools & councils, community groups and healthcare providers to engage effectively with diverse audiences.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-9">
          <h3 className="text-lg font-semibold mb-3">Real impact, real results</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <blockquote className="rounded-lg border border-border bg-card p-4">
              <p className="mb-2 text-foreground">“The multilingual design helped our neighbourhood restaurant reach previously unreachable demographics. Our business increased by 30%.”</p>
              <footer className="font-semibold text-foreground/90">— Sarah Chen, Restaurant Owner</footer>
            </blockquote>
            <blockquote className="rounded-lg border border-border bg-card p-4">
              <p className="mb-2 text-foreground">“Their translation services are exceptional for our community. They understand what works.”</p>
              <footer className="font-semibold text-foreground/90">— Ahmed Hassan, Community Centre Director</footer>
            </blockquote>
            <blockquote className="rounded-lg border border-border bg-card p-4">
              <p className="mb-2 text-foreground">“Professional, understanding and responsive. They got our message across.”</p>
              <footer className="font-semibold text-foreground/90">— Maya Patel, Charity Director</footer>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="mt-9 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 dark:border-blue-900/30 dark:from-blue-950/20 dark:to-background">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="w-full md:w-auto">
              <h4 className="text-base font-semibold mb-1">Let's create together</h4>
              <p className="text-foreground/80 m-0">Ready to reach new audiences? Contact us and we’ll discuss your project.</p>
            </div>
            <div className="w-full md:w-auto text-left md:text-right">
              <a
                href="https://wa.me/447836319635"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#25D366] text-white px-4 py-2 font-semibold w-full md:w-auto"
                aria-label="Chat on WhatsApp"
              >
                Chat on WhatsApp
              </a>
              <p className="mt-2 text-sm">or email us at <a href="mailto:info@enfoldedmedia.com" className="underline">info@enfoldedmedia.com</a></p>
            </div>
          </div>
          <div className="hidden md:block mt-4 text-right">
            <p className="text-xs text-foreground/70">Scan to chat on WhatsApp</p>
            <div className="inline-block rounded-md overflow-hidden mt-1">
              <img src="https://cdn.enfoldedmedia.com/enfolded-images/enfqr.png" alt="WhatsApp QR Code" className="w-24 h-24" />
            </div>
          </div>
        </section>

        {/* Page-level sign-off removed to avoid duplication with footer */}
      </main>

      <Footer />
    </div>
  );
};

export default About;
