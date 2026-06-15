import React from 'react';
import { Helmet } from 'react-helmet-async';
import { defaultSEO, pageSEO } from '../utils/seo';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  publishedTime,
  updatedTime,
  author,
  noIndex = false 
}) => {
  const siteTitle = title ? `${title} | ${defaultSEO.siteName}` : defaultSEO.title;
  const siteDescription = description || defaultSEO.description;
  const siteKeywords = keywords || defaultSEO.keywords;
  const siteUrl = url || defaultSEO.siteUrl;
  const siteImage = image || `${defaultSEO.siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={author || defaultSEO.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={defaultSEO.themeColor} />
      <meta name="color-scheme" content="dark light" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Robots Meta Tag */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:creator" content={defaultSEO.twitterHandle} />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {updatedTime && <meta property="article:modified_time" content={updatedTime} />}
          <meta property="article:author" content={author || defaultSEO.author} />
        </>
      )}
      
      {/* Business Specific */}
      <meta name="business:contact_data:country" content="India" />
      <meta name="business:contact_data:city" content="Bangalore" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": defaultSEO.click,
          "url": defaultSEO.siteUrl,
          "logo": `${defaultSEO.siteUrl}/image-removebg-preview.png`,
          "description": defaultSEO.description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "clickcontact00@gmail.com",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://www.instagram.com/click_contact00?igsh=MW9rbHQ5ZHp3cmFrZA==",
            "https://linkedin.com/company/clickagency",
            "https://twitter.com/clickagency"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;