'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer'; // Adjust path if needed
import { blogPosts } from '@/lib/blog-data';
const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to WhatsApp Task Management",
    excerpt: "Boost Productivity with AI-Powered Task Management on WhatsApp...",
    category: "Task Management",
    readTime: "6 min read",
    date: "March 13, 2024",
    author: "Team Aria",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Mastering Google Calendar Integration with Hello Aria",
    excerpt: "Sync Your Tasks, Events & Reminders with AI Precision...",
    category: "Integration",
    readTime: "7 min read",
    date: "March 12, 2024",
    author: "Team Aria",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "How Hello Aria's WhatsApp AI Assistant Enhances Productivity",
    excerpt: "Discover how our AI-powered WhatsApp assistant revolutionizes task management...",
    category: "Productivity",
    readTime: "5 min read",
    date: "March 14, 2024",
    author: "Team Aria",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Automated Messaging: Save Time with Hello Aria",
    excerpt: "Explore how automated messaging can streamline communication...",
    category: "Automation",
    readTime: "4 min read",
    date: "March 11, 2024",
    author: "Team Aria",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Advanced OCR Features: From Images to Text",
    excerpt: "Unlock the power of OCR technology to extract text from images...",
    category: "Features",
    readTime: "5 min read",
    date: "March 10, 2024",
    author: "Team Aria",
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Hello Aria for Teams: Collaborative Task Management",
    excerpt: "How teams can leverage Hello Aria to improve collaboration...",
    category: "Teams",
    readTime: "6 min read",
    date: "March 9, 2024",
    author: "Team Aria",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  }
];

export default function BlogPage() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500">
            Latest Articles
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-indigo-500/50 hover:transform hover:-translate-y-1"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative h-48">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-4 text-white hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-indigo-400">{post.author}</span>
                      <span className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer 
        showPrivacyPolicy={showPrivacyPolicy}
        setShowPrivacyPolicy={setShowPrivacyPolicy}
      />
    </div>
  );
}
