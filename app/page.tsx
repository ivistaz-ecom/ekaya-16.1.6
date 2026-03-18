import React, { Suspense } from "react";
import Banner from "../components/HomePage/Banner";
import Crafted from "../components/HomePage/Crafted";
import Overview from "../components/HomePage/PropertyOverview";
import Clients from "../components/HomePage/Clients";
import WhyEkaya from "../components/HomePage/WhyEkaya";
import Insights from "../components/HomePage/Insights";
import Contact from "../components/HomePage/Contact";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Luxury apartments for sale in Bangalore | Best holiday home in Goa | Ekaya Spaces',
  description:
    'Explore exquisite premium luxury apartments for sale in Goa and Bangalore. Find your dream home in these prime locations with top-notch amenities',
  alternates: { canonical: 'https://ekaya-spaces.com/' },
  openGraph: {
    type: 'website',
    url: 'https://ekaya-spaces.com/',
    title:
      'Luxury apartments for sale in Bangalore | Best holiday home in Goa | Ekaya Spaces',
    description:
      'Explore exquisite premium luxury apartments for sale in Goa and Bangalore. Find your dream home in these prime locations with top-notch amenities',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Luxury apartments for sale in Bangalore | Best holiday home in Goa | Ekaya Spaces',
    description:
      'Explore exquisite premium luxury apartments for sale in Goa and Bangalore. Find your dream home in these prime locations with top-notch amenities',
  },
};

export default function Home() {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Banner />
        <Crafted />
        <Overview />
        {/* <Clients /> */}
        <WhyEkaya />
        <Insights />
        <Contact />
      </Suspense>
    </>
  );
}
