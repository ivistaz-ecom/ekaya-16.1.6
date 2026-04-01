import './globals.css';
import Script from 'next/script';
import 'aos/dist/aos.css';
import AppShell from '../components/common/AppShell';

export const metadata = {
  metadataBase: new URL('https://ekaya-spaces.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/app/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://ekaya-spaces.com/#organization',
        name: 'Ekaya Spaces',
        url: 'https://ekaya-spaces.com/',
        logo: { '@type': 'ImageObject', url: 'https://ekaya-spaces.com/logo.png' },
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
        areaServed: { '@type': 'City', name: 'Bangalore' },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
        geo: { '@type': 'GeoCoordinates', latitude: '12.9716', longitude: '77.5946' },
        foundingLocation: { '@type': 'Place', name: 'Bangalore, India' },
        makesOffer: {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Real Estate Development',
            serviceType: 'Residential and Commercial Projects',
          },
        },
        parentOrganization: { '@id': 'https://ekaya-spaces.com/#organization' },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ekaya-spaces.com/#website',
        url: 'https://ekaya-spaces.com/',
        name: 'Ekaya Spaces Official Website',
        inLanguage: 'en-IN',
        publisher: { '@id': 'https://ekaya-spaces.com/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://ekaya-spaces.com/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TDTF8V4X');`}
        </Script>
        {/* End Google Tag Manager */}

        <link
          rel="preload"
          href="/logo.svg"
          as="image"
          type="image/svg+xml"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDTF8V4X"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
