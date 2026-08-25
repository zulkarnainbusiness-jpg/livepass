import React, { useEffect } from 'react';

interface SEOHelperProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  jsonLd?: object;
  ogImage?: string;
  twitterCard?: string;
  noIndex?: boolean;
}

const DEFAULT_DOMAIN = 'https://www.livepasswatch.info';

export const SEOHelper: React.FC<SEOHelperProps> = ({
  title,
  description,
  canonicalUrl,
  jsonLd,
  ogImage = '/hero-bg.png',
  twitterCard = 'summary_large_image',
  noIndex = false
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = title
      ? title.toLowerCase().includes('livepasswatch')
        ? title
        : `${title} | LivePassWatch`
      : 'LivePassWatch | Real-Time Mountain Pass Status, Road Conditions & Alerts';
    document.title = formattedTitle;

    // Helper to safely set/create meta tags
    const setMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Meta Description
    setMeta('name', 'description', description);

    // 3. Robots Tag (index / noindex)
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // 4. Open Graph Metadata
    const absoluteOgImage = ogImage.startsWith('http')
      ? ogImage
      : `${DEFAULT_DOMAIN}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

    const rawCanonical = canonicalUrl || window.location.pathname;
    const absoluteCanonical = rawCanonical.startsWith('http')
      ? rawCanonical
      : `${DEFAULT_DOMAIN}${rawCanonical.startsWith('/') ? '' : '/'}${rawCanonical}`;

    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', absoluteCanonical);
    setMeta('property', 'og:image', absoluteOgImage);
    setMeta('property', 'og:site_name', 'LivePassWatch');

    // 5. Twitter Card Metadata
    setMeta('name', 'twitter:card', twitterCard);
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', absoluteOgImage);

    // 6. Canonical Link Tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', absoluteCanonical);

    // 7. Structured Data (JSON-LD)
    const scriptId = 'jsonld-structured-data';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalUrl, jsonLd, ogImage, twitterCard, noIndex]);

  return null;
};
