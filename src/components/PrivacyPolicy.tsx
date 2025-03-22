'use client'

import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  showPrivacyPolicy: boolean;
  setShowPrivacyPolicy: (show: boolean) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ showPrivacyPolicy, setShowPrivacyPolicy }) => {
  if (!showPrivacyPolicy) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-indigo-500/30 relative">
        <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-gray-900 z-10">
          <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
          <button 
            onClick={() => setShowPrivacyPolicy(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400">Effective Date: March 14, 2024</p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Privacy Policy for ARIA</h3>
            <p>Your privacy matters to us. This policy outlines how we handle your data with transparency and care.</p>

            <h4 className="text-lg font-semibold mt-6 mb-4">Introduction</h4>
            <p>
              Welcome to ARIA, the WhatsApp AI chatbot service provided by Realityrift Innovations Pvt. Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). 
              We value your privacy and are committed to protecting your personal information.
            </p>

            <h4 className="text-lg font-semibold mt-6 mb-4">Key Privacy Assurance</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-End Encryption: We do not store or process the content of your messages.</li>
              <li>India-Focused Compliance: This Privacy Policy applies primarily to users in India under the DPDP Act, 2023.</li>
              <li>International Users: Your data may be transferred to India.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-4">Data We Collect</h4>
            <p>We collect only essential data to provide and improve ARIA:</p>

            <h5 className="text-md font-semibold mt-4 mb-2">A. Information You Provide</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account Information: Mobile number, name, profile details</li>
              <li>User Preferences: Settings within ARIA</li>
            </ul>

            <h5 className="text-md font-semibold mt-4 mb-2">B. Information Collected Automatically</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device Data: Device type, OS, browser</li>
              <li>Usage Data: Usage frequency and patterns</li>
              <li>Log Data: IP address and system errors</li>
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-4">Contact &amp; Support</h4>
            <p>For questions or concerns, contact us at:</p>
            <p className="text-indigo-400">info@realityrift.co</p>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400">© 2025 Realityrift Innovations Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
