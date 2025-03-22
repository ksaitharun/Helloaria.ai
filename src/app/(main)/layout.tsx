export const metadata = {
  title: 'Hello Aria',
  description: 'Your WhatsApp AI Assistant for Productivity and Organization',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
