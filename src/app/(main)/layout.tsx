// REMOVE this import if it's not needed for this layout
// import './globals.css';

// You can keep your metadata
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
    // REMOVE the html and body tags - these should only be in root layout
    <div className="main-content-wrapper">
      {children}
    </div>
  );
}
