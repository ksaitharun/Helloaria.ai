import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import SignInPage from './pages/SignInPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black relative overflow-x-hidden">
        {/* Base gradient background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-950/20 to-rose-500/5" />
        
        {/* Animated gradient overlay */}
        <div className="fixed inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-rose-500/5"
              style={{
                transform: `rotate(${120 * i}deg)`,
                animation: `pulse ${6 + i}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                opacity: 0.3
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />

        {/* Noise texture */}
        <div className="fixed inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]" />

        {/* Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route
              path="*"
              element={
                <>
                  <Header handleRipple={handleRipple} />
                  <Routes>
                    <Route path="/" element={<HomePage handleRipple={handleRipple} />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:id" element={<BlogPostPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                  </Routes>
                </>
              }
            />
          </Routes>
        </div>

        {/* Decorative orbs */}
        <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </Router>
  );
}

export default App;