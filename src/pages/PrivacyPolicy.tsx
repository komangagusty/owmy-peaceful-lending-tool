import React from 'react';
import { TranslationProvider } from '../context/TranslationContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <TranslationProvider initialLanguage="en">
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="mb-4">Last updated: July 1 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>At OWWY, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application and services.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-8 mb-6">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Financial information necessary for facilitating loans</li>
              <li>Usage data and interaction with our platform</li>
              <li>Device and technical information</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-8 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and manage user accounts</li>
              <li>Send notifications related to your account and activities</li>
              <li>Respond to your comments and questions</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
            <ul className="list-disc pl-8 mb-6">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate or incomplete data</li>
              <li>Deletion of your personal data</li>
              <li>Restriction or objection to certain processing activities</li>
              <li>Data portability</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:team@owwy.app" className="text-owwy-primary hover:underline">team@owwy.app</a></p>
          </div>
        </div>
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default PrivacyPolicy;