'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import AppleCTA from '@/components/AppleCTA'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const testimonials = [
    {
      name: "Rajesh Sharma",
      rating: 5,
      text: "Hello Aria keeps my tasks on track like a personal assistant. No more forgotten deadlines! The Google Calendar integration is fantastic."
    },
    {
      name: "Priya Patel",
      rating: 5,
      text: "Love how I can just text my reminders and get things done. The WhatsApp integration makes it super convenient for daily use!"
    },
    {
      name: "Arun Verma",
      rating: 5,
      text: "As a busy entrepreneur, Hello Aria has transformed how I manage my day. The AI understands context perfectly and saves me hours!"
    },
    {
      name: "Meera Krishnan",
      rating: 5,
      text: "The image recognition feature saves me so much time with receipts and documents. Best productivity tool I've used in years!"
    },
    {
      name: "Vikram Malhotra",
      rating: 5,
      text: "Started with the basic plan, upgraded to pro within a week. The advanced features are game-changing for my entire team."
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Hero isVisible={isVisible} handleRipple={handleRipple} />
      <About isVisible={isVisible} />
      <Features isVisible={isVisible} />
      <HowItWorks isVisible={isVisible} />
      <Pricing isVisible={isVisible} handleRipple={handleRipple} />
      <Testimonials 
        isVisible={isVisible}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
        testimonials={testimonials}
      />
      <AppleCTA handleRipple={handleRipple} />
      <BlogSection />
      <Footer 
        showPrivacyPolicy={showPrivacyPolicy}
        setShowPrivacyPolicy={setShowPrivacyPolicy}
      />
    </>
  );
}