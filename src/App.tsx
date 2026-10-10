// Uzhavar Connect - Main Application
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { FloatingActions } from './components/common/FloatingActions';

// Lazy-loaded page components for optimal route-based code splitting
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Services = React.lazy(() => import('./pages/Services/Services'));
const ServiceDetail = React.lazy(() => import('./pages/Services/ServiceDetail'));
const Gallery = React.lazy(() => import('./pages/Gallery/Gallery'));
const Blog = React.lazy(() => import('./pages/Blog/Blog'));
const BlogDetail = React.lazy(() => import('./pages/Blog/BlogDetail'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const BookService = React.lazy(() => import('./pages/BookService/BookService'));
const PrivacyPolicy = React.lazy(() => import('./pages/Legal/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Legal/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap/Sitemap'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

// Minimal, accessible fallback during lazy route transitions
const PageLoader: React.FC = () => (
  <div
    className="min-h-[50vh] flex items-center justify-center"
    role="status"
    aria-live="polite"
    aria-label="Loading page content"
  >
    <div className="w-10 h-10 border-3 border-emerald-200 border-t-[#15803d] rounded-full animate-spin" />
    <span className="sr-only">Loading...</span>
  </div>
);

// Automatically scrolls to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F8FAF7]">
        {/* Sticky Desktop & Mobile Header matching Reference Image */}
        <Navbar />

        {/* Dynamic Page Routes with Suspense */}
        <main className="flex-grow">
          <React.Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-a-service" element={<BookService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />

              {/* Legacy & Alias Route Redirects */}
              <Route path="/join" element={<Navigate to="/contact" replace />} />
              <Route path="/construction" element={<Navigate to="/services/farm-house" replace />} />
              <Route path="/book-team" element={<Navigate to="/contact" replace />} />
              <Route path="/manage-farm" element={<Navigate to="/services/end-to-end-farm-management" replace />} />
              <Route path="/farm-details" element={<Navigate to="/services/farm-layout-and-planning" replace />} />
              <Route path="/buy-inputs" element={<Navigate to="/services" replace />} />
              <Route path="/sell-produce" element={<Navigate to="/services/buyback-assistance" replace />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating Action Buttons: WhatsApp Us + Back-to-Top */}
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
};

export default App;
