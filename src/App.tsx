// Uzhavar Connect - Main Application
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { FloatingActions } from './components/common/FloatingActions';

import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Services } from './pages/Services/Services';
import { ServiceDetail } from './pages/Services/ServiceDetail';
import { Gallery } from './pages/Gallery/Gallery';
import { Blog } from './pages/Blog/Blog';
import { BlogDetail } from './pages/Blog/BlogDetail';
import { Contact } from './pages/Contact/Contact';
import { PrivacyPolicy } from './pages/Legal/PrivacyPolicy';
import { Terms } from './pages/Legal/Terms';
import { Sitemap } from './pages/Sitemap/Sitemap';
import { NotFound } from './pages/NotFound/NotFound';

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

        {/* Dynamic Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-a-service" element={<Navigate to="/contact" replace />} />
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
