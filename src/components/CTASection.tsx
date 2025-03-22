import React, { useEffect, useState } from 'react';
import ariaIcon from '../assets/aria-icon.svg';
import { getTimezone, generateWhatsAppLink } from '../lib/utils';

interface CTASectionProps {
  isVisible: boolean;
  handleRipple: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ isVisible, handleRipple }) => {
  const [whatsappLink, setWhatsappLink] = useState('https://wa.me/917075471676');

  useEffect(() => {
    const initWhatsAppLink = async () => {
      const timezone = await getTimezone();
      setWhatsappLink(generateWhatsAppLink(timezone));
    };
    initWhatsAppLink();
  }, []);

  const handleTryAriaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRipple(e);
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="futuristic-line"
            style={{
              top: `${i * 10}%`,
              left: '-100%',
              right: '-100%',
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-5xl font-bold mb-8 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Ready to Transform Your Productivity?
          </h2>
          <p className={`text-xl text-gray-300 mb-12 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Join thousands of users who have already simplified their daily tasks with Hello Aria
          </p>
          <div className={`${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <button
              onClick={handleTryAriaClick}
              className="cta-button group"
            >
              <span className="cta-text inline-flex items-center transition-transform duration-300">
                <img src={ariaIcon} alt="Aria Icon" className="w-6 h-6 mr-3" />
                Try Hello Aria Now
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
    </div>
  );
};

export default CTASection;