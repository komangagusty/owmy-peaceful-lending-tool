import React from 'react';
import { TranslationProvider } from '../context/TranslationContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <TranslationProvider initialLanguage="en">
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <p className="mb-4">Last updated: July 1, 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using OWWY services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access or use our services.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Services</h2>
            <p>OWWY provides a platform for peer-to-peer lending and financial services. Our services are designed to connect borrowers with potential lenders in a secure environment. We do not directly lend money but facilitate the process between users.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p>To access certain features of our services, you must register for an account. You agree to provide accurate and complete information when creating an account and to keep this information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. User Conduct</h2>
            <p>When using our services, you agree not to:</p>
            <ul className="list-disc pl-8 mb-6">
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate any person or entity</li>
              <li>Engage in fraudulent activities</li>
              <li>Distribute malware or other harmful content</li>
              <li>Interfere with or disrupt our services</li>
              <li>Collect or store personal data about other users without their consent</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Financial Transactions</h2>
            <p>All financial transactions conducted through our platform are subject to verification and approval. We reserve the right to refuse or cancel any transaction that we suspect may be fraudulent or illegal. Users are responsible for ensuring they have the necessary funds or credit available for any transaction they initiate.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
            <p>All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by OWWY and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our explicit permission.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, OWWY shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, resulting from your access to or use of our services.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Termination</h2>
            <p>We reserve the right to suspend or terminate your account and access to our services at any time for any reason, including but not limited to a violation of these Terms of Service.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at: <a href="mailto:team@owwy.app" className="text-owwy-primary hover:underline">team@owwy.app</a></p>
          </div>
        </div>
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default TermsOfService;