'use client'

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPost() {
  const params = useParams<{ id: string }>();
  const id = Number(useParams()?.id)
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Link 
              href="/blog" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Return to Blog
            </Link>
          </div>
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
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-blue-500/20">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Share this article:
              </div>
              <div className="flex space-x-4">
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  Twitter
                </button>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  LinkedIn
                </button>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  WhatsApp
                </button>
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
