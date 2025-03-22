'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/Footer'

export default function Terms() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <div className="text-sm text-gray-400 mb-12">Effective Date: March 14, 2024</div>

          <div className="prose prose-invert max-w-none">
            <h2>Welcome to ARIA</h2>
            <p>
              Welcome to ARIA, an AI-powered WhatsApp chatbot service operated by Realityrift Innovations Pvt. Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). 
              By accessing or using ARIA, you agree to these Terms of Service (&quot;Terms&quot;) and our Privacy Policy. 
              If you do not agree, you may not use ARIA.
            </p>

            <h3>Acceptance of Terms</h3>
            <p>By using ARIA, you acknowledge that:</p>
            <ul>
              <li>You have read, understood, and agree to these Terms</li>
              <li>You are at least 18 years old or have parental consent if under 18</li>
              <li>You are legally permitted to use our services</li>
            </ul>

            <h3>Description of Service</h3>
            <p>ARIA is an AI chatbot operating on WhatsApp, designed to assist with:</p>
            <ul>
              <li>Setting reminders</li>
              <li>Managing tasks</li>
              <li>Processing OCR-based inputs</li>
              <li>Other productivity-based functions</li>
            </ul>

            <h3>Free Trial &amp; Paid Subscription</h3>
            <ul>
              <li>New users are eligible for a 7-day free trial of premium features</li>
              <li>After the trial period, continued access requires a paid subscription</li>
              <li>Users can upgrade, downgrade, or cancel their subscription at any time</li>
            </ul>

            <h3>User Accounts &amp; Registration</h3>
            <p>To use ARIA, you must have:</p>
            <ul>
              <li>A valid WhatsApp account (your ARIA account is tied to your WhatsApp number)</li>
              <li>If subscribing to a paid plan, you may need to link an email address for billing purposes</li>
            </ul>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 my-6">
              <h4 className="text-red-400 mt-0">Account Transfers:</h4>
              <p className="mb-0">
                We do not support transferring accounts across phone numbers or emails. If your WhatsApp number is deactivated or reassigned, 
                your ARIA account and data will be automatically deleted.
              </p>
            </div>

            <h3>Acceptable Use Policy</h3>
            <p>By using ARIA, you agree to:</p>
            <ul>
              <li>Use ARIA for lawful purposes only</li>
              <li>Follow WhatsApp&apos;s Terms of Service and Community Standards</li>
              <li>Avoid any actions that may harm ARIA or its users</li>
            </ul>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 my-6">
              <h4 className="text-red-400 mt-0">You MUST NOT:</h4>
              <ul className="mb-0">
                <li>Use ARIA for spam, fraud, or illegal activities</li>
                <li>Attempt to hack, reverse-engineer, or manipulate the chatbot</li>
                <li>Send harmful, abusive, defamatory, or misleading content</li>
                <li>Attempt to bypass security measures or extract proprietary data</li>
              </ul>
            </div>

            <p>Failure to comply may result in immediate suspension or termination of your access to ARIA.</p>

            <h3>Data Privacy &amp; Security</h3>
            <p>Your privacy is important to us. Please refer to our Privacy Policy for full details.</p>
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4 my-6">
              <h4 className="text-indigo-400 mt-0">Key Privacy Commitments:</h4>
              <ul className="mb-0">
                <li>We do not store message content due to WhatsApp&apos;s end-to-end encryption</li>
                <li>We collect only minimal metadata (e.g., phone number, usage patterns)</li>
                <li>We do not sell or share personal data with third parties for marketing purposes</li>
                <li>Data is stored securely and used only to improve service performance</li>
              </ul>
            </div>

            <h3>Contact Information &amp; Support</h3>
            <p>For support, concerns, or legal inquiries, contact:</p>
            <p className="text-indigo-400">info@realityrift.co</p>

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
