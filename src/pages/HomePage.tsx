import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import AppleCTA from '../components/AppleCTA';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

interface HomePageProps {
  handleRipple: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const HomePage: React.FC<HomePageProps> = ({ handleRipple }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
    },
    {
      name: "Neha Reddy",
      rating: 5,
      text: "Managing multiple projects became so much easier. The automated reminders and task tracking are incredibly helpful."
    },
    {
      name: "Arjun Nair",
      rating: 5,
      text: "The flight status updates and travel management features are perfect for frequent travelers like me. Highly recommended!"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-12"> {/* Reduced top padding */}
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
    </div>
  );
};

export default HomePage;