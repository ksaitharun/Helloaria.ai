'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer'; // Adjust if your Footer is in /components

const TermsPage = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = React.useState(false);

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
            {/* Your existing terms content remains unchanged */}
            ...
          </div>
        </div>
      </div>

      <Footer 
        showPrivacyPolicy={showPrivacyPolicy}
        setShowPrivacyPolicy={setShowPrivacyPolicy}
      />
    </div>
  );
};

export default TermsPage;
