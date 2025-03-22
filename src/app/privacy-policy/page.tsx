'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <div className="text-sm text-gray-400 mb-12">Effective Date: March 14, 2024</div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl">Your privacy matters to us. This policy outlines how we handle your data with transparency and care.</p>

            <h2>Introduction</h2>
            <p>
              Welcome to ARIA, the WhatsApp AI chatbot service provided by Realityrift Innovations Pvt. Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). 
              We value your privacy and are committed to protecting your personal information.
            </p>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4 my-6">
              <h3 className="text-indigo-400 mt-0">Key Privacy Assurance:</h3>
              <ul className="mb-0">
                <li>End-to-End Encryption: We do not store or process the content of your messages (text, images, or files) as they are secured by WhatsApp&apos;s end-to-end encryption.</li>
                <li>India-Focused Compliance: This Privacy Policy applies primarily to users in India under the Digital Personal Data Protection (DPDP) Act, 2023.</li>
                <li>International Users: If you are located outside India, your data may be transferred to India. We are actively working on compliance with GDPR (EU) and other applicable regulations.</li>
              </ul>
            </div>

            <h2>Data We Collect</h2>
            <p>We collect only essential data to provide and improve ARIA.</p>

            <h3>A. Information You Provide</h3>
            <ul>
              <li>Account Information: Your mobile phone number, name, and profile details (if voluntarily shared)</li>
              <li>User Preferences: Any settings or preferences you configure within ARIA</li>
            </ul>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 my-6">
              <h4 className="text-red-400 mt-0">We DO NOT collect:</h4>
              <ul className="mb-0">
                <li>The content of your messages, images, files, or chats (secured by WhatsApp encryption)</li>
                <li>Sensitive Personal Data (e.g., financial details, medical records, passwords)</li>
              </ul>
            </div>

            <h3>B. Information Collected Automatically</h3>
            <ul>
              <li>Device Data: Your device type, operating system, browser, language settings, and time zone</li>
              <li>Usage Data: Frequency of use, duration of sessions, and interaction metadata</li>
              <li>Log Data: IP address, timestamps, and system errors</li>
              <li>Cookies &amp; Analytics: We may use cookies and similar technologies to enhance user experience (you can manage these through your device settings)</li>
            </ul>

            <h3>C. Information from Third Parties</h3>
            <p>If you log in using a third-party account (Google, Apple, etc.), we may receive:</p>
            <ul>
              <li>Profile Information: Name, email, profile picture (as per your privacy settings)</li>
              <li>Usage Insights: Engagement patterns and activity data</li>
            </ul>

            <h2>How We Use Your Data</h2>
            <p>We use your information strictly for the following purposes:</p>
            <ul>
              <li>✅ Service Delivery: To operate, personalize, and enhance ARIA</li>
              <li>✅ Communication: To send responses, updates, and essential notifications</li>
              <li>✅ Security &amp; Fraud Prevention: To verify identities and prevent unauthorized access</li>
              <li>✅ Analytics &amp; Service Improvement: To analyze trends and optimize ARIA&apos;s performance</li>
              <li>✅ Legal Compliance: To adhere to regulatory requirements</li>
            </ul>
            <p>No Spam Policy: We do not send promotional messages without your explicit consent.</p>

            <h2>Data Sharing &amp; Disclosure</h2>
            <p>Your personal data is never sold or shared for marketing. We disclose data only in these cases:</p>

            <h3>A. With Trusted Service Providers</h3>
            <p>We may share data with third-party hosting, analytics, or security providers, ensuring:</p>
            <ul>
              <li>✔ Confidentiality agreements are in place</li>
              <li>✔ Data is used solely for service enhancement</li>
            </ul>

            <h3>B. When Required by Law</h3>
            <p>We may disclose data to government authorities if:</p>
            <ul>
              <li>⚖ Legally mandated (court orders, regulatory compliance)</li>
              <li>⚖ To protect users, prevent fraud, or enforce legal rights</li>
            </ul>

            <h2>Data Security Measures</h2>
            <ul>
              <li>🔒 Encryption: Data is encrypted at rest and in transit</li>
              <li>🔒 Access Controls: Only authorized personnel can access stored data</li>
              <li>🔒 Regular Audits: Security systems are periodically reviewed and updated</li>
              <li>🔒 Incident Response: A dedicated team monitors for potential breaches</li>
            </ul>
            <p>Despite these measures, no system is 100% secure. If you suspect unauthorized access, contact us immediately.</p>

            <h2>Your Privacy Rights</h2>
            <p>Under Indian and international privacy laws, you have the right to:</p>
            <ul>
              <li>✔ Access &amp; Correct Your Data – Request details of the data we hold</li>
              <li>✔ Delete Your Data – Ask us to remove your information</li>
              <li>✔ Withdraw Consent – Opt out of data collection (may limit functionality)</li>
              <li>✔ Restrict Processing – Control how we use your data</li>
              <li>✔ Lodge Complaints – Contact the relevant data authority if needed</li>
            </ul>
            <p>To exercise these rights, email us at <span className="text-indigo-400">privacy@realityrift.co</span></p>

            <h2>Contact &amp; Grievance Redressal</h2>
            <p>If you have questions or concerns, reach out to our Grievance Officer:</p>
            <p className="text-indigo-400">📩 Email: info@realityrift.co</p>

            <div className="mt-12 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400">© 2025 Realityrift Innovations Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer 
        showPrivacyPolicy={showPrivacyPolicy}
        setShowPrivacyPolicy={setShowPrivacyPolicy}
      />
    </div>
  );
}
