'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-black'
      } border-b border-blue-500/10`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="absolute -inset-2 bg-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-[140px] h-[40px]">
              <Image 
                src="/assets/header-logo.svg" 
                alt="Hello Aria" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHome ? (
              <>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </button>
                <Link 
                  href="/blog"
                  className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </>
            ) : (
              <Link 
                href="/blog" 
                className="text-base font-medium text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
            )}
          </nav>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <Link 
              href="/signin"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#1a1f36] hover:bg-[#252b45] text-white font-medium transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-500/10 py-4">
            <nav className="flex flex-col items-center space-y-4">
              {isHome ? (
                <>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')} 
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Features
                  </button>
                  <Link 
                    href="/blog"
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                  <button 
                    onClick={() => scrollToSection('pricing')} 
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                </>
              ) : (
                <Link 
                  href="/blog" 
                  className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              )}
              <Link 
                href="/signin"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#1a1f36] hover:bg-[#252b45] text-white font-medium transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40"
              >
                Sign In
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;