import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
  keywords?: string;
}

export function usePageSeo({ title, description, keywords }: SeoProps) {
  useEffect(() => {
    // Set document title
    const fullTitle = `${title} | Uzhavar Connect - Agriculture Farm Land Developer`;
    document.title = fullTitle;

    // Set meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // Set meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title, description, keywords]);
}
