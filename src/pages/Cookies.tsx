import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmailLink from '@/components/EmailLink';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-stone mx-auto max-w-4xl dark:prose-invert">
          <h1>Enfolded Media — Cookies Policy</h1>
          <p><strong>Last updated: October 17, 2025</strong></p>

          <p>This Cookies Policy explains how Enfolded Media (“we,” “us,” or “our”) uses cookies and similar technologies on enfoldedmedia.com.</p>

          <h2>1. What Are Cookies?</h2>
          <p>Cookies are small text files that are stored on your device when you visit a website. They help improve performance, security, and user experience.</p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>

          <h3>Essential Cookies</h3>
          <p>Used by Cloudflare to ensure our website is fast, secure, and reliable. These cookies are required for basic site functionality and cannot be turned off.</p>

          <h3>Analytics Cookies</h3>
          <p>If we use analytics tools (like Google Analytics), these cookies help us understand how visitors use our site so we can improve our content and design.</p>

          <h3>Payment Cookies</h3>
          <p>Used by Stripe to securely process transactions and detect fraud during checkout.</p>

          <p>We do not use cookies for advertising or tracking across other websites.</p>

          <h2>3. Managing Cookies</h2>
          <p>You can control or delete cookies at any time through your browser settings. However, disabling certain cookies (especially essential ones) may affect how parts of our site function.</p>

          <h2>4. Updates to This Policy</h2>
          <p>We may update this Cookies Policy to reflect changes in technology or regulation. Updates will be posted on this page with a revised “last updated” date.</p>

          <h2>5. Contact Us</h2>
          <p>If you have any questions about our Cookies Policy, you can reach us at:<br />
          <EmailLink email="info@enfoldedmedia.com" /></p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
