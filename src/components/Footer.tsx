import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getTimezone, generateWhatsAppLink } from '../lib/utils';

interface FooterProps {
  showPrivacyPolicy: boolean;
  setShowPrivacyPolicy: (show: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ showPrivacyPolicy, setShowPrivacyPolicy }) => {
  const [whatsappLink, setWhatsappLink] = useState('https://wa.me/917075471676');

  useEffect(() => {
    const initWhatsAppLink = async () => {
      const timezone = await getTimezone();
      setWhatsappLink(generateWhatsAppLink(timezone));
    };
    initWhatsAppLink();
  }, []);

  return (
    <footer className="relative py-16 overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Image 
                src="/assets/header-logo.svg" 
                alt="Hello Aria" 
                width={120}
                height={32}
                className="h-8"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link group relative"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-6 h-6 text-[#25D366] transition-all duration-300 group-hover:scale-110" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#25D366] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Chat Now
              </span>
            </a>
            <a 
              href="https://x.com/helloaria_ai?s=11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link group"
              aria-label="Follow on X (Twitter)"
            >
              <svg className="w-6 h-6 text-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/helloaria.in?igsh=MXhkZDViZzZ0Y2FoOQ%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link group"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-6 h-6 text-[#E4405F] transition-all duration-300 group-hover:scale-110" />
            </a>
            <a 
              href="https://www.linkedin.com/company/hello-aria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link group"
              aria-label="Follow on LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-[#0A66C2] transition-all duration-300 group-hover:scale-110" />
            </a>
          </div>

          {/* Links */}
          <div className="text-center md:text-right space-y-2">
            <div className="flex items-center justify-center md:justify-end space-x-4">
              <Link 
                href="/privacy-policy"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              >
                Terms
              </Link>
              <Link 
                href="/faq"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              >
                FAQ
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Hello Aria. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30" />
    </footer>
  );
};

export default Footer;
