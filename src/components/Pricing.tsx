import React, { useState, useEffect } from 'react';
import { Bell, Zap, CheckCircle, MessageSquare, Calendar, FileImage, Mic, Users, Brain, Plane, ListTodo } from 'lucide-react';
import { getCountry, formatPrice, generateWhatsAppLink, getTimezone } from '../lib/utils';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface PricingProps {
  isVisible: boolean;
  handleRipple: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pricing: React.FC<PricingProps> = ({ isVisible, handleRipple }) => {
  const router = useRouter();
  const [country, setCountry] = useState('IN');
  const [isYearly, setIsYearly] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    const detectCountry = async () => {
      const detectedCountry = await getCountry();
      setCountry(detectedCountry);
    };
    detectCountry();

    const initWhatsAppLink = async () => {
      const timezone = await getTimezone();
      setWhatsappLink(generateWhatsAppLink(timezone));
    };
    initWhatsAppLink();
  }, []);

  const getPrice = (basePrice: number) => {
    const yearlyDiscount = 0.3; // 30% discount
    const price = country === 'IN' ? basePrice : (basePrice / 40); // Convert INR to USD roughly
    return isYearly ? price * 12 * (1 - yearlyDiscount) : price;
  };

  const formatPriceDisplay = (price: number) => {
    const symbol = country === 'IN' ? '₹' : '$';
    const formattedPrice = Math.round(price);
    return `${symbol}${formattedPrice}${isYearly ? '/yr' : '/mo'}`;
  };

  const handleBasicPlan = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRipple(e);
    window.open(whatsappLink, '_blank');
  };

  const handleProPlan = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRipple(e);
    router.push('/signin');
  };

  const basicPrice = getPrice(89);
  const proPrice = getPrice(129);

  return (
    <div id="pricing" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Simple Pricing
          </h2>
          
          {/* Pricing Toggle */}
          <div className="inline-flex items-center bg-black/20 backdrop-blur-sm rounded-full p-1 border border-white/5">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly 
                  ? 'bg-white/10 text-white shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isYearly 
                  ? 'bg-white/10 text-white shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-1 text-xs font-normal text-emerald-400">Save 30%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-black/50 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">
                  <Bell className="w-8 h-8 text-white/80" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                Basic Plan
              </h3>
              <div className="flex justify-center items-baseline mb-8">
                <span className="text-5xl font-bold text-white">
                  {formatPriceDisplay(basicPrice)}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-gray-400" />
                    Unlimited messages
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <Bell className="w-4 h-4 mr-2 text-gray-400" />
                    Unlimited one-time reminders
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span>100+ languages supported</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <Mic className="w-4 h-4 mr-2 text-gray-400" />
                    5 Voice Notes / Month
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <FileImage className="w-4 h-4 mr-2 text-gray-400" />
                    5 Image Analysis / Month
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    Receive reminders from friends
                  </span>
                </li>
              </ul>
              <button
                onClick={handleBasicPlan}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-black/50 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white/80" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                Pro Plan
              </h3>
              <div className="flex justify-center items-baseline mb-8">
                <span className="text-5xl font-bold text-white">
                  {formatPriceDisplay(proPrice)}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span>Everything in Basic, plus:</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    Repeat reminders
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span>Drive, Calendar and Gmail integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <Mic className="w-4 h-4 mr-2 text-gray-400" />
                    100 Voice Notes / Month
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <FileImage className="w-4 h-4 mr-2 text-gray-400" />
                    20 Image Analysis / Month
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    Send/Receive reminders with friends
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <Brain className="w-4 h-4 mr-2 text-gray-400" />
                    AI Memory
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <Plane className="w-4 h-4 mr-2 text-gray-400" />
                    Flight status
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  <span className="flex items-center">
                    <ListTodo className="w-4 h-4 mr-2 text-gray-400" />
                    Create & Manage Lists
                  </span>
                </li>
              </ul>
              <button
                onClick={handleProPlan}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Upgrade to Pro
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle background effects */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </div>
  );
};

export default Pricing;