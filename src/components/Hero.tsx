import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getTimezone, generateWhatsAppLink } from '../lib/utils';

interface HeroProps {
  isVisible: boolean;
  handleRipple: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Message {
  id: number;
  text: string[];
  position: 'left' | 'right';
  delay: number;
}

const Hero: React.FC<HeroProps> = ({ isVisible, handleRipple }) => {
  const [whatsappLink, setWhatsappLink] = useState('https://wa.me/917075471676');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [messages, setMessages] = useState<Message[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);

  const messagesList: Message[] = [
    { 
      id: 1, 
      text: [
        "Hi, I'm Aria! Pleased to meet you!",
      ], 
      position: 'right', 
      delay: 1000 
    },
    { 
      id: 2, 
      text: ["Scroll down to learn more about me!"], 
      position: 'left', 
      delay: 3000 
    }
  ];

  useEffect(() => {
    const initWhatsAppLink = async () => {
      const timezone = await getTimezone();
      setWhatsappLink(generateWhatsAppLink(timezone));
    };
    initWhatsAppLink();

    messagesList.forEach((message) => {
      setTimeout(() => {
        setMessages(prev => [...prev, message]);
      }, message.delay);
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 25;
        setMousePosition({ x, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleTryAriaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRipple(e);
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          {/* Animated Logo with Messages */}
          <div 
            ref={logoRef}
            className="relative w-full max-w-[20rem] h-48 mx-auto mb-8 group"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Enhanced Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-rose-600 rounded-full opacity-50 blur-3xl group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-blue-600 rounded-full opacity-50 blur-3xl group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow" style={{ animationDelay: '1s' }} />
            
            {/* Logo */}
            <div className="relative flex items-center justify-center h-full">
              <Image 
                src="/assets/header-logo.svg"
                alt="Hello Aria"
                width={200}
                height={48}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Animated Message Bubbles */}
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                    className={`absolute hidden md:block ${
                      message.position === 'left' 
                        ? '-left-96 top-1/4' 
                        : '-right-96 top-1/4'
                    } w-80`}
                  >
                    <div className={`relative ${
                      message.position === 'left'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                        : 'bg-gradient-to-r from-rose-500 to-rose-600'
                    } rounded-2xl p-4 text-white text-lg font-medium shadow-xl`}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="space-y-2"
                      >
                        {message.text.map((line, index) => (
                          <div key={index}>{line}</div>
                        ))}
                      </motion.div>
                      <div className={`absolute w-4 h-4 transform rotate-45 ${
                        message.position === 'left'
                          ? '-right-2 top-1/2 -translate-y-1/2 bg-blue-500'
                          : '-left-2 top-1/2 -translate-y-1/2 bg-rose-500'
                      }`} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-4 px-4 md:px-0">
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-rose-400 leading-tight">
              Your AI-powered Calendar Assistant
            </h1>
            <p className="text-lg md:text-2xl text-blue-100/80 max-w-3xl mx-auto mb-8">
              Manage your tasks, set reminders, and integrate with your favorite apps—all in WhatsApp.
            </p>
            
            <button
              onClick={handleTryAriaClick}
              className="group relative inline-flex mx-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-rose-600 rounded-full opacity-70 blur group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
              
              <div className="relative px-6 md:px-10 py-4 md:py-5 bg-black rounded-full border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
                <span className="flex items-center text-lg md:text-xl font-semibold">
                  <Image 
                    src="/assets/aria-icon.svg"
                    alt="Aria Icon"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6 mr-3"
                  />
                  <span className="bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                    Try Hello Aria
                  </span>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;