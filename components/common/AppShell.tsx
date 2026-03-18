'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(false);
  };

  return (
    <div onClick={handleClick}>
      <Header stats={status} />
      {children}
      <SpeedInsights />
      <Footer />
    </div>
  );
}

