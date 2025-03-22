'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

const blogPosts: Record<number, any> = {
  1: {
    title: "How Hello Aria's WhatsApp AI Assistant Enhances Productivity 🚀",
    date: "March 14, 2024",
    readTime: "5 min read",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    content: `In today's fast-paced world, staying organized is more challenging than ever. ...`,
  },
  2: {
    title: "Maximize Efficiency with Automated Messaging and Personalized Dashboards 📊",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Features",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    content: `Maximize Efficiency with Automated Messaging and Personalized Dashboards 📊 ...`,
  },
  3: {
    title: "Integrate Google Calendar, Drive, and Flight Status Updates with Hello Aria 🔄",
    date: "Feb 12, 2024",
    readTime: "6 min read",
    category: "Integrations",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    content: `Managing multiple platforms can often disrupt your workflow ...`,
  },
  4: {
    title: "Why Hello Aria is the Ultimate AI Calendar Assistant for Your Tasks ⚡",
    date: "Feb 11, 2024",
    readTime: "4 min read",
    category: "AI Features",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    content: `Tired of juggling multiple task management systems? ...`,
  },
};

export default function BlogPostPage() {
  const params = useParams() as { id: string };
  const id = params.id;
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const post = blogPosts[Number(id)];

  if (!post) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="relative h-[400px] mb-12 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-2 text-sm text-blue-400 mb-4">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{post.title}</h1>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph.split('\n').map((line, lineIndex, array) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < array.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-blue-500/20">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Share this article:</div>
              <div className="flex space-x-4">
                <button className="text-blue-400 hover:text-blue-300 transition-colors">Twitter</button>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</button>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">WhatsApp</button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <Footer
        showPrivacyPolicy={showPrivacyPolicy}
        setShowPrivacyPolicy={setShowPrivacyPolicy}
      />
    </div>
  );
}
