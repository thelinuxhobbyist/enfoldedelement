import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmailLink from '@/components/EmailLink';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-stone mx-auto max-w-4xl dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p><strong>Effective Date: 9 August 2025</strong></p>

          <p>At Enfolded Media (“we”, “our”, “us”), accessible at https://enfoldedmedia.com, we are committed to protecting your personal data and respecting your privacy in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

          <p>This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our website or purchase our services.</p>

          <h2>1. Who We Are</h2>
          <p>Enfolded Media is a UK-based digital service provider offering website design and related services.</p>
          <p>Website: https://enfoldedmedia.com</p>
          <p>Email: info@enfoldedmedia.com</p>

          <h2>2. What Information We Collect</h2>
          <ul>
            <li>Identity Data – name, company name (if applicable)</li>
            <li>Contact Data – email address, phone number</li>
            <li>Transaction Data – details of the services you purchase from us</li>
            <li>Technical Data – IP address, browser type, device information, time zone, location, etc.</li>
            <li>Usage Data – information about how you use our website</li>
          </ul>
          <p>We do not collect or store your payment card details. All payments are securely processed via Stripe.</p>

          <h2>3. How We Collect Your Information</h2>
          <ul>
            <li>Fill out a contact form</li>
            <li>Purchase a service</li>
            <li>Communicate with us via email</li>
            <li>Browse our website (via cookies and analytics tools)</li>
          </ul>

          <h2>4. How We Use Your Information</h2>
          <ul>
            <li>Deliver the services you’ve requested</li>
            <li>Process payments and issue invoices</li>
            <li>Communicate with you about your order or enquiries</li>
            <li>Improve and optimise our website</li>
            <li>Comply with legal or regulatory obligations</li>
          </ul>

          <h2>5. Lawful Basis for Processing</h2>
          <ul>
            <li>Contractual necessity – to fulfil our agreement with you</li>
            <li>Consent – where you have given clear permission (e.g., for marketing emails)</li>
            <li>Legitimate interest – to improve our services or respond to your enquiries</li>
            <li>Legal obligation – to comply with UK law</li>
          </ul>

          <h2>6. Sharing Your Data</h2>
          <p>We may share your information with trusted third-party service providers only when necessary, such as:</p>
          <ul>
            <li>Stripe – for secure payment processing (Stripe Privacy Policy)</li>
            <li>Website hosting and analytics providers</li>
            <li>Professional advisors (e.g., accountants, legal consultants)</li>
          </ul>
          <p>We do not sell, rent, or trade your personal data.</p>

          <h2>7. International Transfers</h2>
          <p>Some of our third-party service providers (e.g., Stripe) may transfer or store data outside the UK. We ensure these transfers are protected with appropriate legal safeguards, such as adequacy decisions or Standard Contractual Clauses (SCCs).</p>

          <h2>8. Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal data from loss, misuse, unauthorised access, or disclosure. However, no internet transmission is ever fully secure.</p>

          <h2>9. Data Retention</h2>
          <p>We retain personal data only as long as necessary for:</p>
          <ul>
            <li>Fulfilling our contractual and legal obligations</li>
            <li>Resolving disputes and enforcing agreements</li>
            <li>Complying with tax or accounting laws</li>
          </ul>
          <p>After this period, your data will be securely deleted or anonymised.</p>

          <h2>10. Your Rights Under UK GDPR</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of incorrect data</li>
            <li>Request deletion (“right to be forgotten”)</li>
            <li>Object to or restrict certain processing activities</li>
            <li>Withdraw consent (where applicable)</li>
            <li>Lodge a complaint with the UK Information Commissioner’s Office (ICO): https://ico.org.uk</li>
          </ul>
          <p>To exercise your rights, email us at: info@enfoldedmedia.com</p>

          <h2>11. Cookies</h2>
          <p>We use cookies and similar technologies to enhance user experience and analyse site traffic. You can control cookie settings via your browser.</p>
          <p>See our Cookie Policy for more details. (If you don’t have a separate cookie policy, this section can be kept brief or removed.)</p>

          <h2>12. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.</p>

          <h2>13. Contact Us</h2>
          <p>If you have questions or concerns about this policy or your data, please contact us:</p>
          <p>
            Enfolded Media<br />
            <EmailLink email="info@enfoldedmedia.com" /><br />
            Website: https://enfoldedmedia.com
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
