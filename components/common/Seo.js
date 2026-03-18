'use client';

import { useEffect } from 'react';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://ekaya-spaces.com/#organization',
      name: 'Ekaya Spaces',
      url: 'https://ekaya-spaces.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ekaya-spaces.com/logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-80-4951-7389',
        contactType: 'customer support',
        areaServed: 'IN',
      },
      sameAs: [
        'https://www.linkedin.com/company/ekaya-spaces/',
        'https://www.instagram.com/ekaya_spaces/',
        'https://www.facebook.com/EkayaSpaces/',
      ],
    },
    {
      '@type': 'RealEstateDeveloper',
      '@id': 'https://ekaya-spaces.com/#realestatebusiness',
      name: 'Ekaya Spaces LLP',
      url: 'https://ekaya-spaces.com/',
      image: 'https://ekaya-spaces.com/logo.png',
      description:
        'Ekaya Spaces LLP is a Bangalore-based real estate developer specializing in modern residential and commercial spaces with a focus on design, sustainability, and functionality.',
      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9716',
        longitude: '77.5946',
      },
      foundingLocation: {
        '@type': 'Place',
        name: 'Bangalore, India',
      },
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Real Estate Development',
          serviceType: 'Residential and Commercial Projects',
        },
      },
      parentOrganization: {
        '@id': 'https://ekaya-spaces.com/#organization',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ekaya-spaces.com/#website',
      url: 'https://ekaya-spaces.com/',
      name: 'Ekaya Spaces Official Website',
      inLanguage: 'en-IN',
      publisher: {
        '@id': 'https://ekaya-spaces.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ekaya-spaces.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://ekaya-spaces.com/#homepage',
      url: 'https://ekaya-spaces.com/',
      name: 'Ekaya Spaces - Real Estate Developer in Bangalore',
      isPartOf: {
        '@id': 'https://ekaya-spaces.com/#website',
      },
      about: {
        '@id': 'https://ekaya-spaces.com/#realestatebusiness',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://ekaya-spaces.com/logo.png',
      },
    },
  ],
};

function upsertMeta(selector, attrs) {
  const head = document.head;
  if (!head) return;
  const existing = head.querySelector(selector);
  const el = existing ?? document.createElement('meta');
  Object.entries(attrs).forEach(([k, v]) => {
    if (v === undefined || v === null || v === '') return;
    el.setAttribute(k, String(v));
  });
  if (!existing) head.appendChild(el);
}

function upsertLink(selector, attrs) {
  const head = document.head;
  if (!head) return;
  const existing = head.querySelector(selector);
  const el = existing ?? document.createElement('link');
  Object.entries(attrs).forEach(([k, v]) => {
    if (v === undefined || v === null || v === '') return;
    el.setAttribute(k, String(v));
  });
  if (!existing) head.appendChild(el);
}

function upsertJsonLd(id, json) {
  const head = document.head;
  if (!head) return;
  const safeId = typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(id) : id;
  const selector = `script#${safeId}`;
  const existing = head.querySelector(selector);
  const el = existing ?? document.createElement('script');
  el.id = id;
  el.type = 'application/ld+json';
  el.text = JSON.stringify(json);
  if (!existing) head.appendChild(el);
}

const Seo = ({ pageTitle, pageDescription, MetaImage, url }) => {
  useEffect(() => {
    if (pageTitle) document.title = pageTitle;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: pageDescription,
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index,follow',
    });
    upsertMeta('meta[name="googlebot"]', {
      name: 'googlebot',
      content: 'index,follow',
    });

    upsertLink('link[rel="icon"][href="/favicon.ico"]', { rel: 'icon', href: '/favicon.ico' });
    upsertLink('link[rel="icon"][type="image/svg+xml"]', {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/app/favicon.svg',
    });
    upsertLink('link[rel="icon"][type="image/png"][sizes="32x32"]', {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    });
    upsertLink('link[rel="icon"][type="image/png"][sizes="48x48"]', {
      rel: 'icon',
      type: 'image/png',
      sizes: '48x48',
      href: '/favicon-48x48.png',
    });
    upsertLink('link[rel="apple-touch-icon"]', {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    });

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: url });

    upsertMeta('meta[itemprop="name"]', { itemprop: 'name', content: pageTitle });
    upsertMeta('meta[itemprop="description"]', {
      itemprop: 'description',
      content: pageDescription,
    });
    upsertMeta('meta[itemprop="image"]', { itemprop: 'image', content: MetaImage });

    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: pageDescription,
    });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: MetaImage });

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: pageDescription,
    });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: MetaImage });

    upsertJsonLd('ekaya-structured-data', structuredData);
  }, [pageTitle, pageDescription, MetaImage, url]);

  return null;
};

export default Seo;