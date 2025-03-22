// src/app/(main)/layout.tsx

export const metadata = {
  title: 'Hello Aria',
  description: 'Your WhatsApp AI Assistant for Productivity and Organization',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // no <html> or <body> here
}
