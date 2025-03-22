'use client'

import { Smartphone, Send, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  isVisible: boolean;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ isVisible }) => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-rose-400">
          How It Works
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-rose-500/20 to-transparent" />

          <div className="space-y-12 md:space-y-24">
            <div className={`relative flex flex-col md:flex-row items-start md:items-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="w-full md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 mb-4 md:mb-0">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full blur-xl opacity-50" />
                    <div className="relative bg-gradient-to-r from-blue-400 to-rose-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                      <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Save Hello Aria&apos;s Number</h3>
                <p className="text-gray-400">Add our WhatsApp number to your contacts for instant access.</p>
                <div className="mt-4">
                  <span className="inline-block bg-gradient-to-r from-blue-500/10 to-rose-500/10 border border-blue-500/20 rounded-lg px-3 py-1 md:px-4 md:py-2 text-white font-mono text-sm">
                    +91 70754 71676
                  </span>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 top-2 md:top-1/2 w-8 h-8 md:w-12 md:h-12 md:-ml-6 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full blur-lg opacity-20" />
                  <div className="relative w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-400 to-rose-400 flex items-center justify-center text-base md:text-lg font-bold text-white">
                    1
                  </div>
                </div>
              </div>
            </div>

            <div className={`relative flex flex-col md:flex-row items-start md:items-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="absolute left-6 md:left-1/2 top-2 md:top-1/2 w-8 h-8 md:w-12 md:h-12 md:-ml-6 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-blue-400 rounded-full blur-lg opacity-20" />
                  <div className="relative w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-rose-400 to-blue-400 flex items-center justify-center text-base md:text-lg font-bold text-white">
                    2
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:order-last pl-16 md:pl-12 mb-4 md:mb-0">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-blue-400 rounded-full blur-xl opacity-50" />
                    <div className="relative bg-gradient-to-r from-rose-400 to-blue-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                      <Send className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Send a Message</h3>
                <p className="text-gray-400">Start a chat with &quot;Hello&quot; to begin your productivity journey.</p>
              </div>
            </div>

            <div className={`relative flex flex-col md:flex-row items-start md:items-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="w-full md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 mb-4 md:mb-0">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full blur-xl opacity-50" />
                    <div className="relative bg-gradient-to-r from-blue-400 to-rose-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Enjoy Task Management</h3>
                <p className="text-gray-400">Experience seamless organization with AI-powered assistance.</p>
              </div>
              <div className="absolute left-6 md:left-1/2 top-2 md:top-1/2 w-8 h-8 md:w-12 md:h-12 md:-ml-6 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full blur-lg opacity-20" />
                  <div className="relative w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-400 to-rose-400 flex items-center justify-center text-base md:text-lg font-bold text-white">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent -z-10" />
    </div>
  );
};

export default HowItWorks;
