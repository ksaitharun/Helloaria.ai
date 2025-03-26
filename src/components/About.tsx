import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AboutProps {
  isVisible: boolean;
}

interface MiniLogo {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
}

const About: React.FC<AboutProps> = ({ isVisible }) => {
  const [miniLogos, setMiniLogos] = useState<MiniLogo[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const createMiniLogos = () => {
    const numberOfLogos = 12;
    const newLogos: MiniLogo[] = [];
    
    for (let i = 0; i < numberOfLogos; i++) {
      const angle = (Math.PI * 2 * i) / numberOfLogos;
      const velocity = 15;
      newLogos.push({
        id: Date.now() + i,
        x: 0,
        y: 0,
        velocityX: Math.cos(angle) * velocity,
        velocityY: Math.sin(angle) * velocity,
        rotation: Math.random() * 360
      });
    }
    
    setMiniLogos(newLogos);

    setTimeout(() => {
      setMiniLogos([]);
    }, 2000);
  };

  return (
    <div id="about" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-rose-400">
              About Hello Aria
            </h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Hello Aria is your AI-powered WhatsApp assistant that keeps your tasks organized effortlessly. 
                Set reminders, manage to-dos, and boost productivity—all in one chat.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group">
                  <div className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-rose-400">
                    -
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Active Users
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group">
                  <div className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-blue-400">
                    -
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Tasks Managed
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group">
                  <div className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-rose-400">
                    99.9%
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Uptime
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group">
                  <div className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-blue-400">
                    -
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    User Rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div 
              className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: isHovered ? 1.1 : 1, 
                opacity: 1,
                y: isHovered ? -10 : 0
              }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 200
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              style={{ animationDelay: '1s' }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-rose-600 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow" />
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-600 to-blue-600 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow" style={{ animationDelay: '1s' }} />
              
              <motion.div 
                className="relative bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-full p-6 md:p-8 border border-blue-500/20 cursor-pointer"
                whileTap={{ scale: 0.95 }}
                onClick={createMiniLogos}
              >
                <motion.div 
                  animate={{
                    rotate: isHovered ? [0, 5, -5, 0] : 0
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image 
                    src="/assets/aria-icon.svg"
                    alt="Aria Icon"
                    width={192}
                    height={192}
                    className="w-32 h-32 md:w-48 md:h-48 relative z-10"
                  />
                </motion.div>
              </motion.div>

              {miniLogos.map((logo) => (
                <motion.div
                  key={logo.id}
                  className="absolute w-6 h-6 md:w-8 md:h-8"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                  }}
                  animate={{
                    x: logo.velocityX * 30,
                    y: logo.velocityY * 30,
                    opacity: 0,
                    scale: 0.5,
                    rotate: logo.rotation + 360
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeOut"
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Image 
                    src="/assets/aria-icon.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent -z-10" />
    </div>
  );
};

export default About;
