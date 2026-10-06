import React from 'react';
import { usePageSeo } from '../../utils/seo';
import { BLOG_POSTS_DATA } from '../../data/blogPosts';
import { Link } from 'react-router-dom';
import { CTASection } from '../../components/common/CTASection';
import { BlogHero } from './components/BlogHero';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { BlogPostItem } from '../../types';

export const Blog: React.FC = () => {
  usePageSeo({
    title: 'Farming Knowledge & Land Development Guides',
    description: 'Expert agricultural guides on turning dry land into productive farms, drip irrigation ROI, timber tree plantations, and farmhouse architecture in Tamil Nadu.',
    canonicalUrl: 'https://uzhavarconnect.com/blog',
  });

  return (
    <div className="bg-[#f8faf7]">
      {/* 1. Dedicated Visual Brand Section — Only Visible Element */}
      <section className="w-full flex items-center justify-center py-6 sm:py-8 md:py-10 overflow-hidden">
        <div className="w-[95%] sm:w-[90%] max-w-[1100px] lg:max-w-[1200px] mx-auto flex items-center justify-center">
          <img
            src="/assets/60660d89-1d5c-44f4-b57a-10b5417a3fec.png"
            alt="Uzhavar Connect - Coming Soon"
            className="w-full max-w-[1100px] lg:max-w-[1200px] h-auto object-contain mx-auto select-none"
          />
        </div>
      </section>

      {/* 2. Agricultural Guides & Articles */}
      <div>
        {/* 1. Hero Header */}
        <BlogHero />

        {/* 2. Blog Posts Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {BLOG_POSTS_DATA.map((post: BlogPostItem) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover border border-slate-100 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#15803d] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                        {post.category}
                      </div>
                    </div>

                    {/* Body Info */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-emerald-600" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-[#0e3922] group-hover:text-[#16a34a] transition-colors leading-snug">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Author Footnote */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-emerald-600" />
                          {post.author}
                        </span>

                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-xs sm:text-sm font-bold text-[#15803d] group-hover:text-[#0e3922] inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Read Full Guide</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                    </div>
                  </div>

                </article>
              ))}
            </div>

          </div>
        </section>

        {/* 3. Final Consultation CTA */}
        <CTASection
          title="Ready to Apply These Farm Practices on Your Land?"
          subtitle="Speak with our chief agronomist for customized soil remediation and plantation scheduling."
          buttonLabel="Schedule Free Consultation"
        />
      </div>
    </div>
  );
};

export const BlogPage = Blog;
export default Blog;
