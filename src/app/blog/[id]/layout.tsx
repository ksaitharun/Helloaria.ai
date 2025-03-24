// src/app/blog/[id]/layout.tsx
import { ReactNode } from 'react';

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-white">
      {/* Your shared layout elements for all blog post pages go here */}
      
      {/* This is crucial so that the actual `[id]/page.tsx` content will appear */}
      {children}
    </div>
  );
}
