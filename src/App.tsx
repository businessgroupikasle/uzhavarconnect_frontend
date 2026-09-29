import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { BookService } from './pages/BookService/BookService';
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
            <Route path="/book-a-service" element={<BookService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
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
