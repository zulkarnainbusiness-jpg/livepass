import React, { useEffect } from 'react';

interface SEOHelperProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  jsonLd?: object;
  ogImage?: string;
  twitterCard?: string;
}

export const SEOHelper: React.FC<SEOHelperProps> = ({
  title,
  description,
  canonicalUrl,
  jsonLd,
  ogImage,
  twitterCard = 'summary_large_image'
}) => {
  useEffect(() => {
    // Update Title
    document.title = title ? `${title} | LIVEPASSWATCH` : 'LIVEPASSWATCH | Real-Time Mountain Pass Status';

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Open Graph
    const setMeta = (property: string, content: string, isName = false) => {
      const attr = isName ? 'name' : 'property';
      let el = document.querySelector(`meta[${attr}="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:type', 'website');
    if (ogImage) setMeta('og:image', ogImage);

    // Twitter Card
    setMeta('twitter:card', twitterCard, true);
    setMeta('twitter:title', title, true);
    setMeta('twitter:description', description, true);
    if (ogImage) setMeta('twitter:image', ogImage, true);

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // Update JSON-LD Script
    const existingScript = document.getElementById('jsonld-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'jsonld-structured-data';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalUrl, jsonLd, ogImage, twitterCard]);

  return null;
};
