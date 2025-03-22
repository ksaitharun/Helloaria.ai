// Remove the import for globals.css as it's already imported in root layout
// import './globals.css'; 

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
    // Replace HTML/body with a simple div wrapper
    <div className="main-content-wrapper">
      {children}
    </div>
  );
}
