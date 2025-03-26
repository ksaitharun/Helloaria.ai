'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    setTimeout(() => setIsMenuOpen(false), 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-black'} border-b border-blue-500/10`}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="absolute transition-opacity duration-300 rounded-lg opacity-0 -inset-2 bg-blue-500/20 blur group-hover:opacity-100" />
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
          <nav className="items-center hidden space-x-8 md:flex">
            {isHome ? (
              <>
                <button onClick={() => scrollToSection('about')} className="text-base font-medium text-gray-300 hover:text-white">About</button>
                <button onClick={() => scrollToSection('features')} className="text-base font-medium text-gray-300 hover:text-white">Features</button>
                <button onClick={() => router.push('/blog')} className="text-base font-medium text-gray-300 hover:text-white">Blog</button>
                <button onClick={() => scrollToSection('pricing')} className="text-base font-medium text-gray-300 hover:text-white">Pricing</button>
              </>
            ) : (
              <button onClick={() => router.push('/blog')} className="text-base font-medium text-gray-300 hover:text-white">Blog</button>
            )}
          </nav>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <Link href="/signin" className="px-6 py-2.5 rounded-lg bg-[#1a1f36] hover:bg-[#252b45] text-white border border-blue-500/20 hover:border-blue-500/40">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="p-2 text-gray-400 md:hidden hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="py-4 border-t md:hidden border-blue-500/10">
            <nav className="flex flex-col items-center space-y-4">
              {isHome ? (
                <>
                  <button onClick={() => scrollToSection('about')} className="text-base font-medium text-gray-300 hover:text-white">About</button>
                  <button onClick={() => scrollToSection('features')} className="text-base font-medium text-gray-300 hover:text-white">Features</button>
                  <Link href="/blog" className="text-base font-medium text-gray-300 hover:text-white">Blog</Link>
                  <button onClick={() => scrollToSection('pricing')} className="text-base font-medium text-gray-300 hover:text-white">Pricing</button>
                </>
              ) : (
                <Link href="/blog" className="text-base font-medium text-gray-300 hover:text-white">Blog</Link>
              )}
              <Link href="/signin" className="px-6 py-2.5 rounded-lg bg-[#1a1f36] hover:bg-[#252b45] text-white border border-blue-500/20 hover:border-blue-500/40">
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
