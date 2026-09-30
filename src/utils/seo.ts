import { useEffect } from 'react';

export interface SeoProps {
  title: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  overrideFullTitle?: boolean;
}

function setMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function usePageSeo({
  title,
  description,
  keywords,
  canonicalUrl = 'https://uzhavarconnect.com/',
  ogImage = 'https://uzhavarconnect.com/assets/logo.jpeg',
  ogType = 'website',
  overrideFullTitle = false,
}: SeoProps) {
  useEffect(() => {
    // Set document title
    const fullTitle = overrideFullTitle || title.includes('Uzhavar Connect')
      ? title
      : `${title} | Uzhavar Connect`;
    document.title = fullTitle;

    // Set meta description
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    // Set meta keywords
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // Set Open Graph and Twitter core tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Uzhavar Connect');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:image', ogImage);

    // Set canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, overrideFullTitle]);
}

