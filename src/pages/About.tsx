import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const html = `<!-- Enfolded Media — About Us (drop into an HTML block) -->
<section id="about-enfolded" aria-labelledby="about-heading" style="font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial;line-height:1.5;color:#111;">
  <div style="max-width:1100px;margin:0 auto;padding:48px 20px;">
    <!-- Hero -->
    <div style="display:flex;flex-wrap:wrap;gap:24px;align-items:center;">
      <div style="flex:1 1 420px;min-width:260px;">
        <h1 id="about-heading" style="font-size:clamp(24px,3.6vw,36px);margin:0 0 8px;">Modern Britain speaks more than English — and so should your business.</h1>
        <p style="margin:0 0 16px;font-size:16px;color:#333;">
          At <strong>Enfolded Media</strong> we recognise <em>language as a bridge to cultural affinity</em> — designing for impact and helping you reach new audiences in a multicultural Britain.
        </p>
        <p style="margin:0 0 20px;color:#444;">
          We create multilingual digital media that connects people, builds trust, and celebrates the diversity that defines modern Britain.
        </p>
        <p style="margin:0 0 20px;">
          <a href="/packages" style="display:inline-block;padding:10px 16px;border-radius:8px;background:#0b72ff;color:#fff;text-decoration:none;font-weight:600;margin-right:12px;">View Packages</a>
          <a href="#contact" style="display:inline-block;padding:10px 16px;border-radius:8px;border:1px solid #0b72ff;color:#0b72ff;text-decoration:none;font-weight:600;">Contact Us</a>
        </p>
      </div>

      <div style="flex:0 1 320px;min-width:240px;">
        <div style="background:#f7f9ff;border-radius:12px;padding:18px;border:1px solid #e6eefc;">
          <p style="margin:0;font-size:14px;color:#111;font-weight:700;">Why multilingual matters</p>
          <ul style="margin:10px 0 0;padding-left:18px;color:#333;font-size:14px;line-height:1.6;">
            <li><strong>1 in 6</strong> UK residents speak a language other than English at home</li>
            <li><strong>300+</strong> languages are spoken across the UK today</li>
            <li><strong>£78bn</strong> yearly revenue from ethnic minority businesses</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Who we are & Services -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:26px;margin-top:36px;">
      <article aria-labelledby="who-heading" style="padding:18px;">
        <h2 id="who-heading" style="margin:0 0 8px;font-size:20px;">Who we are</h2>
        <p style="margin:0;color:#333;">
          We’re a multicultural team of designers, translators and digital strategists passionate about inclusive communication. We blend creative design with cultural insight so your message lands — visually and emotionally.
        </p>
      </article>

      <article aria-labelledby="services-heading" style="padding:18px;">
        <h2 id="services-heading" style="margin:0 0 8px;font-size:20px;">What we do</h2>
        <ul style="margin:0;padding-left:18px;color:#333;line-height:1.6;">
          <li><strong>Brand Identity</strong> — logos, palettes and guidelines that resonate across cultures.</li>
          <li><strong>Digital Presence</strong> — websites, social and SEO built for multilingual audiences.</li>
          <li><strong>Translation & Localisation</strong> — professional translation with cultural insight.</li>
          <li><strong>Community Campaigns</strong> — accessible print and digital campaigns for local impact.</li>
        </ul>
        <p style="margin:12px 0 0;">
          <a href="#services" style="text-decoration:none;color:#0b72ff;font-weight:600;">Explore services →</a>
        </p>
      </article>
    </div>

    <!-- Promise & Impact -->
    <div style="display:flex;flex-wrap:wrap;gap:20px;margin-top:34px;align-items:stretch;">
      <div style="flex:1 1 360px;background:#fff;border-radius:12px;padding:18px;border:1px solid #eee;">
        <h3 style="margin:0 0 8px;font-size:18px;">Our promise</h3>
        <ul style="margin:0;padding-left:18px;color:#333;line-height:1.6;">
          <li><strong>Inclusive by design.</strong> Accessibility and representation in every project.</li>
          <li><strong>Authentically multilingual.</strong> Translation combined with cultural intelligence.</li>
          <li><strong>Driven by impact.</strong> Measurable growth and stronger community ties.</li>
        </ul>
      </div>

      <div style="flex:1 1 320px;background:#f9fff6;border-radius:12px;padding:18px;border:1px solid #e6f7e6;">
        <h3 style="margin:0 0 8px;font-size:18px;">Built for communities that matter</h3>
        <p style="margin:0;color:#333;">
          We support local businesses, schools & councils, community groups and healthcare providers to engage effectively with diverse audiences.
        </p>
      </div>
    </div>

    <!-- Testimonials -->
    <div style="margin-top:34px;">
      <h3 style="font-size:18px;margin:0 0 12px;">Real impact, real results</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;">
        <blockquote style="margin:0;padding:14px;border-radius:10px;background:#fff;border:1px solid #eee;">
          <p style="margin:0 0 8px;">“The multilingual design helped our neighbourhood restaurant reach previously unreachable demographics. Our business increased by 30%.”</p>
          <footer style="font-weight:600;color:#333;">— Sarah Chen, Restaurant Owner</footer>
        </blockquote>

        <blockquote style="margin:0;padding:14px;border-radius:10px;background:#fff;border:1px solid #eee;">
          <p style="margin:0 0 8px;">“Their translation services are exceptional for our community. They understand what works.”</p>
          <footer style="font-weight:600;color:#333;">— Ahmed Hassan, Community Centre Director</footer>
        </blockquote>

        <blockquote style="margin:0;padding:14px;border-radius:10px;background:#fff;border:1px solid #eee;">
          <p style="margin:0 0 8px;">“Professional, understanding and responsive. They got our message across.”</p>
          <footer style="font-weight:600;color:#333;">— Maya Patel, Charity Director</footer>
        </blockquote>
      </div>
    </div>

    <!-- CTA -->
    <div id="contact" style="margin-top:36px;padding:18px;border-radius:12px;background:linear-gradient(180deg,#f7fbff,#fff);border:1px solid #eef6ff;display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between;">
      <div>
        <h4 style="margin:0 0 6px;">Let's create together</h4>
        <p style="margin:0;color:#333;">Ready to reach new audiences? Contact us and we’ll discuss your project.</p>
      </div>
      <div style="text-align:right;min-width:220px;">
        <p style="margin:0 0 6px;font-weight:700;">📞 07836 319 635</p>
        <p style="margin:0 0 6px;">✉ info@enfoldedmedia.com</p>
        <p style="margin:6px 0 0;"><a href="https://wa.me/447836319635" style="text-decoration:none;background:#25D366;color:#fff;padding:8px 12px;border-radius:8px;display:inline-block;font-weight:600;">Chat on WhatsApp</a></p>
      </div>
    </div>

    <footer style="margin-top:26px;font-size:13px;color:#666;text-align:center;">
      <p style="margin:6px 0 0;">Enfolded Media — Multilingual. Impactful. Designed for your audience.</p>
      <p style="margin:6px 0 0;">© 2025 Enfolded Media. All rights reserved.</p>
    </footer>
  </div>
</section>`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-8">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <Footer />
    </div>
  );
};

export default About;
