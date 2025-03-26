import React, { useState, useEffect, useRef } from 'react';
import { getTimezone, generateWhatsAppLink } from '../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GoogleDriveIcon, GoogleCalendarIcon, GmailIcon } from './GoogleIcons';
import ChatAnimation from './ChatAnimation';
import Image from 'next/image';

interface AppleCTAProps {
  handleRipple: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const notifications = [
  {
    id: 1,
    icon: <Image src="/assets/aria-icon.svg" alt="" width={16} height={16} />,
    title: "Hello Aria",
    message: "Hey, Mark has reminded you to share the doc",
    time: "5m ago"
  },
  {
    id: 2,
    icon: <Image src="/assets/aria-icon.svg" alt="" width={16} height={16} />,
    title: "Hello Aria",
    message: "You have 3 more tasks to complete for today!",
    time: "8m ago"
  },
  {
    id: 3,
    icon: <Image src="/assets/aria-icon.svg" alt="" width={16} height={16} />,
    title: "Hello Aria",
    message: "Don't forget your meeting with Alex today at 3pm",
    time: "23m ago"
  }
];

const AppleCTA: React.FC<AppleCTAProps> = ({ handleRipple }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [whatsappLink, setWhatsappLink] = useState("https://wa.me/917075471676");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWhatsAppLink = async () => {
      const timezone = await getTimezone();
      setWhatsappLink(generateWhatsAppLink(timezone));
    };
    initWhatsAppLink();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        let progress = 1 - (sectionTop / windowHeight);
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTryAriaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRipple(e);
    window.open(whatsappLink, '_blank');
  };

  const getTransform = () => {
    const scale = 1 + (scrollProgress * 0.2);
    const rotate = -20 + (scrollProgress * 20);
    return `translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg)`;
  };

  return (
    <div
      ref={sectionRef}
      className="relative h-full min-h-screen py-64 overflow-hidden bg-black md:py-96"
      style={{ perspective: '1000px' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-rose-500/5" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-rose-500/5"
            style={{
              transform: `rotate(${120 * i}deg)`,
              animation: `pulse ${6 + i}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Left Side Widgets */}
      <div
        className="absolute left-[5%] top-1/2 transform -translate-y-1/2 space-y-4 md:space-y-6 hidden md:block"
        style={{
          transform: `translate(0%, -50%) translateX(${scrollProgress * 50}px)`,
          opacity: scrollProgress
        }}
      >
        {/* Google Drive Widget */}
        <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20 w-[300px] transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group">
          <div className="flex items-center mb-6 space-x-4">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
              <GoogleDriveIcon />
            </div>
            <div>
              <h3 className="font-medium text-white">Google Drive</h3>
              <p className="text-sm text-gray-400">Access your files</p>
            </div>
          </div>
          <button className="w-full py-2 font-medium text-white transition-transform rounded-lg bg-gradient-to-r from-blue-400 to-rose-400 hover:scale-105">
            Connect Drive
          </button>
        </div>

        {/* Google Calendar Widget */}
        <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20 w-[300px] transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                <GoogleCalendarIcon />
              </div>
              <span className="font-medium text-white">Google Calendar</span>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 transition-colors rounded hover:bg-white/10">
                <ChevronLeft className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-1 transition-colors rounded hover:bg-white/10">
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
          <button className="w-full py-2 mb-4 font-medium text-white transition-transform rounded-lg bg-gradient-to-r from-rose-400 to-blue-400 hover:scale-105">
            Connect Calendar
          </button>
        </div>

        {/* Gmail Widget */}
        <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20 w-[300px] transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group">
          <div className="flex items-center mb-6 space-x-4">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
              <GmailIcon />
            </div>
            <div>
              <h3 className="font-medium text-white">Gmail</h3>
              <p className="text-sm text-gray-400">Manage your emails</p>
            </div>
          </div>
          <button className="w-full py-2 font-medium text-white transition-transform rounded-lg bg-gradient-to-r from-blue-400 to-rose-400 hover:scale-105">
            Connect Gmail
          </button>
        </div>
      </div>

      {/* Right Side Content */}
      <div
        className="absolute right-[5%] top-1/2 transform -translate-y-1/2 space-y-4 w-[300px] hidden md:block"
        style={{
          transform: `translate(0%, -50%) translateX(${-scrollProgress * 50}px)`,
          opacity: scrollProgress
        }}
      >
        {/* Notifications */}
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 transition-all duration-300 border bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl border-blue-500/20 hover:border-blue-500/40 hover:-translate-y-1 group"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-rose-400">
                  {notification.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <p className="text-sm font-medium text-white transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-rose-400">
                    {notification.title}
                  </p>
                  <span className="text-xs text-gray-400">
                    {notification.time}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                  {notification.message}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Chat Animation */}
        <ChatAnimation />
      </div>

      {/* iPhone Mockup - Centered */}
      <div className="relative px-4 mx-auto max-w-7xl md:px-6">
        <div
          className="absolute left-1/2 top-1/2 w-[200px] md:w-[240px] aspect-[9/19.5] bg-black rounded-[2.5rem] border-[8px] md:border-[10px] border-gray-900 shadow-2xl"
          style={{
            transform: getTransform(),
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80px] md:w-[100px] h-[25px] md:h-[30px] bg-black rounded-full z-20" />

          {/* Screen Content */}
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-gradient-to-br from-black via-blue-950/20 to-black">
            {/* Status Bar */}
            <div className="flex items-center justify-between h-10 px-4 pt-2 md:h-12 md:px-6">
              <span className="text-xs font-medium text-white md:text-sm">6:57</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full md:w-3 md:h-3 bg-gradient-to-r from-blue-400 to-rose-400 animate-pulse" />
                <div className="w-2 h-2 bg-white rounded-full md:w-3 md:h-3" />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-6">
              <div className="flex items-center justify-center h-full">
                <div className="mt-6 space-y-4 text-center md:space-y-6 md:mt-8">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto border rounded-full md:w-16 md:h-16 bg-gradient-to-br from-black/80 to-black/40 border-blue-500/20">
                    <Image
                      src="/assets/aria-icon.svg"
                      alt="Aria"
                      width={48}
                      height={48}
                      className="w-8 h-8 md:w-12 md:h-12"
                    />
                  </div>
                  <div>
                    <h2 className="mb-2 text-base font-bold text-transparent md:text-lg bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">
                      All Your Tools in One Place
                    </h2>
                    <p className="mb-6 text-xs text-gray-400 md:text-sm md:mb-8">
                      Manage tasks, reminders & integrations seamlessly
                    </p>
                  </div>
                  <button
                    onClick={handleTryAriaClick}
                    className="relative group"
                  >
                    <div className="absolute transition-opacity duration-500 rounded-full -inset-1 bg-gradient-to-r from-blue-400 to-rose-400 opacity-70 blur group-hover:opacity-100" />
                    <div className="relative px-4 py-2 transition-all duration-300 bg-black border rounded-full md:px-6 md:py-3 border-blue-500/20 group-hover:border-blue-500/50">
                      <span className="flex items-center text-xs font-semibold md:text-sm">
                        <Image
                          src="/assets/aria-icon.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="w-3 h-3 mr-2 md:w-4 md:h-4"
                        />
                        <span className="text-transparent bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text">
                          Start Chat on WhatsApp
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute rounded-full top-1/2 -right-32 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute rounded-full bottom-1/4 left-1/3 w-96 h-96 bg-rose-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default AppleCTA;
