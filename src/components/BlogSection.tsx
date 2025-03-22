import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import blogPosts from '@/lib/blog-data';

const BlogSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-black to-blue-950/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-rose-400">
            Latest Insights from Hello Aria
          </h1>
          <p className="text-xl text-blue-100/80">
            Discover how our WhatsApp AI assistant revolutionizes task management and productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="blog-card opacity-0 group cursor-pointer animate-fadeIn"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </div>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-2 mb-6">
                      <span 
                        className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-400"
                      >
                        {post.category}
                      </span>
                      <span className="text-blue-500/50">•</span>
                      <span className="text-sm text-blue-100/60">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-blue-100/80 mb-6 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div 
                      className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                    >
                      <span className="mr-2">Read More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/10 to-rose-500/10 hover:from-blue-500/20 hover:to-rose-500/20 text-white font-semibold transition-all duration-300 hover:scale-105 border border-blue-500/20 hover:border-blue-500/40"
          >
            <span>View All Articles</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
