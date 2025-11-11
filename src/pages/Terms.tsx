import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmailLink from '@/components/EmailLink';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-stone mx-auto max-w-4xl dark:prose-invert">
          <h1>Enfolded Media — Terms of Service</h1>
          <p><strong>Last updated: October 17, 2025</strong></p>

          <p>Welcome to Enfolded Media (“we,” “us,” or “our”).<br />
          By using our website enfoldedmedia.com or purchasing our services, you agree to the following Terms of Service. Please read them carefully.</p>

          <h2>1. About Us</h2>
          <p>Enfolded Media is a digital media agency offering multilingual website design, creative content, and related digital services. These Terms apply to all visitors, clients, and anyone accessing or using our website or services.</p>

          <h2>2. Services</h2>
          <p>We provide professional website design and related digital media packages. All descriptions and pricing are listed on our website and may change at any time without notice.</p>

          <h2>3. Payments</h2>
          <ul>
            <li>All payments are securely processed through Stripe.</li>
            <li>We do not collect or store your credit or debit card details — Stripe handles all payment information in accordance with their own privacy and security policies.</li>
            <li>By purchasing a package, you also agree to Stripe’s Terms of Service.</li>
          </ul>

          <h2>4. Refunds and Revisions</h2>
          <ul>
            <li>Due to the digital and creative nature of our work, all completed projects and purchased packages are non-refundable.</li>
            <li>We aim for client satisfaction and may offer reasonable revisions if the delivered work does not meet agreed-upon specifications.</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <ul>
            <li>All materials, designs, and content created by Enfolded Media remain our property until full payment is received.</li>
            <li>Once payment is completed, you receive the rights or license to use the delivered work as specified in your project agreement.</li>
            <li>You may not resell, redistribute, or claim authorship of our designs without written permission.</li>
          </ul>

          <h2>6. Client Responsibilities</h2>
          <p>You agree to provide accurate and complete information required for project completion. Enfolded Media is not responsible for delays or issues resulting from missing assets, incorrect details, or lack of communication.</p>

          <h2>7. Third-Party Services</h2>
          <p>Our website is hosted on Cloudflare, which provides performance, optimization, and security services.</p>
          <p>Payments are processed by Stripe, and we may also use other third-party tools for analytics or communication.</p>
          <p>We are not responsible for any issues, errors, or data handling by these providers, but we select reputable services to protect our users’ data.</p>

          <h2>8. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Enfolded Media shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities resulting from the use of our website or services.</p>

          <h2>9. Changes to Terms</h2>
          <p>We may update these Terms of Service from time to time. Any changes will be posted on this page with a new “last updated” date. Continued use of our website after updates means you accept the revised terms.</p>

          <h2>10. Contact Us</h2>
          <p>For any questions about these Terms of Service, please contact us at:</p>
          <p>
            <EmailLink email="info@enfoldedmedia.com" /><br />
            <a
              href="https://enfoldedmedia.com"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              enfoldedmedia.com
            </a>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
