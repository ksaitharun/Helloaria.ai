// src/app/(main)/layout.tsx

export const metadata = {
  title: 'Hello Aria - Smart WhatsApp Assistant',
  description: 'Productivity AI Assistant built into WhatsApp.',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // No <html> or <body> here!
}
