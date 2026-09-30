import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS_DATA } from '../../data/blogPosts';
import { usePageSeo } from '../../utils/seo';
import { CTASection } from '../../components/common/CTASection';
import { Button } from '../../components/buttons/Button';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { BlogPostItem } from '../../types';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post: BlogPostItem | undefined = BLOG_POSTS_DATA.find((b: BlogPostItem) => b.slug === slug);

  usePageSeo({
    title: post ? `${post.title} | Uzhavar Connect` : 'Article Not Found',
    description: post?.excerpt || 'Agricultural guide from Uzhavar Connect.',
    canonicalUrl: post ? `https://uzhavarconnect.com/blog/${post.slug}` : 'https://uzhavarconnect.com/blog',
    ogImage: post?.image ? `https://uzhavarconnect.com${post.image}` : undefined,
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="bg-[#f8faf7] min-h-screen">
      
      {/* Article Header */}
      <section className="bg-white border-b border-slate-100 pt-10 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#15803d] hover:text-[#0e3922] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </Link>

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#15803d] mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e3922] tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <User className="w-4 h-4 text-emerald-600" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-600" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                {post.readTime}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              aria-label="Share article"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>

        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/9] bg-slate-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-emerald lg:prose-lg max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
            {post.content.map((paragraph: string, idx: number) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Related Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Consultation Lead Magnet Box */}
          <div className="mt-12 bg-emerald-50 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#0e3922]">
                Need help putting these methods to work?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Uzhavar Connect provides the machinery, saplings, and skilled execution teams.
              </p>
            </div>
            <Button
              to="/book-a-service"
              size="md"
              className="shrink-0"
            >
              Book Consultation
            </Button>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Ready to Transform Your Land into a Profitable Farm?"
        subtitle="Contact our agricultural consultants today for an on-site feasibility evaluation."
        buttonLabel="Get Free Consultation"
      />

    </div>
  );
};

export const BlogDetailPage = BlogDetail;
export default BlogDetail;
