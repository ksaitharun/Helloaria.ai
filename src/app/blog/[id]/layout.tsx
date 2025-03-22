'use client';

import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const params = useParams() as { id: string };
  const id = params.id;

  return (
    <div className="text-white">
      <h1>Blog Post: {id}</h1>
    </div>
  );
}
